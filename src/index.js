'use strict'

import {VowelChart} from './VowelChart'

window.addEventListener('load', function () {
  const canvas = document.getElementById('vowel-chart')
  canvas.width = 600
  const ctx = canvas.getContext('2d')
  const chart = new VowelChart(canvas, ctx)
  canvas.height = 2 * chart.padding + chart.height
  chart.drawBorder()
  chart.markAllVowels()
})
