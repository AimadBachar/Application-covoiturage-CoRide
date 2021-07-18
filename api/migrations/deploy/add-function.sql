-- Deploy coride:add-function to pg

BEGIN;

CREATE FUNCTION add_passenger(id_user int,id_travel int) RETURNS bool AS $$

INSERT INTO user_travel(user_id,travel_id)

SELECT id_user,id_travel

WHERE(
    SELECT
        CASE 
        WHEN
        (    --on récupere le nombre de places du travel
            (SELECT places_available AS place FROM travel WHERE id = id_travel)
        -   --on compte le nombre d'inscrit grace
            (SELECT COUNT(*) FROM user_travel WHERE travel_id = id_travel)
        )>0
        AND id_user 
        NOT IN (
            SELECT user_id FROM user_travel WHERE user_id = id_user AND travel_id = id_travel
        )
        THEN --Si true on insert 
            true
        ELSE
            false
        END
) RETURNING true

$$ LANGUAGE SQL;

COMMIT;
