-- Revert coride:add-function from pg

BEGIN;

DROP FUNCTION add_passenger;

COMMIT;
