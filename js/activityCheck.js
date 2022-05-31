var xValues = ["5/27", "5/28", "5/29", "5/30", "5/31", "6/1", "6/2"];
var yValues = [750, 1250, 5670, 860, 7454, 10034, 4567];
var barColors = ["gray", "gray", "gray", "gray", "gray", "gray", "orange"];

new Chart("myChart", {
  type: "bar",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    legend: {display: false},
    title: {
      display: true,
      text: "깔창깔조님의 일간 걸음"
    }
  }
});