import Snap from 'snapsvg'
import _ from 'lodash'

import VowelChart from './VowelChart'
import {Vowels} from './VowelList'

export default class VowelPlotter {
  constructor (vowelchart) {
    this.vowelChart = new VowelChart(500)
    this.snap = new Snap('#vowel-chart')
  }

  get borderAttr () {
    this._borderAttr = this._borderAttr || {fill: 'none', stroke: 'black'}
    return this._borderAttr
  }

  get markAttr () {
    this._markAttr = this._markAttr || {fill: 'black', stroke: 'black'}
    return this._markAttr
  }

  get labelAttr () {
    this._labelAttr = this._labelAttr || {
      'alignment-baseline': 'middle',
      'fill': 'black',
      'font-size': `${this.vowelChart.textSize}px`,
      'text-anchor': 'middle',
    }
    return this._labelAttr
  }

  drawBorder () {
    const coordinatePairs = [
      this.vowelChart.vowelXY(Vowels.close.front.unrounded),
      this.vowelChart.vowelXY(Vowels.close.back.rounded),
      this.vowelChart.vowelXY(Vowels.open.back.unrounded),
      this.vowelChart.vowelXY(Vowels.open.front.unrounded),
    ]
    const formattedPairs = _.map(coordinatePairs, p => p.join(','))
    const points = formattedPairs.join(' ')
    const polygon = this.snap.polygon(points)
    polygon.attr(this.borderAttr)
  }

  markVowel (vowel, label = null) {
    this.markVowelCircle(vowel)
    this.labelVowel(vowel, label)
  }

  markVowelCircle (vowel) {
    console.log(this.vowelChart.vowelXY(vowel))
    const circle = this.snap.circle(
      this.vowelChart.vowelX(vowel),
      this.vowelChart.vowelY(vowel),
      this.vowelChart.vowelMarkRadius,
    )
    circle.attr(this.markAttr)
  }

  labelVowel (vowel, label = null) {
    label = label || vowel.symbol
    const shift = this.vowelChart.textDistance * (vowel.rounded ? 1 : -1)
    const text = this.snap.text(
      this.vowelChart.vowelX(vowel) + shift,
      this.vowelChart.vowelY(vowel),
      label,
    )
    text.attr(this.labelAttr)
  }
}
