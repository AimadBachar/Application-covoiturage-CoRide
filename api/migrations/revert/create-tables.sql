-- Revert coride:create-tables from pg

BEGIN;

DROP TABLE user_vehicle_option;
DROP TABLE user_activity;
DROP TABLE user_travel;
DROP TABLE travel;
DROP TABLE activity;
DROP TABLE vehicle_option;
DROP TABLE vehicle;
DROP TABLE "user";

DROP DOMAIN pint;
DROP DOMAIN check_email;
DROP DOMAIN check_majority;

COMMIT;
