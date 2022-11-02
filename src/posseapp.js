const btn=document.getElementById("jsOpenModal")
const modal=document.getElementById("modal")
const modal2 = document.getElementById("modal2")
const submitBtn = document.getElementById("submit")
const closemodal=document.getElementById("jsModalCloseBtn")
const closeModal2=document.getElementById("jsModalCloseBtn2")

const loader = document.getElementById('loader')
const submit = document.getElementById('submit')
const loaderInbox = document.getElementById('loaderInbox')


// 投稿記録ボタン押したらモーダル１を消して、loader を表示
submitBtn.addEventListener("click", function() {
  loader.className = "loaderbox"
  loaderInbox.className = "loader"
  setTimeout(function(){
    modal.classList.add("modal2");
    loader.className = "loaderHidden"
    loaderInbox.className = "loaderHidden"
    tweet();
  },5000);


  })


btn.addEventListener("click",function(){
  modal.classList.add("openModal")
})

// 投稿ボタンをクリック
submitBtn.addEventListener("click", function() {
  modal.classList.remove("openModal")
  modal2.classList.add("openModal")
})

// モーダル1閉じるボタン
closemodal.addEventListener("click",function(){
  modal.classList.remove("openModal")
})

// モーダル2閉じるボタン
closeModal2.addEventListener("click",function(){
  modal2.classList.remove("openModal")
})

function renderStudyContents () {
  var graph2 = document.getElementById('graph2');
  var options = {
    legend: { position: 'none' },
    pieHole: 0.4,
    colors: ['#1754EF', '#0F71BD', '#20BDDE'],
    chartArea: {
      width: '100%',
      height: '100%'
    }
  };
  var chart = new google.visualization.PieChart(graph2);
  data = new google.visualization.arrayToDataTable([
    ['content', 'ratio'],
    ['N予備校', 40],
    ['課題', 40],
    ['ドットインストール', 20]
  ]);
  chart.draw(data, options);
}

function renderLanguageContents() {
  var graph1 = document.getElementById('graph1');
  var options = {
    legend: { position: 'none' },
    pieHole: 0.4,
    colors: ['#3CCEFE', '#0F71BD', '#1754EF', '#20BDDE', '#B29EF3', '#6D46EC', '#4A17EF', '#3105C0'],
    chartArea: {
      width: '100%',
      height: '100%'
    },
  };
  var chart = new google.visualization.PieChart(graph1);
  data = new google.visualization.arrayToDataTable([
    ['language', 'ratio'],
    ['HTML', 30],
    ['CSS', 20],
    ['Javascript', 10],
    ['PHP', 5],
    ['Laravel', 5],
    ['SQL', 20],
    ['SHELL', 20],
    ['その他', 10]
  ]);
  chart.draw(data, options);
}

function renderStudyTime() {

  var data = new google.visualization.DataTable();
  data.addColumn('string', 'day');
  data.addColumn('number', 'hour');
  data.addRows([
    ['', 3],
    ['2', 4],
    ['',5 ],
    ['4', 3],
    ['', 0],
    ['6', 4],
    ['', 2],
    ['8', 2],
    ['', 8],
    ['10', 8],
    ['', 8],
    ['12',2 ],
    ['', 2],
    ['14',1 ],
    ['', 7],
    ['16',4 ],
    ['',4 ],
    ['18',3 ],
    ['', 3],
    ['20', 3],
    ['', 2],
    ['22',2 ],
    ['', 6],
    ['24',2 ],
    ['', 2],
    ['26', 1],
    ['', 1],
    ['28',1 ],
    ['', 7],
    ['30',8 ],
  ]);

  var options = {
    height: 400,
    bar: { groupWidth: "50%" },
    legend: { position: "none" },
    vAxis:{
        format:'0h',
        gridlines:{
            color: '#fff'
        }
    }
  }

  var spOptions = {
    height: 200,
    bar: { groupWidth: "50%" },
    legend: { position: "none" },
    vAxis:{
        format:'0h',
        gridlines:{
            color: '#fff'
        }
    }   
  }

  var chart = new google.visualization.ColumnChart(document.getElementById('chart_div'));
  chart.draw(data, options);

  var spChart = new google.visualization.ColumnChart(document.getElementById('chart_div_sp'));
  spChart.draw(data, spOptions);
}

function drawChart() {

  renderStudyTime()

  renderStudyContents()

  renderLanguageContents()
}

google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

window.addEventListener('resize', drawChart)


// ツイッター投稿
function tweet(){
  let tweetCommenting = document.getElementById('tweetCommenting').value

  let modalTweetBtn = document.getElementById('modalTweetBtn')

  if(modalTweetBtn.checked){
    window.open("https://twitter.com/intent/tweet?text=" + tweetCommenting);
  }
};






// 
flatpickr('#js-datepicker');