import React, { Component } from 'react'
import './Editor.css'
import PropTypes from 'prop-types'

import _ from 'lodash'

class VowelPropComponent extends Component {
  // eslint-disable-line no-unused-vars
  static propTypes = {
    value: PropTypes.number.isRequired,
  }

  onChange () {

  }

  constructor (props) {
    super(props)
    this.state = {value: props.value}
  }
}

class FrontnessSelector extends VowelPropComponent {
  render () {
    return (
      <input value={this.props.value} onChange={this.onChange} />
      /*
      <div className="select">
        <select>
          <option>Front</option>
          <option>Near-Front</option>
          <option>Central</option>
          <option>Near-Back</option>
          <option>Back</option>
        </select>
      </div>
      */
    )
  }
}

class OpennessSelector extends VowelPropComponent {
  render () {
    return (
      <input value={this.props.value} onChange={this.onChange} />
      /*
      <div className="select">
        <select>
          <option>Close</option>
          <option>Near-close</option>
          <option>Close-mid</option>
          <option>Mid</option>
          <option>Open-mid</option>
          <option>Near-open</option>
          <option>Open</option>
        </select>
      </div>
      */
    )
  }
}

class RoundnessSelector extends VowelPropComponent {
  static propTypes = {
    value: PropTypes.bool.isRequired,
  }

  render () {
    return (
      <input value={this.props.value} onChange={this.onChange} />
      /*
      <div className="select">
        <select>
          <option>rounded</option>
          <option>unrounded</option>
        </select>
      </div>
      */
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
          <FrontnessSelector value={this.props._frontness}/>
          <OpennessSelector value={this.props._openness}/>
          <RoundnessSelector value={this.props._rounded}/>
          <input className="input vowel-name" type="text" placeholder="i" value={this.props._symbol} onChange={this.onChange} />
        </label>
      </li>
    )
  }
}

class Editor extends Component {
  // eslint-disable-line no-unused-vars
  static propTypes = {
    vowelList: PropTypes.func.isRequired,
  }

  componentWillMount () {
    this.vowels = [...this.props.vowelList()]
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
