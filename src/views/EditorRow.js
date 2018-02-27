import React, {Component} from 'react'
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
  }

  // eslint-disable-line no-unused-vars
  static defaultProps = {
    visible: true,
  }

  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    console.log('editorRow changed', e.target)
  }

  render() {
    return (
      <li className="editorRow">
        <label className="checkbox">
          <input
            type="checkbox"
            value={this.props.visible}
            onChange={this.handleChange}
          />
          <SelectArticulation
            articulation="Frontness"
            value={this.props._frontness}
            onChange={this.handleChange}
          />
          <SelectArticulation
            articulation="Openness"
            value={this.props._openness}
            onChange={this.handleChange}
          />
          <SelectArticulation
            articulation="Roundness"
            value={this.props._rounded}
            onChange={this.handleChange}
          />
          <input
            className="input vowel-name"
            type="text"
            placeholder="i"
            value={this.props._symbol}
            onChange={this.handleChange}
          />
        </label>
      </li>
    )
  }
}

export default EditorRow
