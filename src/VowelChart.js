import {
  Vowel,
  closeFrontVowel,
  midcloseFrontVowel,
  midopenFrontVowel,
  openFrontVowel,
  openBackVowel,
  midopenBackVowel,
  midcloseBackVowel,
  closeBackVowel,
} from './Vowel'

export class VowelChart {
  constructor (canvas) {
    this.ctx = canvas.getContext('2d')
    this.canvasWidth = canvas.width
  }

  get padding () {
    return (this._padding = this._padding || this.canvasWidth * 0.1)
  }

  get width () {
    return (this._width = this._width || this.canvasWidth - 2 * this.padding)
  }

  get chartUnit () {
    return (this._chartUnit = this._chartUnit || this._chartUnit = this.width / 4)
  }

  get height () {
    return (this._chartHeight = this._chartHeight || this._chartHeight = this.chartUnit * 3)
  }

  get vowelMarkRadius () {
    if (!this._vowelMarkRadius) {
      this._vowelMarkRadius = this.chartUnit * 0.05
    }
    return this._vowelMarkRadius
  }

  vowelX (vowel) {
    // TODO use a = a || b
    if (!this._vowelX) {
      this._vowelX = {}
    }
    if (!(this._vowelX[vowel])) {
      var unitsToSubstract = vowel.frontness * (-vowel.openness * 2 + 4)
      this._vowelX[vowel] = this.padding + this.width - unitsToSubstract * this.chartUnit
    }
    return this._vowelX[vowel]
  }

  vowelY (vowel) {
    // TODO use a = a || b
    if (!this._vowelY) {
      this._vowelY = {}
    }
    if (!(this._vowelY[vowel])) {
      var value = this.padding + vowel.openness * 3 * this.chartUnit
      this._vowelY[vowel] = value
    }
    return this._vowelY[vowel]
  }

  vowelXY (vowel) {
    return [this.vowelX(vowel), this.vowelY(vowel)]
  }

  markVowel (vowel) {
    var x, y;
    [x, y] = this.vowelXY(vowel)
    this.ctx.beginPath()
    this.ctx.arc(x, y, this.vowelMarkRadius, 0, 2 * Math.PI)
    this.ctx.fill()
  }

  drawBorder () {
    // Using o for the open back vowel, for simplicity
    const [iX, iY] = this.vowelXY(closeFrontVowel)
    const [uX, uY] = this.vowelXY(closeBackVowel)
    const [aX, aY] = this.vowelXY(openFrontVowel)
    const [oX, oY] = this.vowelXY(openBackVowel)

    this.markVowel(closeFrontVowel)
    this.markVowel(closeBackVowel)
    this.markVowel(openFrontVowel)
    this.markVowel(openBackVowel)

    this.ctx.beginPath()
    this.ctx.moveTo(iX, iY)
    this.ctx.lineTo(uX, uY)
    this.ctx.lineTo(oX, oY)
    this.ctx.lineTo(aX, aY)
    this.ctx.closePath()
    this.ctx.stroke()
  }
}
