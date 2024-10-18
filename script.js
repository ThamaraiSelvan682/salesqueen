google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Year', 'This week', 'Last week'],
          ['Sun',  100,      150],
          ['Mon',  200,      300],
          ['Tue',  150,      200],
          ['Wed',  550,      400],
          ['Thu',  250,      300],
          ['Fri',  500,      600],
          ['Sat',  400,      540]
        ]);

        var options = {
          // title: 'Company Performance',
          curveType: 'function',
          legend: { position: 'bottom' }
        };

        var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

        chart.draw(data, options);
      }

