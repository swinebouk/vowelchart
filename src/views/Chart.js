import React, { Component } from 'react'
import './Chart.css'

class Chart extends Component {
  render () {
    const vowelChart = new VowelChart(500)
    const plotter = new VowelPlotter(vowelChart)
    return (
      <section>
        <svg id="vowel-chart" height="500" width="500"/>
        <p>
          <a id="download" className="button">Download PNG</a>
        </p>
      </section>
    )
  }
}

export default Chart
