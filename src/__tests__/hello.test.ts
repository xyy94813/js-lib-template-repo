import { describe, expect, test } from 'vitest'
import hello from '../hello'

describe('hello', () => {
  test('with username', () => {
    expect(hello('roxom')).toBe('hello, roxom')
  })
})
