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
    u.id,
    first_name,
    last_name,
    picture_link,
    pseudo,
    email,
    birthdate,
    created_at,
    ARRAY(
        SELECT ('{"id": '||a.id||',"label": "'||label||'","color": "'||a.color||'"}')::json FROM activity AS a
        INNER JOIN user_activity AS ua ON ua.activity_id = a.id AND ua.user_id = u.id
    ) AS activities,
    ARRAY(
        SELECT ('{"id": '||t.id||',"departure_city": "'||t.departure_city||'","destination_city": "'||t.destination_city||'","departure_timestamp": "'||t.departure_timestamp||'"}')::json FROM travel AS t
        INNER JOIN user_travel AS ut ON ut.travel_id = t.id AND ut.user_id = u.id
    ) AS travels_passenger,
    ARRAY(
        SELECT ('{"id": '||t.id||',"departure_city": "'||t.departure_city||'","destination_city": "'||t.destination_city||'","departure_timestamp": "'||t.departure_timestamp||'"}')::json FROM travel AS t
        WHERE u.id = t.user_id
     ) AS travels_driver,
     ARRAY(
         SELECT ('{"id": '||v.id||',"brand": "'||v.brand||'","model": "'||v.model||'"}')::json FROM vehicle AS v
         WHERE u.id = v.user_id
     ) AS vehicles,
     ARRAY(
         SELECT ('{"id": '||vo.id||',"label": "'||vo.label||'"}')::json FROM vehicle_option AS vo
         INNER JOIN user_vehicle_option AS uvo ON uvo.user_id = u.id AND uvo.vehicle_option_id = vo.id
     ) AS vehicle_options
FROM "user" AS u;

COMMIT;
