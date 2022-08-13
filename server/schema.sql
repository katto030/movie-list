CREATE DATABASE movielist;

USE movielist;

CREATE TABLE movies (
  id INT NOT NULL AUTO_INCREMENT,
  title TINYTEXT NOT NULL,
  status varchar(255) DEFAULT 'unwatched',
  PRIMARY KEY (ID)
);



