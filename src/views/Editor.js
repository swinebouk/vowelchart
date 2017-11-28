import React, { Component } from 'react'
import './Editor.css'
import PropTypes from 'prop-types'
import _ from 'lodash'
import EditorRow from './EditorRow'

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

  updateVowel (vowel, changeset) {
    _.assign(vowel, changeset)
    this.vowels.onUpdate()
  }

  render () {
    const editorRows = _.map(this.vowels, (vowel) => <EditorRow {...vowel} onUpdate={_.bind(this.updateVowel, this, vowel)} key={vowel.toString()} />)

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
