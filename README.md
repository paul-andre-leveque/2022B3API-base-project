## Installation

```bash
$ npm install
```

## Running the app

```bash
$ npm run start

```

## Get tests

```bash
# unit tests
$ cd src/
$ git submodule add git@github.com:Wikodit/2022B3API-testing.git test/

```

## Test

```bash
# unit tests
$ npm run test

```

### Setting up database

```bash
docker-compose up --force-recreate -V
docker start postgres
docker exec -it postgres psql -U postgres
  CREATE DATABASE devapi;
  \c devapi
  create extension if not exists "uuid-ossp";
```

### Testing e2e

```bash
docker-compose up --force-recreate -V

npm run test
```
