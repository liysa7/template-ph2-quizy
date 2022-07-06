'use strict';

let pictureArray =[
  'https://d1khcm40x1j0f.cloudfront.net/quiz/34d20397a2a506fe2c1ee636dc011a07.png',
  'https://d1khcm40x1j0f.cloudfront.net/quiz/512b8146e7661821c45dbb8fefedf731.png',
  'https://d1khcm40x1j0f.cloudfront.net/quiz/ad4f8badd896f1a9b527c530ebf8ac7f.png',
  'https://d1khcm40x1j0f.cloudfront.net/quiz/ee645c9f43be1ab3992d121ee9e780fb.png',
  'https://d1khcm40x1j0f.cloudfront.net/quiz/6a235aaa10f0bd3ca57871f76907797b.png',
  'https://d1khcm40x1j0f.cloudfront.net/quiz/0b6789cf496fb75191edf1e3a6e05039.png',
  'https://d1khcm40x1j0f.cloudfront.net/quiz/23e698eec548ff20a4f7969ca8823c53.png',
  'https://d1khcm40x1j0f.cloudfront.net/quiz/50a753d151d35f8602d2c3e2790ea6e4.png',
  'https://d1khcm40x1j0f.cloudfront.net/words/8cad76c39c43e2b651041c6d812ea26e.png',
  'https://d1khcm40x1j0f.cloudfront.net/words/34508ddb0789ee73471b9f17977e7c9c.png'
];

let optionTextArray = [
  ['たかなわ','こうわ','たかわ'],
  ['かめいど','かめど','かめと'],
  ['こうじまち','かゆまち','おかとまち'],
  ['おなりもん','ごせいもん','おかどもん'],
  ['とどろき','たたら','たたりき'],
  ['しゃくじい','いじい','せきこうい'],
  ['ぞうしき','ざっしき','ざっしょく'],
  ['おかちまち','みとちょう','ごしろちょう'],
  ['ししぼね','しこね','ろっこつ'],
  ['こぐれ','こしゃく','こばく'],
];

const answerNumber=3;


// この地名はなんて読む＋画像＋選択肢+解答ボックスのるーぷ
for (let i=0; i<10; i++){

let quizDiv=`<div id="q1_${i+1}">`
+`<h2 class="question">${i+1}.この地名は何て読む？</h2>`
+`<div class="img">`
  +`<img src= ${pictureArray[i]}>`
  +`</div>`
+`<ul id="cannotclick_${i+1}">`
  +`<li class="option" id="option_${i+1}_1" onclick="check(${i+1},1)">${optionTextArray[i][1]}</li>`
  +`<li class="option" id="option_${i+1}_2" onclick="check(${i+1},2)">${optionTextArray[i][2]}</li>`
  +`<li class="option" id="option_${i+1}_3" onclick="check(${i+1},3)">${optionTextArray[i][0]}</li>`
+`</ul>`
+`<div class="area" id="correct_area_${i+1}">`
  +`<p class="titleLine">正解！</p>`
  +`<p class="ansText">正解は「${optionTextArray[i][0]}」です！</p>`
+`</div>`
+`<div class="area" id="incorrect_area_${i+1}">`
  +`<p class="titleLine2">不正解！</p>`
  +`<p class="ansText" id="ansText">正解は「${optionTextArray[i][0]}」です！</p>`
  +`</div>`
+`</div>`

 // htmlに作ったdivタグに入れる
document.getElementById("quizDivWrapper").insertAdjacentHTML('beforeend',quizDiv);
};


// 選択肢に引数を与える optionNumberとanswerNumberが同じだったら正解 by momo
var check = function(questionNumber, optionNumber){
  let questionOptionNumber = document.getElementById("option_" + questionNumber + "_" + optionNumber);//クリックしたliのidを取得
  let alwaysAnswerNumber = document.getElementById("option_"+ questionNumber + "_" + answerNumber);//常に正解（最初の選択肢）を取得
  let click_invalidation = document.getElementById("cannotclick_" + questionNumber);//三つの選択肢を取得・クリック不可にするため

  click_invalidation.classList.add("click_invalidation");//クリック不可

  if (optionNumber === answerNumber) {

    questionOptionNumber.classList.add("correctAnswer");//正解の選択肢の色を青にする
    const correctAnswerBox = document.getElementById("correct_area_" + questionNumber);//正解のボックスを表示（displayをnoneからblockに）
    correctAnswerBox.style.display = "block";

} else {

    questionOptionNumber.classList.add("incorrectAnswer");//不正解の選択肢を赤にする
    alwaysAnswerNumber.classList.add("correctAnswer");//正解の選択肢を青にする
    const incorrectAnswerBox = document.getElementById("incorrect_area_" + questionNumber);//不正解のボックスを表示（displayをnoneからblockに）
    incorrectAnswerBox.style.display = "block";
}

}