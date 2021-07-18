-- Revert coride:functions_insert_update from pg

BEGIN;

DROP FUNCTION update_vehicle_option;
DROP FUNCTION insert_vehicle_option;
DROP FUNCTION update_activity;
DROP FUNCTION insert_activity;
DROP FUNCTION update_vehicle;
DROP FUNCTION insert_vehicle;
DROP FUNCTION update_travel;
DROP FUNCTION insert_travel;
DROP FUNCTION update_user;
DROP FUNCTION insert_user;

COMMIT;
