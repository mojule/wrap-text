import * as assert from 'assert'
import { wrap } from '..';

describe( 'text wrap', () => {
  it( 'wraps monospaced text', () => {
    const text = `
      The quick brown fox jumps over the lazy dog.

      But why? Why would it do such a thing? Seems silly to me!

      123456789 1234567 123
      123456789 1234567 1
      123456789 1234567 12
    `

    const expect = [
      'The quick brown fox',
      'jumps over the lazy',
      'dog.',
      '',
      'But why? Why would',
      'it do such a thing?',
      'Seems silly to me!',
      '',
      '123456789 1234567',
      '123',
      '123456789 1234567 1',
      '123456789 1234567 12'
    ]

    const wrapped = wrap( text, 20 )

    assert.deepEqual( wrapped, expect )
  })

  it( 'wraps monospaced text with default width', () => {
    const text = `
      The quick brown fox jumps over the lazy dog. But why? Why would it do such a thing? Seems silly to me!
    `

    const expect = [
      'The quick brown fox jumps over the lazy dog. But why? Why would it do such a',
      'thing? Seems silly to me!'
    ]

    const wrapped = wrap( text )

    assert.deepEqual( wrapped, expect )
  })

  it( 'leaves very long words alone', () => {
    const text = `
      The quick brown fox jumps over the lazy dog.

      ButWhy?WhyWouldItDoSuchAThing?

      123456789 1234567 123
    `

    const expect = [
      'The quick brown fox',
      'jumps over the lazy',
      'dog.',
      '',
      'ButWhy?WhyWouldItDoSuchAThing?',
      '',
      '123456789 1234567',
      '123'
    ]

    const wrapped = wrap( text, 20 )

    assert.deepEqual( wrapped, expect )
  })
})
