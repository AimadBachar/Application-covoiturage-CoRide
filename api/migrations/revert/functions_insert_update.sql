-- Revert coride:functions_insert_update from pg

BEGIN;

DROP FUNCTION insert_vehicle;
DROP FUNCTION update_travel;
DROP FUNCTION insert_travel;
DROP FUNCTION update_user;
DROP FUNCTION insert_user;

COMMIT;
