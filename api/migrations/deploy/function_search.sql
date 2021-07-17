-- Deploy coride:function_search to pg

BEGIN;

CREATE FUNCTION search_travels(long double precision, lat double precision,ray int) RETURNS SETOF travel AS $$

SELECT * FROM travel
WHERE ((
        ((latitude_departure - lat)*111.11)
        *
        ((latitude_departure - lat)*111.11)
    )
    +
    (
        ((longitude_departure - long)*80*cos(radians(lat)))
        *
        ((longitude_departure - long)*80*cos(radians(lat)))
    ))
    < 
    (ray * ray);

$$ LANGUAGE SQL;


COMMIT;
