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
    console.log(kvAsString)
    const kvAsArray = kvAsString.map(kvPair => kvPair.split('='))
    console.log(kvAsArray)
    const kvDecoded = kvAsArray.map(kvPair => [decodeURIComponent(kvPair[0]), kvPair[1]])
    console.log(kvDecoded)
    const map = new Map(kvDecoded)
    return map
  }

  /**
   * @param {string} text A string like "open front unrounded".
   * @returns {Vowel} The corresponding vowel.
   * @example textToVowel("open front unrounded") # new Vowel(1, 1, false)
   */
  textToVowel (text) {
  }
}
