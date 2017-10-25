import VowelChart from './VowelChart'
import Vowel from './Vowel'

test('calculates the corners correctly', () => {
  const chart = new VowelChart(100)
  const topLeft = new Vowel(0, 1, 0)
  const topRight = new Vowel(0, 0, 0)
  const bottomLeft = new Vowel(1, 1, 0)
  const bottomRight = new Vowel(1, 0, 0)
  expect(chart.vowelXY(topLeft)).toEqual([10, 10])
  expect(chart.vowelXY(topRight)).toEqual([90, 10])
  expect(chart.vowelXY(bottomLeft)).toEqual([50, 70])
  expect(chart.vowelXY(bottomRight)).toEqual([90, 70])
})
