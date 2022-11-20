<?php

// 棒グラフの日毎でデータ取得
$stmt = $pdo->prepare("SELECT ADDDATE('2022-10-01', V.Number) as Date, IFNULL(Sum(S.hour),0) as hour FROM vw_sequence99 as V LEFT JOIN study_date as S ON ADDDATE('2022-10-01', V.Number) = DATE(S.`date`) WHERE ADDDATE('2022-10-01', V.Number) BETWEEN '2022-10-01' AND '2022-10-30' GROUP BY ADDDATE('2022-10-01', V.Number) ORDER BY Date;");
$stmt->execute();
$BarChart_data = $stmt->fetchAll(PDO::FETCH_ASSOC);


// 円グラフ学習言語
$language_stmt = $pdo->prepare("SELECT language_name, sum(hour) gakushu_language from study_date group by language_name;");
$language_stmt->execute();
$languages = $language_stmt->fetchAll(PDO::FETCH_ASSOC);

// 円グラフ学習コンテンツ
$content_stmt = $pdo->prepare("SELECT content_name, sum(hour) gakushu_content from study_date group by content_name;");
$content_stmt->execute();
$contents = $content_stmt->fetchAll(PDO::FETCH_ASSOC);


?>



<script>
  //以下学習コンテンツ円グラフ 
  function renderStudyContents() {
    var graph2 = document.getElementById('graph2');
    var options = {
      legend: {
        position: 'none'
      },
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
    <?php foreach ($contents as $content) : ?>["<?= $content["content_name"] ?>", <?= $content["gakushu_content"] ?>],
    <?php endforeach; ?>
    ]);
    chart.draw(data, options);
  }


  // 以下学習言語円グラフ

  function renderLanguageContents() {
    var graph1 = document.getElementById('graph1');
    var options = {
      legend: {
        position: 'none'
      },
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
        <?php foreach ($languages as $language) : ?>["<?= $language["language_name"] ?>", <?= $language["gakushu_language"] ?>],
        <?php endforeach; ?>
        ]);

    chart.draw(data, options);
    }




    // 以下棒グラフ
    function renderStudyTime() {

      var data = new google.visualization.DataTable();
      data.addColumn('string', 'day');
      data.addColumn('number', 'hour');
      data.addRows([
        <?php foreach ($BarChart_data as $key => $pdo) : ?>

          ["<?php if ($key % 2 == 1) {
              echo ($key + 1);
            } ?>", <?= $pdo['hour'] ?>],
        <?php endforeach; ?>
      ]);

      var options = {
        height: 400,
        bar: {
          groupWidth: "50%"
        },
        legend: {
          position: "none"
        },
        vAxis: {
          format: '0h',
          gridlines: {
            color: '#fff'
          }
        }
      }

      var spOptions = {
        height: 200,
        bar: {
          groupWidth: "50%"
        },
        legend: {
          position: "none"
        },
        vAxis: {
          format: '0h',
          gridlines: {
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

    google.charts.load('current', {
      'packages': ['corechart']
    });
    google.charts.setOnLoadCallback(drawChart);

    window.addEventListener('resize', drawChart)
</script>