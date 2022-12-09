DROP DATABASE IF EXISTS pokegen2;
CREATE DATABASE pokegen2;

USE pokegen2;

CREATE TABLE users (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(20) NOT NULL UNIQUE,
    password VARCHAR(100) NOT NULL
);

CREATE TABLE pokemon (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(20) NOT NULL,
    user_id INTEGER NOT NULL,
    CONSTRAINT fk_user FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE moves (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(20) NOT NULL,
    description VARCHAR(300) NOT NULL,
    power INTEGER, CHECK (power >= 0 || power < 1000),
    accuracy INTEGER, CHECK (accuracy >= 0 || accuracy <= 100)
);