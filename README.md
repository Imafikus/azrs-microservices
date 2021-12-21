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