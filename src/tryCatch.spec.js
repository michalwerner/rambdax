import { delay } from './delay'
import { prop } from './rambda/prop'
import { tryCatch } from './tryCatch'

test('throws when fn is not function', () => {
  const fn = 'foo'

  expect(
    () => tryCatch(fn, false)(null)
  ).toThrow('R.tryCatch | fn \'foo\'')
})

test('when fallback is used', () => {
  const fn = prop('x')

  expect(tryCatch(fn, false)(null)).toBe(false)
})

test('when fallback is function', () => {
  const fn = prop('x')

  expect(tryCatch(fn, x => x)(null)).toBe(null)
})

test('when fn is used', () => {
  const fn = prop('x')

  expect(tryCatch(fn, false)({})).toBe(undefined)
  expect(tryCatch(fn, false)({ x : 1 })).toBe(1)
})

test('when async + fallback', async () => {
  let called = false

  const fn = async input => {
    await delay(input)
    called = true

    return JSON.parse('{a:')
  }

  expect(await tryCatch(fn, 'fallback')(100)).toBe('fallback')
  expect(called).toBe(true)
})

test('when async + fallback is function', async () => {
  let called = false

  const fn = async input => {
    await delay(input)
    called = true

    return JSON.parse('{a:')
  }

  expect(await tryCatch(fn, x => x + 1)(100)).toBe(101)
  expect(called).toBe(true)
})

test('when async + fallback is async', async () => {
  let called = false
  const fn = async input => {
    await delay(input)
    called = true

    return JSON.parse('{a:')
  }
  const fallback = async input => input + 1

  expect(await tryCatch(fn, fallback)(100)).toBe(101)
  expect(called).toBe(true)
})

test('when async + fn', async () => {
  let called = false

  const fn = async input => {
    await delay(input)
    called = true

    return input + 1
  }

  expect(await tryCatch(fn, 'fallback')(100)).toBe(101)
  expect(called).toBe(true)
})
