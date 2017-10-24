import React, { Component } from 'react'
import './Chart.css'
// import VowelChart from '../VowelChart'

class Chart extends Component {
  render () {
    // const vowelChart = new VowelChart(500)
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
