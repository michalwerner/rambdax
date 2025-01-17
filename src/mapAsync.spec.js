import { map } from './rambda/map'
import { mapAsync } from './mapAsync'
import { composeAsync } from './composeAsync'

const delay = a =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve(a + 20)
    }, 100)
  })

const tap = a =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve(a)
    }, 100)
  })

const rejectDelay = a =>
  new Promise((_, reject) => {
    setTimeout(() => {
      reject(a + 20)
    }, 100)
  })

test('', async () => {
  const result = await mapAsync(delay, [ 1, 2, 3 ])
  expect(result).toEqual([ 21, 22, 23 ])
})

test('with object', async () => {
  const result = await mapAsync(delay, {
    a : 1,
    b : 2,
    c : 3,
  })
  expect(result).toEqual({
    a : 21,
    b : 22,
    c : 23,
  })
})

test('composeAsync', async () => {
  const result = await composeAsync(
    mapAsync(delay),
    mapAsync(async a => delay(a)),
    map(a => a * 10)
  )(await tap([ 1, 2, 3 ]))
  expect(result).toEqual([ 50, 60, 70 ])
})

test('error', async () => {
  try {
    const result = await mapAsync(rejectDelay)([ 1, 2, 3 ])
  } catch (err){
    expect(err).toBe(21)
  }
})
