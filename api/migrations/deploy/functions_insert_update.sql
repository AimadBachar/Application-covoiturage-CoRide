-- Deploy coride:functions_insert_update to pg

BEGIN;

--fonction pour insert en bdd un user
CREATE FUNCTION insert_user(json) RETURNS "user" AS $$

    INSERT INTO "user"(first_name,last_name,email,birthdate,picture_link,pseudo,password)
    VALUES(
        $1->>'first_name',
        $1->>'last_name',
        $1->>'email',
        ($1->>'birthdate')::date,
        $1->>'picture_link',
        $1->>'pseudo',
        $1->>'password'
    ) RETURNING *;

$$LANGUAGE SQL;

--fonction pour update un user
CREATE FUNCTION update_user(json) RETURNS "user" AS $$

    UPDATE "user"
    SET 
        first_name = $1->>'first_name',
        last_name = $1->>'last_name',
        email = $1->>'email',
        birthdate = ($1->>'birthdate')::date,
        picture_link = $1->>'picture_link',
        pseudo = $1->>'pseudo',
        password = $1->>'password',
        updated_at = NOW()
    WHERE id = ($1->>'id')::int RETURNING *;

$$LANGUAGE SQL;

--/////////////////////////////////////////////////////////////////
--fonction pour insert en bdd un travel
CREATE FUNCTION insert_travel(json) RETURNS "travel" AS $$
   
    INSERT INTO "travel"(departure_city,destination_city,latitude_departure,longitude_departure,places_available,description,departure_timestamp,activity_id,user_id)
    VALUES(
        $1->>'departure_city',
        $1->>'destination_city',
        ($1->>'latitude_departure')::double precision,
        ($1->>'longitude_departure')::double precision,
        ($1->>'places_available')::int,
        $1->>'description',
        ($1->>'departure_timestamp')::timestamptz,
        ($1->>'activity_id')::int,
        ($1->>'user_id')::int
    ) RETURNING *;

$$LANGUAGE SQL;

--fonction pour update un travel
CREATE FUNCTION update_travel(json) RETURNS "travel" AS $$

    UPDATE "travel"
    SET 
        departure_city = $1->>'departure_city',
        destination_city = $1->>'destination_city',
        latitude_departure = ($1->>'latitude_departure')::double precision,
        longitude_departure = ($1->>'longitude_departure')::double precision,
        places_available = ($1->>'places_available')::int,
        description = $1->>'description',
        departure_timestamp = ($1->>'departure_timestamp')::timestamptz,
        activity_id = ($1->>'activity_id')::int,
        user_id = ($1->>'user_id')::int
    WHERE id = ($1->>'id')::int RETURNING *;

$$LANGUAGE SQL;


--/////////////////////////////////////////////////////////////////
--fonction pour insert en bdd un vehicle
CREATE FUNCTION insert_vehicle(json) RETURNS "vehicle" AS $$

    INSERT INTO "vehicle"(brand,model,user_id)
    VALUES(
        $1->>'brand',
        $1->>'model',
        ($1->>'user_id')::int
    ) RETURNING *;

$$LANGUAGE SQL;

--fonction pour update en bdd un vehicle
CREATE FUNCTION update_vehicle(json) RETURNS "vehicle" AS $$

    UPDATE "vehicle"
    SET
        brand = $1->>'brand',
        model = $1->>'model',
        user_id = ($1->>'user_id')::int
     WHERE id = ($1->>'id')::int RETURNING *;

$$LANGUAGE SQL;


COMMIT;
