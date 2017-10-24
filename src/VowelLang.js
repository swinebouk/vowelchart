import _ from 'lodash'

/**
 * Takes a query string and returns an array of vowels
 */
export default class VowelLang {
  /**
   * @param query {string}
   * @returns {object} a map of vowel representations to the symbols to be
   * used
   */
  parse (query) {
    const vowels = _.reduce(query.split('&'), (result, e) => {
      const [key, value] = e.split('=')
      result[key] = value
      return result
    })
    return vowels
  }
}
