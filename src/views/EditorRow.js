import React, { Component } from 'react'
import SelectArticulation from './SelectArticulation'
import PropTypes from 'prop-types'
import _ from 'lodash'

class EditorRow extends Component {
  // eslint-disable-line no-unused-vars
  static propTypes = {
    _frontness: PropTypes.number.isRequired,
    _openness: PropTypes.number.isRequired,
    _rounded: PropTypes.bool.isRequired,
    _symbol: PropTypes.string.isRequired,
    visible: PropTypes.bool,
    onUpdate: PropTypes.func.isRequired,
  }

  // eslint-disable-line no-unused-vars
  static defaultProps= {
    visible: true,
  }
  updateVisibility (value) {
    this.updateVowel({visibility: value === 'true'})
  }

  updateSymbol (e) {
    this.updateVowel({_symbol: e.target.value})
    this.setState({_symbol: e.target.value})
  }

  updateRoundness (roundness) {
    this.updateVowel({_rounded: roundness === 'true'})
  }

  updateOpenness (openness) {
    this.updateVowel({_openness: parseFloat(openness)})
  }

  updateFrontness (frontness) {
    this.updateVowel({_frontness: parseFloat(frontness)})
  }

  constructor (props) {
    super(props)
    this.updateVowel = this.updateVowel.bind(this)
    _.bindAll(this, ['updateVowel', 'updateFrontness', 'updateOpenness', 'updateRoundness', 'updateSymbol', 'updateVisibility'])
  }

  updateVowel (changeset) {
    console.log('updateVowel', changeset)
    this.props.onUpdate(changeset)
  }
  componentWillMount () {
    this.setState({visible: this.props.visible, _symbol: this.props._symbol})
  }
  render () {
    return (
      <li className="editorRow">
        <label className="checkbox">
          <input type="checkbox" value={this.state.visible} onChange={this.updateVisibility}/>
          <SelectArticulation articulation="_frontness" value={this.props._frontness} onChange={this.updateFrontness}/>
          <SelectArticulation articulation="_openness" value={this.props._openness} onChange={this.updateOpenness}/>
          <SelectArticulation articulation="_roundness" value={this.props._rounded} onChange={this.updateRoundness}/>
          <input className="input vowel-name" type="text" placeholder="i" value={this.state._symbol} onChange={this.updateSymbol} />
        </label>
      </li>
    )
  }
}

export default EditorRow
