$(document).ready(function(){
var dataLiteracy = {
    labels: ['Java', 'Css', 'Oracle', 'Html', 'JavaScript', 'JSP&Servlet'],
    datasets: [{
      data: [3, 3, 3, 3, 3, 4],
      label: 'My Skills Level',
      backgroundColor: 'rgba(237, 146, 159, 0.2)',
      borderColor: 'rgba(237, 146, 159, 1)',
      borderWidth: 1,
      pointBackgroundColor: 'rgba(237, 146, 159, 1)',
      pointBorderColor: '#fff'
    }]
};
var options = {
    responsive: false,
    scale: {
      ticks: {
        beginAtZero: true,
        stepSize: 1,
        max: 5,
        fontSize: 12
      },
      pointLabels: {
        fontSize: 12
      }
    }
};
var ctx = document.getElementById("programmingSkillSet");
var myRadarChart = new Chart(ctx, {
    type: 'radar',
    data: dataLiteracy,
    options: options
});
})
