-- Verify coride:create-tables on pg

BEGIN;

SELECT id FROM "user" WHERE false;
SELECT id FROM vehicle WHERE false;
SELECT id FROM vehicle_option WHERE false;
SELECT id FROM activity WHERE false;
SELECT id FROM travel WHERE false;
SELECT id FROM user_travel WHERE false;
SELECT id FROM user_activity WHERE false;
SELECT id FROM user_vehicle_option WHERE false;

ROLLBACK;
