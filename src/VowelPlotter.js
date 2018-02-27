import Snap from 'snapsvg-cjs'
import _ from 'lodash'

import React, {Component} from 'react'
import PropTypes from 'prop-types'

import VowelChart from './VowelChart'
import vowels, {findDefaultVowel} from './VowelList'

import {Openness as O, Frontness as F, Roundness as R} from './Articulation'

export default class VowelPlotter extends Component {
  static propTypes = {
    width: PropTypes.string.isRequired,
    height: PropTypes.string.isRequired,
  }

  constructor(props) {
    super(props)
    this.vowelChart = new VowelChart(this.props.width)
  }

  svgRender() {
    this.snap = new Snap(this.svgElem)

    this.drawBorder()
    _.each(vowels, v => this.markVowel(v))
  }

  componentDidMount() {
    this.svgRender()
  }
  componentDidUpdate() {
    this.svgRender()
  }
  render() {
    return (
      <svg
        ref={d => (this.svgElem = d)}
        height={this.props.height}
        width={this.props.width}
      />
    )
  }
  get borderAttr() {
    this._borderAttr = this._borderAttr || {fill: 'none', stroke: 'black'}
    return this._borderAttr
  }

  get markAttr() {
    this._markAttr = this._markAttr || {fill: 'black', stroke: 'black'}
    return this._markAttr
  }

  get labelAttr() {
    this._labelAttr = this._labelAttr || {
      'alignment-baseline': 'middle',
      fill: 'black',
      'font-size': `${this.vowelChart.textSize}px`,
      'text-anchor': 'middle',
    }
    return this._labelAttr
  }

  drawBorder() {
    const coordinatePairs = [
      this.vowelChart.vowelXY(findDefaultVowel(O.close, F.front, R.unrounded)),
      this.vowelChart.vowelXY(findDefaultVowel(O.close, F.back, R.rounded)),
      this.vowelChart.vowelXY(findDefaultVowel(O.open, F.back, R.unrounded)),
      this.vowelChart.vowelXY(findDefaultVowel(O.open, F.front, R.unrounded)),
    ]
    const formattedPairs = _.map(coordinatePairs, p => p.join(','))
    const points = formattedPairs.join(' ')
    const polygon = this.snap.polygon(points)
    polygon.attr(this.borderAttr)
  }

  markVowel(vowel, label = null) {
    this.markVowelCircle(vowel)
    this.labelVowel(vowel, label)
  }

  markVowelCircle(vowel) {
    const circle = this.snap.circle(
      this.vowelChart.vowelX(vowel),
      this.vowelChart.vowelY(vowel),
      this.vowelChart.vowelMarkRadius
    )
    circle.attr(this.markAttr)
  }

  labelVowel(vowel, label = null) {
    label = label || vowel.symbol
    const shift = this.vowelChart.textDistance * (vowel.rounded ? 1 : -1)
    const text = this.snap.text(
      this.vowelChart.vowelX(vowel) + shift,
      this.vowelChart.vowelY(vowel),
      label
    )
    text.attr(this.labelAttr)
  }
}
