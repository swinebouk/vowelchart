class Vowel {
  constructor(openness, frontness, rounded) {
    this.openness = openness;
    this.frontness = frontness;
    this.rounded = rounded;
  }
}


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

// Primary set of vowels
var closeFrontVowel = new Vowel(0, 1, false);
var midcloseFrontVowel = new Vowel(1/3, 1, false);
var midopenFrontVowel = new Vowel(2/3, 1, false);
var openFrontVowel = new Vowel(1, 1, false);
var openBackVowel = new Vowel(1, 0, true);
var midopenBackVowel = new Vowel(2/3, 0, true);
var midcloseBackVowel = new Vowel(1/3, 0, true);
var closeBackVowel = new Vowel(0, 0, true);

// Other vowels
var openMidVowel = new Vowel(1, 0.5, false); // TODO roundedness
var closeMidVowel = new Vowel(0, 0.5, false); // TODO roundedness

function drawVowelChart() {
  var canvas = document.getElementById("vowel-chart");
  var ctx = canvas.getContext("2d");
  var padding = canvas.width * 0.1;
  var chartWidth = canvas.width - 2 * padding;
  var chartHeight = chartWidth * 3 / 4;
  var chartUnit = chartWidth / 4;
  canvas.height = 2 * padding + chartHeight;

  console.log(`${chartWidth} ${chartHeight}`);

  var markVowel = function (vowel) {
    var x = vowelX(canvas.width, vowel);
    var y = vowelY(canvas.width, vowel);
    console.log(`will draw a rectangle here: ${x} ${y}`)
    ctx.fillRect(x, y, 7, 7);
  };

  markVowel(closeFrontVowel);
  markVowel(openFrontVowel);
  markVowel(openBackVowel);
  markVowel(closeBackVowel);

  ctx.beginPath();

  // Outline
  ctx.moveTo(padding, padding);
  ctx.lineTo(padding + chartWidth, padding);
  ctx.lineTo(padding + chartWidth, padding + chartHeight);
  ctx.lineTo(padding + chartWidth - 2 * chartUnit, padding + chartHeight);
  ctx.closePath();
  ctx.stroke();

  // Vertical central axis
  ctx.moveTo(padding + 2 * chartUnit, padding);
  ctx.lineTo(padding + chartWidth - chartUnit, padding + chartHeight);
  ctx.stroke();

  // Mid-closed line

}

function drawVowel(openness, frontness) {

}

function draw() {
  drawVowelChart();
}
