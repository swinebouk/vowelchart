import Vowel from './Vowel'
import VowelChart from './VowelChart'
import {Openness as O, Frontness as F, Roundness as R} from './Articulation'

test('Calculates the primary set positions correctly', () => {
  const chart = new VowelChart(120)
  const c1 = new Vowel(O.close, F.front, R.unrounded)
  const c2 = new Vowel(O.closeMid, F.front, R.unrounded)
  const c3 = new Vowel(O.openMid, F.front, R.unrounded)
  const c4 = new Vowel(O.open, F.front, R.unrounded)
  const c5 = new Vowel(O.open, F.back, R.unrounded)
  const c6 = new Vowel(O.openMid, F.back, R.unrounded)
  const c7 = new Vowel(O.closeMid, F.back, R.unrounded)
  const c8 = new Vowel(O.close, F.back, R.unrounded)

  expect(chart.vowelX(c1)).toBeCloseTo(12)
  expect(chart.vowelX(c2)).toBeCloseTo(28)
  expect(chart.vowelX(c3)).toBeCloseTo(44)
  expect(chart.vowelX(c4)).toBeCloseTo(60)
  expect(chart.vowelX(c5)).toBeCloseTo(108)
  expect(chart.vowelX(c6)).toBeCloseTo(108)
  expect(chart.vowelX(c7)).toBeCloseTo(108)
  expect(chart.vowelX(c8)).toBeCloseTo(108)

  expect(chart.vowelY(c1)).toBeCloseTo(12)
  expect(chart.vowelY(c2)).toBeCloseTo(36)
  expect(chart.vowelY(c3)).toBeCloseTo(60)
  expect(chart.vowelY(c4)).toBeCloseTo(84)
  expect(chart.vowelY(c5)).toBeCloseTo(84)
  expect(chart.vowelY(c6)).toBeCloseTo(60)
  expect(chart.vowelY(c7)).toBeCloseTo(36)
  expect(chart.vowelY(c8)).toBeCloseTo(12)
})
