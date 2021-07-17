-- Revert coride:function_search from pg

BEGIN;

DROP FUNCTION search_travels;

COMMIT;
