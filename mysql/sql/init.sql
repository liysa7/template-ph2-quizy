DROP SCHEMA IF EXISTS posse;
CREATE SCHEMA posse;
USE posse;

SET CHARACTER_SET_CLIENT = utf8;
SET CHARACTER_SET_CONNECTION = utf8;

DROP TABLE IF EXISTS study_date;
CREATE TABLE study_date (
  id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
  hour INT NOT NULL,
  date DATE NOT NULL,
  content_name VARCHAR(255) NOT NULL ,
  language_name VARCHAR(255) NOT NULL,
);


DROP TABLE IF EXISTS contents;
CREATE TABLE contents (
  id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
  content_name VARCHAR(255) NOT NULL,
);

INSERT INTO contents SET content_name='ドットインストール';
INSERT INTO contents SET content_name='N予備校';
INSERT INTO contents SET content_name='POSSE課題';


DROP TABLE IF EXISTS languages;
CREATE TABLE languages (
  id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
  language_name VARCHAR(255) NOT NULL,
);

INSERT INTO languages SET language_name='HTML';
INSERT INTO languages SET language_name='CSS';
INSERT INTO languages SET language_name='JavaScript';
INSERT INTO languages SET language_name='PHP';
INSERT INTO languages SET language_name='Laravel';
INSERT INTO languages SET language_name='SQL';
INSERT INTO languages SET language_name='SHELL';
INSERT INTO languages SET language_name='情報システム基礎知識(その他)';


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

  