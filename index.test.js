const romanize = require('./index.js')

describe('validator', () => {
  const INVALID = [
    undefined, null, 0, 123, "", "0", "123", "ABC", [], {}, () => {}, "IIII", "IIIV", "IVV"
  ]

  const VALID = [
    "I", "III", "VII", "MMXXI", "i", "mmxxi"
  ]

  INVALID.forEach(VAR => {
    test(`expect "${VAR}" to be invalid`, () => {
      expect(!romanize.validroman(VAR))
    })
  });

  VALID.forEach(VAR => {
    test(`expect "${VAR}" to be valid`, () => {
      expect(romanize.validroman(VAR))
    })
  });
})


describe('romanize', () => {
  test('expect 1 in roman to be "I"', () => {
    expect(romanize.romanize(1)).toBe("I")
  })
})
