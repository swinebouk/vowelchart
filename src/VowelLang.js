import _ from 'lodash'

import Vowel from './Vowel'
import {Openness, Frontness, Roundness} from './Articulation'

/**
 * Takes a query string and returns an array of vowels.
 *
 * @example
 * (new VowelLang()).parse("mid-central=ə")
 */
export default class VowelLang {
  /**
   * @param {string} query
   * @returns {Map<String, String>} A map of vowel representations to the
   * symbols to be used.
   */
  parse (query) {
    const kvAsString = query.split('&')
    const kvAsArray = kvAsString.map(kvPair => kvPair.split('='))
    const kvDecoded = kvAsArray.map(kvPair => [decodeURIComponent(kvPair[0]), kvPair[1]])
    const map = new Map(kvDecoded)
    return map
  }

  /**
   * @param {string} text A string like "open+front+unrounded".
   * @param {string} symbol
   * @returns {Vowel} The corresponding vowel.
   * @example textToVowel("open+front+unrounded") # new Vowel(1, 1, false)
   */
  textToVowel (text, symbol) {
    const [openness, frontness, roundness] = text.split('+')
    if (![openness, frontness, roundness].every(e => _.isString(e))) {
      throw new TypeError(`Unparseable: ${text}`)
    }
    const unrecognizedProperties = {}
    if (!_.has(Openness, openness)) {
      unrecognizedProperties.openness = openness
    }
    if (!_.has(Frontness, frontness)) {
      unrecognizedProperties.frontness = frontness
    }
    if (!_.has(Roundness, roundness)) {
      unrecognizedProperties.roundness = roundness
    }
    if (!_.isEmpty(unrecognizedProperties)) {
      const kvPairs = _.map(unrecognizedProperties, (v) => `"${v}"`)
      throw new TypeError(`Unrecognized ${kvPairs.join(', ')}`)
    }
    const o = Openness[openness]
    const f = Frontness[frontness]
    const r = Roundness[roundness]
    return new Vowel(o, f, r, symbol)
  }
}
