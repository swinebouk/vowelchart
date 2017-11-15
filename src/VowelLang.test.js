import VowelLang from './VowelLang'
import Vowel from './Vowel'
import {
  Openness as O,
  Frontness as F,
  Roundness as R,
} from './Articulation'

test('Parse single vowel', () => {
  const parser = new VowelLang()
  const actualVowel = parser.parse('open+front+unrounded=a')
  expect(actualVowel).toEqual(new Map([['open+front+unrounded', 'a']]))
})

test('Parse two vowels', () => {
  const parser = new VowelLang()
  const actualVowel = parser.parse('open+front+unrounded=a&close+front+unrounded=i')
  const expectedVowels = new Map([
    ['open+front+unrounded', 'a'],
    ['close+front+unrounded', 'i'],
  ])
  expect(actualVowel).toEqual(expectedVowels)
})

test('Parses text to vowel', () => {
  const parser = new VowelLang()
  const vowelsToTest = [
    ['open+front+unrounded', 'a', new Vowel(O.open, F.front, R.unrounded, 'a')],
    ['openMid+back+rounded', 'ɔ', new Vowel(O.openMid, F.back, R.rounded, 'ɔ')],
    // Mock vowel that does not exist
    ['nearOpen+back+rounded', 'O', new Vowel(O.nearOpen, F.back, R.rounded, 'O')],
    // Default symbols are correctly found
    ['open+front+unrounded', null, new Vowel(O.open, F.front, R.unrounded, 'a')],
  ]
  vowelsToTest.forEach(v => {
    expect(parser.textToVowel(v[0], v[1])).toEqual(v[2])
  })
})

test('Incomplete string throws an error', () => {
  const parser = new VowelLang()
  expect(() => {
    parser.textToVowel('open+front')
  }).toThrow(TypeError)
})

test('Unrecognized manners of articulation throw an error', () => {
  const parser = new VowelLang()
  expect(() => {
    parser.textToVowel('open+almostFront+rounded')
  }).toThrow(TypeError)
})
