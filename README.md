[![Dependency Status](https://david-dm.org/paulodiovani/men-starter-kit.svg)](https://david-dm.org/paulodiovani/men-starter-kit)
[![Build Status](https://travis-ci.org/paulodiovani/men-starter-kit.svg?branch=master)](https://travis-ci.org/paulodiovani/men-starter-kit)
[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

:warning: This project is still a _Work In Progress._
Check the [Issues][issues] for know how to helping.

[issues]: https://github.com/paulodiovani/men-starter-kit/issues

# MEN Starter Kit

A **Node.js** - **Express** - **MongoDB** starter kit for web apps.

This project intends to be always updated with Node.js LTS
(currently 4.3.x).

It uses **EJS templates**, **MongoDB** as storage, **Redis**
for sessions and is prepared for spec tests with **Mocha**,
**Chai** and **Supertest** and for Deploy in **Heroku** or
**Docker**.

## Dependencies

- MongoDB
- Redis

Dependencies can be started with **Docker Compose**.

```console
docker-compose up db redis
```

## Run the app

```console
npm start
```

Then access `http://localhost:3000`.

### Run spec tests

```console
npm test
```

### Run with Docker

```console
docker-compose up web
```

Then access `http://localhost:8080`.
