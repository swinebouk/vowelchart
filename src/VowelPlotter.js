import Snap from 'snapsvg-cjs'
import _ from 'lodash'

import React, { Component } from 'react'
import PropTypes from 'prop-types'

import VowelChart from './VowelChart'
import {list, Vowels} from './VowelList'

export default class VowelPlotter extends Component {
  constructor (props) {
    super(props)
    this.vowelChart = new VowelChart(this.props.width)
  }

  svgRender () {
    this.snap = new Snap(this.svgElem)

    this.drawBorder()
    _.each([...list()], v => this.markVowel(v))
  }

  componentDidMount () {
    this.svgRender()
  }
  componentDidUpdate () {
    this.svgRender()
  }
  render () {
    return <svg ref={(d) => (this.svgElem = d)} height={this.props.height} width={this.props.width}/>
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

VowelPlotter.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
}
