DROP DATABASE IF EXISTS item;

CREATE DATABASE item;
USE item;

DROP TABLE IF EXISTS items;
DROP TABLE IF EXISTS all_items;

CREATE TABLE items (
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    item_name VARCHAR(64) NOT NULL,
    qty INT NOT NULL 
    
);

INSERT INTO items (item_name, qty)
VALUES 
    ('item1', 10),
    ('item2', 1),
    ('item3', 3);
