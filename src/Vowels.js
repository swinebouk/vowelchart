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
