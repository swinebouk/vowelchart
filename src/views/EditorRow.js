import React, { Component } from 'react'
import SelectArticulation from './SelectArticulation'
import PropTypes from 'prop-types'

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
  updateSymbol (symbol) {
    this.updateVowel({_symbol: symbol})
  }

  updateRoundness (roundness) {
    this.updateVowel({_roundness: roundness === 'true'})
  }

  updateOpenness (openness) {
    this.updateVowel({_openness: parseFloat(openness)})
  }

  updateFrontness (frontness) {
    this.updateVowel({_frontness: parseFloat(frontness)})
  }

  constructor (props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.updateVowel = this.updateVowel.bind(this)
    _.bindAll(this, ['updateFrontness', 'updateOpenness', 'updateRoundness', 'updateSymbol'])
  }

  updateVowel (changeset) {
    console.log('updateVowel', changeset)
    this.props.onUpdate(changeset)
  }

  handleChange (e) {
    console.log('editorRow changed', e.target)
  }

  render () {
    return (
      <li className="editorRow">
        <label className="checkbox">
          <input type="checkbox" value={this.props.visible} onChange={this.handleChange}/>
          <SelectArticulation articulation="_frontness" value={this.props._frontness} onChange={this.updateFrontness}/>
          <SelectArticulation articulation="_openness" value={this.props._openness} onChange={this.updateOpenness}/>
          <SelectArticulation articulation="_roundness" value={this.props._rounded} onChange={this.updateRoundness}/>
          <input className="input vowel-name" type="text" placeholder="i" value={this.props._symbol} onChange={this.updateSymbol} />
        </label>
      </li>
    )
  }
}

export default EditorRow
