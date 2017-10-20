import Snap from 'snapsvg'
import _ from 'lodash'

import VowelChart from './VowelChart'
import Vowels from './Vowels'

export default class VowelPlotter {
  constructor (vowelchart) {
    this.vowelChart = new VowelChart(500)
    this.snap = new Snap('#vowel-chart')
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
    polygon.attr({stroke: 'black', fill: 'none'})
  }
}
