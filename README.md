# azrs-microservices

Minimal microservice based application made for AZRS course on MATF

## Introduction

Main purpose of this project is to demonstrate microservice architecture.

## Architecture overview

App is simulating a simple ordering system.

User inputs email and chooses items from the drop down menu and after ordering item number is being updated in the appropriate database and timestamp of purchase is being saved to the appropirate table.

One backend service is handling user related data, other is handling item related data.

There are 2 separate databases.

Service which handles users also uses external API to get the exact time.


![Architecture](/architecture.png)

## Running individual services

### Databases

Easiest way to run both databases is via docker compose using the following command:

```shell
docker-compose up item_db user_db
```

### Frontend service

If you want to run it without container do the following:

```shell
cd frontend-service
npm install
npm run start
```

if you want to run just FE service in a container run:

```shell
docker-compose up frontend_service
```

### Node service

If you want to run it without container do the following:

```shell
cd node-service
npm install
npm run dev
```

if you want to run just node service in a container run:

```shell
docker-compose up node_service
```

### Python service

If you want to run it without container do the following:

```shell
cd python-service
pipenv shell
pipenv install
python main.py
```

if you want to run just python service in a container run:

```shell
docker-compose up python_service
```

## Running all services via docker-compose

To start all services together just run:

```shell
docker-compose up
```

## Things to improve

- Better env variables
- Better error handling on FE
- Better error handling on backend services
- Better db abstractions
- Not all edge cases covered
- Multistage builds missing
