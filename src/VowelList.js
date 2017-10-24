import Vowel from './Vowel'

export const Vowels = {
  open: {
    front: {
      unrounded: new Vowel(1, 1, false, 'a'),
    },
    back: {
      unrounded: new Vowel(1, 0, false, 'ɑ'),
    },
  },
  nearOpen: {
    front: {
      unrounded: new Vowel(5 / 6, 1, false, 'æ'),
    },
    central: {
      unrounded: new Vowel(5 / 6, 0.5, false, 'ɐ'),
    },
  },
  openMid: {
    front: {
      unrounded: new Vowel(2 / 3, 1, false, 'ɛ'),
      rounded: new Vowel(2 / 3, 1, true, 'œ'),
    },
    back: {
      unrounded: new Vowel(2 / 3, 0, false, 'ʌ'),
      rounded: new Vowel(2 / 3, 0, true, 'ɔ'),
    },
  },
  mid: {
    central: {
      unrounded: new Vowel(0.5, 0.5, false, 'ə'),
    },
  },
  closeMid: {
    front: {
      unrounded: new Vowel(1 / 3, 1, false, 'e'),
      rounded: new Vowel(1 / 3, 1, true, 'ø'),
    },
    central: {
      unrounded: new Vowel(1 / 3, 0.5, false, 'ɘ'),
      rounded: new Vowel(1 / 3, 0.5, true, 'ɵ'),
    },
    back: {
      unrounded: new Vowel(1 / 3, 0, false, 'ɤ'),
      rounded: new Vowel(1 / 3, 0, true, 'o'),
    },
  },
  nearClose: {
    nearFront: {
      unrounded: new Vowel(1 / 6, 5 / 6, false, 'ɪ'),
      rounded: new Vowel(1 / 6, 5 / 6, true, 'ʏ'),
    },
    nearBack: {
      rounded: new Vowel(1 / 6, 1 / 6, true, 'ʊ'),
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

export function * list (vowels = null) {
  vowels = vowels || Vowels
  for (const v in vowels) {
    if (vowels[v] instanceof Vowel) {
      yield vowels[v]
    } else {
      yield * list(vowels[v])
    }
  }
}
