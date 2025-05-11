
DROP DATABASE IF EXISTS universalconnect;
DROP USER IF EXISTS uc_user;


CREATE USER uc_user WITH ENCRYPTED PASSWORD 'uc_pass';
CREATE DATABASE universalconnect;
GRANT ALL PRIVILEGES ON DATABASE universalconnect TO uc_user;

\c universalconnect uc_user


CREATE SCHEMA IF NOT EXISTS uc_schema;
SET search_path TO uc_schema;


CREATE TABLE posts (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  body TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
