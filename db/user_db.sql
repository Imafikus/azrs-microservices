DROP DATABASE IF EXISTS user;

CREATE DATABASE user;
USE user;

DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS all_orders;

CREATE TABLE users (
    email VARCHAR(64) PRIMARY KEY NOT NULL
);

INSERT INTO users (email)
VALUES 
    ('test@example.com'),
    ('some_user@whatever.com'),
    ('azrs@matf.bg.ac.rs');

CREATE TABLE all_orders (
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    email VARCHAR(64) NOT NULL,
    item VARCHAR(64) NOT NULL,
    created_at VARCHAR(64) NOT NULL,
    CONSTRAINT FK_email FOREIGN KEY (email) REFERENCES users(email)
);