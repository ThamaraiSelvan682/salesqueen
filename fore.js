google.charts.load("current", {packages:['corechart']});
    google.charts.setOnLoadCallback(drawChart);
function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ['Genre', 'Weighted', 'Won', 'Mystery/Crime', 'General',
     'Western', 'Literature', { role: 'annotation' } ],
    ['Sun', 10, 24, 20, 32, 18, 5, ''],
    ['Mon', 16, 22, 23, 30, 16, 9, ''],
    ['Tue', 28, 19, 29, 30, 12, 13, ''],
    ['Wed', 28, 15, 29, 30, 12, 13, ''],
    ['Thu', 20, 13, 29, 30, 12, 13, ''],
    ['Fri', 8, 19, 29, 30, 12, 13, ''],
    ['Sat', 28, 19, 29, 30, 12, 13, '']
  ]);

  var view = new google.visualization.DataView(data);
  view.setColumns([0, 1, 2]);

  

  var options = {
    width: 550,
    height: 300,
    legend: { position: 'none', maxLines: 3 },
    bar: { groupWidth: '10%' },
    isStacked: true,
    colors:['#fcdc9e','#9e8cfc'],
    annotations: { alwaysOutside: false },
  };
    var chart = new google.visualization.ColumnChart(document.getElementById("columnchart_values"));
    chart.draw(view, options);
}