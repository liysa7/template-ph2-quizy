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
  language_name VARCHAR(255) NOT NULL
);


INSERT INTO study_date
  (hour, date, content_name, language_name)
VALUES
  (3, '2022-10-25', 'ドットインストール', 'PHP'),
  (7, '2022-11-25', 'N予備校', 'JavaScript'),
  (1, '2022-10-02', 'POSSE課題', 'SQL'),
  (9, '2022-11-05', 'N予備校', 'SQL'),
  (4, '2022-11-01', 'ドットインストール', 'PHP'),
  (6, '2022-10-06', 'POSSE課題', 'SHELL'),
  (10, '2022-10-25', 'N予備校', 'PHP'),
  (2, '2022-9-21', 'POSSE課題', 'CSS'),
  (4, '2022-11-03', 'ドットインストール', 'HTML'),
  (8, '2022-11-09', 'N予備校', 'PHP'),
  (7, '2022-10-30', 'N予備校', '情報システム基礎知識(その他)'),
  (7, '2022-11-14', 'N予備校', '情報システム基礎知識(その他)');


DROP TABLE IF EXISTS contents;
CREATE TABLE contents (
  id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
  content_name VARCHAR(255) NOT NULL
);

INSERT INTO contents SET content_name='ドットインストール';
INSERT INTO contents SET content_name='N予備校';
INSERT INTO contents SET content_name='POSSE課題';


DROP TABLE IF EXISTS languages;
CREATE TABLE languages (
  id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
  language_name VARCHAR(255) NOT NULL
);

INSERT INTO languages SET language_name='HTML';
INSERT INTO languages SET language_name='CSS';
INSERT INTO languages SET language_name='JavaScript';
INSERT INTO languages SET language_name='PHP';
INSERT INTO languages SET language_name='Laravel';
INSERT INTO languages SET language_name='SQL';
INSERT INTO languages SET language_name='SHELL';
INSERT INTO languages SET language_name='情報システム基礎知識(その他)';


DROP TABLE IF EXISTS mst_digit;
CREATE TABLE mst_digit (
  digit SMALLINT(4)
);
INSERT INTO mst_digit (digit)
VALUES
(0),
(1),
(2),
(3),
(4),
(5),
(6),
(7),
(8),
(9);

CREATE VIEW vw_sequence99 AS
SELECT (d1.digit + (d2.digit * 10)) AS Number
FROM (mst_digit d1 join mst_digit d2);

