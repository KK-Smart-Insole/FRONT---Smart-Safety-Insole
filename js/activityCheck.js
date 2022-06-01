var date = new Date();
var today = String(date.getFullYear()) + '-0' + String(date.getMonth()+1) + '-0' + String(date.getDay()-3)

console.log(date.getFullYear());
console.log(today);
let resultData;

async function request() {
  const response = await fetch('http://52.79.239.114:8080/app/monitor/1',
  {
    method: 'GET',
  });
  resultData = await response.json();

  var walkCount=0;
  for(var i=0; i<resultData.result.length; i++)
  {
    if(resultData.result[i].createdAt.substr(0,10) == today){
      walkCount += resultData.result[i].walkCount;
    }
  }
  //그래프 만들기
  var html='';
  html += '<div class="c100 p' + walkCount/10000*100 + '">'
  html += '<span>' + walkCount/10000*100 + '%</span>'
  html += '<div class="slice">'
  html += '<div class="bar"></div>'
  html += '<div class="fill"></div>'
  html += ' </div>'
  html += '</div>'
  $("#set-daily-walk-count").append(html);
  
  
  
  document.getElementById("walk-count-result").innerHTML = walkCount + ' / 10000 걸음';


  console.log(walkCount);
}

request();



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