<?php 

try {

// (1) データベースに接続
$pdo = new PDO('mysql:charset=UTF8;dbname=posse;host=db', 'root', 'password');

} catch(PDOException $e) {

// (2) エラーメッセージを出力
echo $e->getMessage();

} 