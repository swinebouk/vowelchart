
class VowelChart {

  constructor(canvas) {
    this.ctx = canvas.getContext("2d");
    this.canvasWidth = canvas.width;
  }

  get padding() {
    if (!this._padding) {
      this._padding = this.canvasWidth * 0.1;
    }
    return this._padding;
  }

  get width() {
    if (!this._width) {
      this._width = this.canvasWidth - 2 * this.padding;
    }
    return this._width;
  }

  get chartUnit() {
    if (!this._chartUnit) {
      this._chartUnit = this.width / 4;
    }
    return this._chartUnit;
  }

  get height() {
    if (!this._chartHeight) {
      this._chartHeight = this.chartUnit * 3;
    }
    return this._chartHeight;
  }

  get vowelMarkRadius() {
    if (!this._vowelMarkRadius) {
      this._vowelMarkRadius = this.chartUnit * 0.05;
    }
    return this._vowelMarkRadius;
  }

  vowelX(vowel) {
    if (!this._vowelX) {
      this._vowelX = {};
    }
    if (!(this._vowelX[vowel])) {
      var unitsToSubstract = vowel.frontness * (-vowel.openness * 2 + 4);
      this._vowelX[vowel] = this.padding + this.width - unitsToSubstract * this.chartUnit;
    }
    return this._vowelX[vowel];
  }

  vowelY(vowel) {
    if (!this._vowelY) {
      this._vowelY = {};
    }
    console.log(this._vowelY);
    if (!(this._vowelY[vowel])) {
      var value = this.padding + vowel.openness * 3 * this.chartUnit;
      console.log(`goign to store ${vowel.openness},${vowel.frontness} as ${value}`)
      this._vowelY[vowel] = value;
    }
    return this._vowelY[vowel];
  }

  vowelXY(vowel) {
    return [this.vowelX(vowel), this.vowelY(vowel)];
  }

  markVowel(vowel) {
    var x, y;
    [x, y] = this.vowelXY(vowel);
    this.ctx.beginPath();
    this.ctx.arc(x, y, this.vowelMarkRadius, 0, 2 * Math.PI);
    this.ctx.fill();
  }

  drawBorder() {
    // Using o for the open back vowel, for simplicity
    var iX, iY, uX, uY, aX, aY, oX, oY;

    [iX, iY] = this.vowelXY(closeFrontVowel);
    [uX, uY] = this.vowelXY(closeBackVowel);
    [aX, aY] = this.vowelXY(openFrontVowel);
    [oX, oY] = this.vowelXY(openBackVowel);

    this.markVowel(closeFrontVowel);
    this.markVowel(closeBackVowel);
    this.markVowel(openFrontVowel);
    this.markVowel(openBackVowel);

    this.ctx.beginPath();
    this.ctx.moveTo(iX, iY);
    this.ctx.lineTo(uX, uY);
    this.ctx.lineTo(oX, oY);
    this.ctx.lineTo(aX, aY);
    this.ctx.closePath();
    this.ctx.stroke();
  }

}
