'use strict'

import Vowel from './Vowel'
import Vowels from './Vowels'
import _ from 'lodash'

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

  markVowel (vowel, symbol = null) {
    const [x, y] = this.vowelXY(vowel)
    const originalTextAlign = this.ctx.textAlign
    const originalTextBaseline = this.ctx.textBaseline
    const originalFont = this.ctx.font
    const actualSymbol = symbol || vowel.symbol

    const textX = vowel.rounded ? x + this.textDistance : x - this.textDistance

    this.ctx.beginPath()
    this.ctx.arc(x, y, this.vowelMarkRadius, 0, 2 * Math.PI)
    this.ctx.fill()

    this.ctx.textAlign = 'center'
    this.ctx.textBaseline = 'middle'
    this.ctx.font = `${this.textSize}pt sans-serif`

    this.ctx.fillText(actualSymbol, textX, y)

    this.ctx.textAlign = originalTextAlign
    this.ctx.textBaseline = originalTextBaseline
    this.ctx.font = originalFont
  }

  drawBorder () {
    const [iX, iY] = this.vowelXY(new Vowel(-0.05, 1.05, false))
    const [uX, uY] = this.vowelXY(new Vowel(-0.05, -0.05, false))
    const [aX, aY] = this.vowelXY(new Vowel(1.05, 1.05, false))
    const [oX, oY] = this.vowelXY(new Vowel(1.05, -0.05, false))

    this.ctx.beginPath()
    this.ctx.moveTo(iX, iY)
    this.ctx.lineTo(uX, uY)
    this.ctx.lineTo(oX, oY)
    this.ctx.lineTo(aX, aY)
    this.ctx.closePath()
    this.ctx.stroke()
  }

  markAllVowels () {
    _.each(
      Vowels,
      (frontnessGroup) => _.each(
        frontnessGroup,
        (opennessGroup) => _.each(
          opennessGroup, _.each(
            opennessGroup,
            vowel => this.markVowel(vowel)
          )
        )
      )
    )
  }
}
