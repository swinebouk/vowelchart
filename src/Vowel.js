
export class Vowel {
  constructor (openness, frontness, rounded) {
    this.openness = openness
    this.frontness = frontness
    this.rounded = rounded
  }

  // Note: this method is important when using vowels as Object keys.
  toString () {
    return `Vowel(${this.openness},${this.frontness},${this.rounded})`
  }
}

// Primary set of vowels
export const closeFrontVowel = new Vowel(0, 1, false)
export const midcloseFrontVowel = new Vowel(1 / 3, 1, false)
export const midopenFrontVowel = new Vowel(2 / 3, 1, false)
export const openFrontVowel = new Vowel(1, 1, false)
export const openBackVowel = new Vowel(1, 0, false)
export const midopenBackVowel = new Vowel(2 / 3, 0, true)
export const midcloseBackVowel = new Vowel(1 / 3, 0, true)
export const closeBackVowel = new Vowel(0, 0, true)

// Other vowels
export const openMidVowel = new Vowel(1, 0.5, false)
export const closeMidVowel = new Vowel(0, 0.5, false)
