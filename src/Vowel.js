'use strict'

export default class Vowel {
  constructor (openness, frontness, rounded, symbol = null) {
    this._openness = openness
    this._frontness = frontness
    this._rounded = rounded
    this._symbol = symbol
  }

  get openness () {
    return this._openness
  }

  get frontness () {
    return this._frontness
  }

  get rounded () {
    return this._rounded
  }

  get symbol () {
    return this._symbol
  }

  // Note: this method is important when using vowels as Object keys.
  toString () {
    return `Vowel(${this.openness},${this.frontness},${this.rounded})`
  }
}
