'use strict'

export default class VowelChart {
  constructor (width) {
    this.canvasWidth = width
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

  get textDistance () {
    return this.chartUnit / 5
  }

  get textSize () {
    return this.chartUnit / 5
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
}
