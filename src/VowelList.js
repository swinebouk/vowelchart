import Vowel from './Vowel'
import _ from 'lodash'

import {Openness as O, Frontness as F, Roundness as R} from './Articulation'

let vowels = [
  new Vowel(O.close, F.front, R.unrounded, 'i'),
  new Vowel(O.close, F.front, R.rounded, 'y'),
  new Vowel(O.close, F.central, R.unrounded, 'ɨ'),
  new Vowel(O.close, F.central, R.rounded, 'ʉ'),
  new Vowel(O.close, F.back, R.unrounded, 'ɯ'),
  new Vowel(O.close, F.back, R.rounded, 'u'),
  new Vowel(O.nearClose, F.nearFront, R.unrounded, 'ɪ'),
  new Vowel(O.nearClose, F.nearFront, R.rounded, 'ʏ'),
  new Vowel(O.nearClose, F.central, R.unrounded, 'ɪ̈'),
  new Vowel(O.nearClose, F.central, R.rounded, 'ʊ̈'),
  new Vowel(O.nearClose, F.nearBack, R.unrounded, 'ɯ̽'),
  new Vowel(O.nearClose, F.nearBack, R.rounded, 'ʊ'),
  new Vowel(O.closeMid, F.front, R.unrounded, 'e'),
  new Vowel(O.closeMid, F.front, R.rounded, 'ø'),
  new Vowel(O.closeMid, F.central, R.unrounded, 'ɘ'),
  new Vowel(O.closeMid, F.central, R.rounded, 'ɵ'),
  new Vowel(O.closeMid, F.back, R.unrounded, 'ɤ'),
  new Vowel(O.closeMid, F.back, R.rounded, 'o'),
  new Vowel(O.mid, F.front, R.unrounded, 'e̞'),
  new Vowel(O.mid, F.front, R.rounded, 'ø̞'),
  new Vowel(O.mid, F.central, R.unrounded, 'ə'),
  new Vowel(O.mid, F.central, R.rounded, 'ɵ̞'),
  new Vowel(O.mid, F.back, R.unrounded, 'ɤ̞'),
  new Vowel(O.mid, F.back, R.rounded, 'o̞'),
  new Vowel(O.openMid, F.front, R.unrounded, 'ɛ'),
  new Vowel(O.openMid, F.front, R.rounded, 'œ'),
  new Vowel(O.openMid, F.central, R.unrounded, 'ɜ'),
  new Vowel(O.openMid, F.central, R.rounded, 'ɞ'),
  new Vowel(O.openMid, F.back, R.unrounded, 'ʌ'),
  new Vowel(O.openMid, F.back, R.rounded, 'ɔ'),
  new Vowel(O.nearOpen, F.front, R.unrounded, 'æ'),
  new Vowel(O.nearOpen, F.central, R.unrounded, 'ɐ'),
  new Vowel(O.nearOpen, F.central, R.rounded, 'ɞ̞'),
  new Vowel(O.open, F.front, R.unrounded, 'a'),
  new Vowel(O.open, F.front, R.rounded, 'Œ'),
  new Vowel(O.open, F.central, R.unrounded, 'ä'),
  new Vowel(O.open, F.central, R.rounded, 'ɒ̈'),
  new Vowel(O.open, F.back, R.unrounded, 'ɑ'),
  new Vowel(O.open, F.back, R.rounded, 'ɒ'),
]

vowels = Object.freeze(_.map(vowels, v => Object.freeze(v)))

export default vowels

/**
 * @param {float} openness
 * @param {float} frontness
 * @param {bool} rounded
 */
export function findDefaultVowel(openness, frontness, rounded) {
  const f = v =>
    v.openness === openness &&
    v.frontness === frontness &&
    v.rounded === rounded
  const v = _.find(vowels, f)
  if (v) {
    return v
  }
  throw new Error(`Cannot find vowel (${openness}, ${frontness}, ${rounded})`)
}
