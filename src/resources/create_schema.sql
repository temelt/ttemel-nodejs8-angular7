 
CREATE DATABASE ttemel;
USE ttemel;
 
 
CREATE TABLE  author (
	id serial NOT NULL ,
	first_name character varying(30) NOT NULL,
	last_name character varying(30) NULL DEFAULT NULL,
	created_at date NULL DEFAULT NULL ,
	updated_at date NULL DEFAULT NULL ,
	PRIMARY KEY (id) 	
);
 
CREATE TABLE  book (
	id serial NOT NULL ,
	name character varying(200) NOT NULL,
	isbn character varying(30),
	publish_date date,
	author_id INT NOT NULL,
	created_at date NULL DEFAULT NULL ,
	updated_at date NULL DEFAULT NULL ,
	PRIMARY KEY (id) 
);
 