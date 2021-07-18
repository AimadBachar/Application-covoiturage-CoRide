-- Revert coride:create-views from pg

BEGIN;

DROP VIEW users_view;
DROP VIEW travels_view;

COMMIT;
