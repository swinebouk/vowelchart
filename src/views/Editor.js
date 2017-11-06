import React, { Component } from 'react'
import './Editor.css'
import PropTypes from 'prop-types'
import _ from 'lodash'
import Articulation from '../Articulation'

class SelectArticulation extends Component {
  // eslint-disable-line no-unused-vars
  static propTypes = {
    value: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]).isRequired,
    articulation: PropTypes.oneOf(['Frontness', 'Openness', 'Roundness']).isRequired,
  }

  onChange () {

  }

  constructor (props) {
    super(props)
    this.state = {value: props.value, articulation: props.articulation}
  }

  render () {
    const propSelectors = _.map(Articulation[this.props.articulation], (numerical, position) => {
      const uniqueKey = _.capitalize(this.props.articulation) + _.capitalize(position) + 'Selector'
      return <option value={numerical} key={uniqueKey}>{position}</option>
    })
    return (
      <fieldset className="select">
        <select>
          {propSelectors}
        </select>
      </fieldset>
    )
  }
}

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
  static defaultProps= {
    visible: true,
  }

  onChange () {}

  render () {
    return (
      <li className="editorRow">
        <label className="checkbox">
          <input type="checkbox" value={this.props.visible} onChange={this.onChange}/>
          <SelectArticulation articulation="Frontness" value={this.props._frontness} onChange={this.onChange}/>
          <SelectArticulation articulation="Openness" value={this.props._openness} onChange={this.onChange}/>
          <SelectArticulation articulation="Roundness" value={this.props._rounded} onChange={this.onChange}/>
          <input className="input vowel-name" type="text" placeholder="i" value={this.props._symbol} onChange={this.onChange} />
        </label>
      </li>
    )
  }
}

class Editor extends Component {
  // eslint-disable-line no-unused-vars
  static propTypes = {
    vowelList: PropTypes.arrayOf(PropTypes.shape({
      _frontness: PropTypes.number.isRequired,
      _openness: PropTypes.number.isRequired,
      _rounded: PropTypes.bool.isRequired,
    })),
  }

  componentWillMount () {
    this.vowels = this.props.vowelList
  }

  render () {
    const editorRows = _.map(this.vowels, (vowel) => <EditorRow {...vowel} key={vowel.toString()} />)

    return (
      <section>
        <ul>
          {editorRows}
        </ul>
      </section>
    )
  }
}

export default Editor
