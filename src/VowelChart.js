'use strict'

import Vowels from './Vowels'

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
    return (this._chartUnit = this._chartUnit || this.width / 4)
  }

  get height () {
    return (this._chartHeight = this._chartHeight || this.chartUnit * 3)
  }

  get vowelMarkRadius () {
    return (this._vowelMarkRadius = this._vowelMarkRadius || this.chartUnit * 0.05)
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
    this._vowelY = this._vowelY || {}
    if (!(this._vowelY[vowel])) {
      const value = this.padding + vowel.openness * 3 * this.chartUnit
      this._vowelY[vowel] = value
    }
    return this._vowelY[vowel]
  }

  vowelXY (vowel) {
    return [this.vowelX(vowel), this.vowelY(vowel)]
  }

  get textDistance () {
    return this.chartUnit / 5
  }

  markVowel (vowel, symbol = null) {
    const [x, y] = this.vowelXY(vowel)
    const originalTextAlign = this.ctx.textAlign
    const originalTextBaseline = this.ctx.textBaseline
    const actualSymbol = symbol || vowel.symbol

    const textX = vowel.rounded ? x + this.textDistance : x - this.textDistance

    this.ctx.beginPath()
    this.ctx.arc(x, y, this.vowelMarkRadius, 0, 2 * Math.PI)
    this.ctx.fill()

    this.ctx.textAlign = 'center'
    this.ctx.textBaseline = 'middle'
    this.ctx.fillText(actualSymbol, textX, y)

    this.ctx.textAlign = originalTextAlign
    this.ctx.textBaseline = originalTextBaseline
  }

  drawBorder () {
    const [iX, iY] = this.vowelXY(Vowels.close.front.unrounded)
    const [uX, uY] = this.vowelXY(Vowels.close.back.rounded)
    const [aX, aY] = this.vowelXY(Vowels.open.front.unrounded)
    const [oX, oY] = this.vowelXY(Vowels.open.back.unrounded)

    this.markVowel(Vowels.close.front.unrounded)
    this.markVowel(Vowels.close.back.rounded)
    this.markVowel(Vowels.open.front.unrounded)
    this.markVowel(Vowels.open.back.unrounded)

    this.ctx.beginPath()
    this.ctx.moveTo(iX, iY)
    this.ctx.lineTo(uX, uY)
    this.ctx.lineTo(oX, oY)
    this.ctx.lineTo(aX, aY)
    this.ctx.closePath()
    this.ctx.stroke()
  }
}
