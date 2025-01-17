import { produce } from './produce'
import { delay } from './delay'

test('async', async () => {
  const fn = produce({
    foo : async x => {
      await delay(100)

      return `${ x }_ZEPPELIN`
    },
    bar : inputArgument => inputArgument === 5,
  })
  const expected = {
    foo : 'LED_ZEPPELIN',
    bar : false,
  }

  const result = await fn('LED')
  expect(result).toEqual(expected)
})

test('async with error', async () => {
  const fn = produce({
    foo : async x => {
      await delay(100)
      throw new Error(`${ x }_ZEPPELIN`)
    },
    bar : inputArgument => inputArgument === 5,
  })

  try {
    await fn('LED')
    expect(1).toBe(2)
  } catch (e){
    expect(e.message).toBe('LED_ZEPPELIN')
  }
})

test('sync', async () => {
  const fn = produce({
    foo : x => x + 1,
    bar : inputArgument => inputArgument === 5,
  })
  const expected = {
    foo : 6,
    bar : true,
  }

  const result = fn(5)
  expect(result).toEqual(expected)
})
