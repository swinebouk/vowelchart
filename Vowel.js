
class Vowel {
  constructor(openness, frontness, rounded) {
    this.openness = openness;
    this.frontness = frontness;
    this.rounded = rounded;
  }

  // Note: this method is important when using vowels as Object keys.
  toString() {
    return `Vowel(${this.openness},${this.frontness},${this.rounded})`;
  }
}

// Primary set of vowels
var closeFrontVowel = new Vowel(0, 1, false);
var midcloseFrontVowel = new Vowel(1/3, 1, false);
var midopenFrontVowel = new Vowel(2/3, 1, false);
var openFrontVowel = new Vowel(1, 1, false);
var openBackVowel = new Vowel(1, 0, true);
var midopenBackVowel = new Vowel(2/3, 0, true);
var midcloseBackVowel = new Vowel(1/3, 0, true);
var closeBackVowel = new Vowel(0, 0, true);

// Other vowels
var openMidVowel = new Vowel(1, 0.5, false); // TODO roundedness
var closeMidVowel = new Vowel(0, 0.5, false); // TODO roundedness
