import React, {Component} from 'react'
import './Editor.css'
import PropTypes from 'prop-types'
import _ from 'lodash'
import Articulation from '../Articulation'

class SelectArticulation extends Component {
  // eslint-disable-line no-unused-vars
  static propTypes = {
    value: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]).isRequired,
    articulation: PropTypes.oneOf(['Frontness', 'Openness', 'Roundness'])
      .isRequired,
  }

  constructor(props) {
    super(props)
    this.state = {value: props.value, articulation: props.articulation}
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    this.setState({value: e.target.value})
  }

  render() {
    const propSelectors = _.map(
      Articulation[this.props.articulation],
      (numValue, position) => {
        const uniqueKey =
          _.capitalize(this.props.articulation) +
          _.capitalize(position) +
          'Selector'
        return (
          <option value={numValue} key={uniqueKey}>
            {position}
          </option>
        )
      }
    )
    return (
      <fieldset className="select">
        <select value={this.state.value} onChange={this.handleChange}>
          {propSelectors}
        </select>
      </fieldset>
    )
  }
}

export default SelectArticulation
