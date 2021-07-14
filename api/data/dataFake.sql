BEGIN;


--Insert fake data in tables app Co'Ride for check in dev
INSERT INTO "user"(first_name,last_name,email,birthdate,picture_link,pseudo,password)
VALUES
    ('laurent','savarit','laurent@savarit.fr','1985-01-24','/laurent.png','scrum master et lead dev back','1234'),
    ('anna','sion','anna@sion.fr','1990-01-01','/anna.png','product owner','1234'),
    ('julien','guillerm','julien@guillerm.fr','1990-02-01','/julien.png','Git master','1234'),
    ('aimad','bachar','aimad@bachar.fr','1990-03-01','/aimad.png','lead dev front','1234');

INSERT INTO vehicle(brand,model,user_id)
VALUES
    ('renault','clio',1),
    ('peugeot','208',3);

INSERT INTO vehicle_option(label) VALUES('galerie'),('barre de toit');

INSERT INTO activity(label,color) 
VALUES
    ('surf','#f0f'),
    ('paddle','#fff');

INSERT INTO travel(departure_city,destination_city,latitude_departure,longitude_departure,places_available,description,departure_timestamp,activity_id,user_id) 
VALUES  ('bordeaux','biarritz',44.837789,-0.57918,4,'un voyage de test','2021-07-26 14:00:00',1,1);

INSERT INTO user_travel(user_id,travel_id)
VALUES
    (3,1);

INSERT INTO user_vehicle_option(user_id,vehicle_option_id) VALUES(1,2);

COMMIT;