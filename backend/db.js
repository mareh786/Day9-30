CREATE DATABASE registerdb;

USE registerdb;

CREATE TABLE entries (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  age INT,
  visiting_to VARCHAR(100),
  in_time VARCHAR(50),
  out_time VARCHAR(50)
);
