
var padding = function (canvasWidth) {
  return canvasWidth * 0.1;
}

var chartWidth = function(canvasWidth) {
  return canvasWidth - 2 * padding(canvasWidth);
}

var chartUnit = function (canvasWidth) {
  return chartWidth(canvasWidth) / 4;
}

var chartHeight = function(canvasWidth) {
  return chartUnit(canvasWidth) * 3;
}

var vowelY = function(canvasWidth, vowel) {
  return padding(canvasWidth) + vowel.openness * 3 * chartUnit(canvasWidth);
}

var vowelX = function(canvasWidth, vowel) {
  var unitsToSubstract = vowel.frontness * (-vowel.openness * 2 + 4);
  // console.log(`units to substract: ${unitsToSubstract}`);
  return padding(canvasWidth) + chartWidth(canvasWidth) - unitsToSubstract * chartUnit(canvasWidth);
}

function drawVowelChart() {
  var canvas = document.getElementById("vowel-chart");
  var ctx = canvas.getContext("2d");
  var chart = new VowelChart(canvas);
  canvas.height = 2 * chart.padding + chart.height;
  chart.drawBorder();

}

function draw() {
  drawVowelChart();
}
