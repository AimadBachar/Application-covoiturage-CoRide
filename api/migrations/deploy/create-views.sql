-- Deploy coride:create-views to pg

BEGIN;

CREATE VIEW travels_view AS 
SELECT
    t.id AS travel_id,
    t.departure_city,
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
    id,
    first_name,
    last_name,
    picture_link,
    pseudo,
    birthdate
FROM "user";

COMMIT;
