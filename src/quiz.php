<?php

require("connectdb.php");

$id = $_GET['id'];

// (2) データを取得するSQL
$stmt = $pdo->prepare("SELECT * FROM big_questions WHERE id='$id'");
$stmt->execute();
$result = $stmt->fetch(PDO::FETCH_ASSOC);

// (3) SQL実行
// $res = $stmt->execute()



$stmt = $pdo->prepare("SELECT * FROM questions WHERE big_question_id='$id'");
$stmt ->execute();
$questions = $stmt->fetchAll();


?>

<!DOCTYPE html>
<html lang="ja">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Quizy</title>
  <link rel="stylesheet" href="reset.css">
  <link rel="stylesheet" href="quizy.css">
</head>

<body class="body">
  <h1 class="subtitle">
    ガチで東京の人しか解けない！ #東京の難読地名クイズ
  </h1>
  <div id="quizDivWrapper">
    <?php 
    foreach($questions as $question):
      $q_id = $question['id'];
      $stmtd = $pdo->prepare("SELECT * FROM choices WHERE question_id='$q_id'");
      $stmtd ->execute();
      $choices = $stmtd->fetchAll();
    ?>
    <div id="q1_${i+1}">
      <h2 class="question">この地名は何て読む？</h2>
      <div class="img">
      <img src="./img/<?= $question['image'] ?>" alt="">
      </div>
      <ul id="cannotclick_${i+1}">
        <?php
        foreach($choices as $choice):
          ?>
        <li class="option" id="option_${i+1}_1"><?= $choice["name"] ?></li>
       <?php endforeach; ?>
        <!-- <li class="option" id="option_${i+1}_2"></li>
        <li class="option" id="option_${i+1}_3"></li> -->
      </ul>
    </div>
    <?php
    endforeach;
    ?>
  </div>
</body>

</html>