const {VowelChart} = require('VowelChart.js')

function draw () {
  var canvas = document.getElementById('vowel-chart')
  var ctx = canvas.getContext('2d')
  var chart = new VowelChart(canvas, ctx)
  canvas.height = 2 * chart.padding + chart.height
  chart.drawBorder()
}

module.exports = {
  draw,
}
