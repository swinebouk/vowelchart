'use strict'

import Vowel from './Vowel'

export default {
  open: {
    front: {
      unrounded: new Vowel(1, 1, false, 'a'),
    },
    back: {
      unrounded: new Vowel(1, 0, true, 'ɑ'),
    },
  },
  nearopen: {
    front: {
      unrounded: new Vowel(5 / 6, 1, false, 'æ'),
    },
    central: {
      unrounded: new Vowel(5 / 6, 0.5, false, 'ɐ'),
    },
  },
  openmid: {
    front: {
      unrounded: new Vowel(2 / 3, 1, false, 'ɛ'),
      rounded: new Vowel(2 / 3, 1, true, 'œ'),
    },
    back: {
      unrounded: new Vowel(2 / 3, 0, false, 'ʌ'),
      rounded: new Vowel(2 / 3, 0, true, 'ɔ'),
    },
  },
  close: {
    front: {
      unrounded: new Vowel(0, 1, false, 'i'),
      rounded: new Vowel(0, 1, true, 'y'),
    },
    central: {
      unrounded: new Vowel(0, 0.5, false, 'ɨ'),
      rounded: new Vowel(0, 0.5, true, 'ʉ'),
    },
    back: {
      unrounded: new Vowel(0, 0, false, 'u'),
      rounded: new Vowel(0, 0, true, 'ɯ'),
    },
  },
}
