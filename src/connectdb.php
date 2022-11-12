<?php 

try {
// (1) データベースに接続
$pdo = new PDO('mysql:charset=UTF8;dbname=posse;host=db', 'root', 'password');
$pdo-> setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch(PDOException $e) {
// (2) エラーメッセージを出力
echo '接続失敗' .  $e->getMessage();
exit();
} 