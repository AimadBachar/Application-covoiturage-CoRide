-- Deploy coride:create-tables to pg

BEGIN;

--Create domain for check min age, regex email, pint
CREATE DOMAIN check_email AS TEXT
CHECK(
    VALUE ~ '^[a-zA-Z0-9.!#$%&*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$'
);

CREATE DOMAIN check_majority AS DATE
CHECK(
    EXTRACT (YEARS FROM age(NOW(),VALUE))::integer >=18
);

CREATE DOMAIN pint AS INT
CHECK(
    VALUE > 0
);


--create all tables for Co'Ride app

CREATE TABLE "user" (
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    email check_email UNIQUE,
    birthdate check_majority,
    picture_link TEXT UNIQUE,
    pseudo TEXT NOT NULL UNIQUE,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ,
    password TEXT NOT NULL
);

CREATE TABLE vehicle (
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    brand TEXT NOT NULL,
    model TEXT NOT NULL,
    user_id INT NOT NULL REFERENCES "user"(id) ON DELETE CASCADE
);

CREATE TABLE vehicle_option (
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    label TEXT NOT NULL UNIQUE
);

CREATE TABLE activity (
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    label TEXT NOT NULL UNIQUE,
    color TEXT NOT NULL DEFAULT '#000'
);

CREATE TABLE travel (
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    departure_city TEXT NOT NULL,
    destination_city TEXT NOT NULL CHECK (destination_city != departure_city),
    latitude_departure DOUBLE PRECISION NOT NULL,
    longitude_departure DOUBLE PRECISION NOT NULL,
    places_available pint NOT NULL,
    description TEXT NOT NULL,
    departure_timestamp TIMESTAMPTZ NOT NULL CHECK (departure_timestamp > NOW()),
    activity_id INT NOT NULL REFERENCES activity(id) ON DELETE SET NULL,
    user_id INT NOT NULL REFERENCES "user"(id) ON DELETE CASCADE,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW() 
);

CREATE TABLE user_travel (
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    user_id INT NOT NULL REFERENCES "user"(id) ON DELETE CASCADE,
    travel_id INT NOT NULL REFERENCES travel(id) ON DELETE CASCADE,
    register_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE user_activity (
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    user_id INT NOT NULL REFERENCES "user"(id) ON DELETE CASCADE,
    activity_id INT NOT NULL REFERENCES activity(id) ON DELETE CASCADE
);

CREATE TABLE user_vehicle_option (
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    user_id INT NOT NULL REFERENCES "user"(id) ON DELETE CASCADE,
    vehicle_option_id INT NOT NULL REFERENCES vehicle_option(id) ON DELETE CASCADE
);

COMMIT;
