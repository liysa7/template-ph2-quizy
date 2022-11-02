DROP SCHEMA IF EXISTS posse;
CREATE SCHEMA posse;
USE posse;

SET CHARACTER_SET_CLIENT = utf8;
SET CHARACTER_SET_CONNECTION = utf8;

DROP TABLE IF EXISTS study_date;
CREATE TABLE study_date (
  id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
  hour INT NOT NULL,
  date ,
  content_name VARCHAR(255) NOT NULL ,
  language_name VARCHAR(255) NOT NULL,
);


DROP TABLE IF EXISTS contents;
CREATE TABLE contents (
  id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
  content_name VARCHAR(255) NOT NULL,
);


DROP TABLE IF EXISTS languages;
CREATE TABLE languages (
  id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
  language_name VARCHAR(255) NOT NULL,
);

INSERT INTO questions SET big_question_id=1, image='takanawa.png';
INSERT INTO questions SET big_question_id=1, image='kameido.png';
INSERT INTO questions SET big_question_id=2, image='mukainada.png';


INSERT INTO choices
  (question_id, name, valid) 
VALUES
  (1, 'たかなわ', 1),
  (1, 'たかわ', 0),
  (1, 'こうわ', 0),
  (2, 'かめと', 0),
  (2, 'かめど', 0),
  (2, 'かめいど', 1),
  (3, 'むこうひら', 0),
  (3, 'むきひら', 0),
  (3, 'むかいなだ', 1);

  