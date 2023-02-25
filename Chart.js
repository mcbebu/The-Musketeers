const data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "My First Dataset",
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1
      }
    ]
  };

const config = {
    type: "line",
    data: data,
    options: {}
  };
  
  var myChart = new Chart(
    document.getElementById('myChart'),
    config
  );