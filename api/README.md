# API Co'Ride

This project is a REST API allowing to run the Co'Ride application.  
This application is produced as part of the end of training project of our Sinbad promotion within the O'Clock school.

## Technical Stack

- [NodeJS](http://nodejs.org/en/download) (v12 minimal)
- [PostgreSQL](https://www.postgresql.org/download)(v12 minimal)
- [Sqitch](https://sqitch.org/download/)(v1)
- [Redis](https://redis.io/download)(v6)

## Install

Clone the repository locally

```bash
git clone https://github.com/O-clock-Sinbad/project-covoiturage.git
```

Set up the `.env` and `sqitch.conf` files based on the files `.example` provided in the repository.  

Finally, create a PostgreSQL database and deploy the sqitch project.

```bash
createdb coride
sqitch deploy db:pg:coride
```

Configore PostgreSQL (or provide the necessary environment variables) so that the `createdb` and `sqitch` commands can run correctly.

## Demonstration data

In order to set up some test data from the launch repository folder:

```bash
psql -d coride -f data/dataFake.sql
```

## Launch

```bash
npm start
```