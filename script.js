

let labels3 = ['PO1', 'PO2', 'PO3', 'PO4', 'PO5', 'PO6','PO7','PO8','PO9','PO10', 'PO11', 'PO12'];

let myChart3 = document.getElementById("myChart3").getContext('2d');
let chart3 = new Chart(myChart3, {
  type: 'radar',
  data: {
    labels: labels3,
    datasets: [{
        label: 'Level of Achievement',
        data: [5, 5, 4, 4, 4, 3, 4,4,4,5,3,5],
        fill: true,
        backgroundColor: 'rgba(129,2126,208, 0.2)', 
        borderColor: 'rgb(79, 151, 163)',
        pointBackgroundColor: 'rgb(79, 151, 163)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(79, 151, 163)',

  }]
  },
  options: {
    title: {
      display: true,
      text: "Spider Web Plot Based on PO Attainment Table ",
    },
    // Min/Max new location => https://www.chartjs.org/docs/next/getting-started/v3-migration/#specific-changes
    scale: {
        ticks: {
            beginAtZero: true,
            max: 5,
            min: 0,
            stepSize: 1
        }
    },
    responsive: false,
  },
  

});
