import VowelLang from './VowelLang'

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
