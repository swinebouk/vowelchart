'use strict'

import VowelChart from './VowelChart'
import VowelPlotter from './VowelPlotter'
import _ from 'lodash'
import {list} from './VowelList'

window.addEventListener('load', function () {
  const vowelChart = new VowelChart(500)
  const plotter = new VowelPlotter(vowelChart)
  plotter.drawBorder()
  _.each([...list()], v => plotter.markVowel(v))
})

document.getElementById('download').addEventListener('click', function () {
  this.href = document.getElementById('vowel-chart').toDataURL()
  this.download = 'vowel-chart.png'
}, false)
