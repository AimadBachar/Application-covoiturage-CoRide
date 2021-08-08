-- Deploy coride:create-views to pg

BEGIN;

CREATE VIEW travels_view AS 
SELECT
    t.id,
    t.departure_city,
    t.latitude_departure,
    t.longitude_departure,
    t.destination_city,
	t.places_available,
    (t.places_available - (
		SELECT COUNT(*) FROM user_travel AS ut
		WHERE t.id = ut.travel_id
	))::int AS remaining_places,
    t.description,
    t.departure_timestamp,
    a.id AS activity_id,
    a.label AS activity,
    u.id AS driver_id,
    u.pseudo AS driver
FROM travel AS t 
INNER JOIN "user" AS u
ON u.id = t.user_id
INNER JOIN activity AS a
ON a.id = t.activity_id;




CREATE VIEW users_view AS 
SELECT 

    json_build_object(
        'id',u.id,
        'first_name',first_name,
        'last_name',last_name,
        'picture_link',picture_link,
        'pseudo',pseudo,
        'email',email,
        'biography',biography,
        'birthdate',birthdate,
        'created_at',created_at,
        'activities',ARRAY(
            SELECT json_build_object(
                'id',a.id,
                'label',a.label,
                'color',a.color
            )
            FROM activity AS a
            INNER JOIN user_activity AS ua
            ON ua.activity_id = a.id AND ua.user_id = u.id),
        'travels_passenger',ARRAY(
            SELECT json_build_object(
                'id',t.id,
                'departure_city',t.departure_city,
                'destination_city',t.destination_city,
                'departure_timestamp',t.departure_timestamp
            ) 
            FROM travel AS t 
            INNER JOIN user_travel AS ut
            ON ut.travel_id = t.id AND ut.user_id = u.id
            WHERE t.departure_timestamp >= NOW()
            ORDER BY t.departure_timestamp),
        'travels_driver',ARRAY(
            SELECT json_build_object(
                'id',t.id,
                'departure_city',t.departure_city,
                'destination_city',t.destination_city,
                'departure_timestamp',t.departure_timestamp,
                'passengers',
                    ARRAY(
                        SELECT json_build_object(
                        'id',u.id,
                        'first_name',u.first_name,
                        'last_name',u.last_name,
                        'email',u.email
                    )
                    FROM "user" AS u
                    INNER JOIN user_travel AS ut
                    ON u.id = ut.user_id 
                    AND ut.travel_id = t.id)
                
            ) 
            FROM travel AS t 
            WHERE u.id = t.user_id AND t.departure_timestamp >= NOW()
            ORDER BY t.departure_timestamp),
        'vehicles',ARRAY(
            SELECT json_build_object(
                'id',v.id,
                'brand',v.brand,
                'model',v.model
            )
            FROM vehicle AS v 
            WHERE u.id = v.user_id),
        'vehicle_options',ARRAY(
            SELECT json_build_object(
                'id',vo.id,
                'label',vo.label
            ) 
            FROM vehicle_option AS vo 
            INNER JOIN user_vehicle_option AS uvo 
            ON uvo.user_id = u.id
            AND uvo.vehicle_option_id = vo.id)
        
    ) AS json_user
    FROM "user" AS u;

COMMIT;