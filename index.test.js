const romanize = require('./index.js')

describe('validate non roman values', () => {
  const INVALID = [
    undefined, null, 0, 123, "", "0", "123", "ABC", new Array(), {}, () => {}, "IIII", "IIIV", "IVV"
  ]

  INVALID.forEach((VAR, I) => {
    test(`N°${String(I).padStart(2, "0")} is NOT roman: "${VAR}"`, () => {
      expect(!romanize.isRoman(VAR))
    })
  });
})
  
describe('validate roman numbers', () => {
  const VALID = [
    "I", "i", "III", "VII", "mmmm", "LLLII", "lllII", "MMXXI", "mmxxi", "cdMI", "MLI"
  ]
  VALID.forEach((VAR, I) => {
    test(`N°${String(I).padStart(2, "0")} is roman: "${VAR}"`, () => {
      expect(romanize.isRoman(VAR))
    })
  });
})

describe('romanize arabic numbers', () => {
  const ARABIC = [
    [1, "I"],
    [2, "II"],
    [5, "V"],
    [9, "IX"],
    [30, "XXX"],
    [69, "LXIX"],
    [99, "XCIX"],
    [210, "CCX"],
    [420, "CDXX"],
    [2021, "MMXXI"],
    [3999, "MMMCMXCIX"],
    [-123, "-CXXIII"],
  ]

  const FAILSAFE = [
    [null, NaN],
    [undefined, NaN],
    [0, NaN],
    [false, NaN],
    [true, NaN],
    [new Array(), NaN],
    [() => {}, NaN],
    [new Object(), NaN],
    [new Date(), NaN],
    [new Set(), NaN],
  ]

  ARABIC.forEach((VAR, I) => {
    test(`N°${String(I + 1).padStart(2, "0")} ${VAR[0]} in roman is "${VAR[1]}"`, () => {
      expect(romanize.romanize(VAR[0])).toBe(VAR[1])
    })
  });

  FAILSAFE.forEach((VAR, I) => {
    test(`N°${String(I + 1 + ARABIC.length).padStart(2, "0")} ${VAR[1]} returned for ${VAR[0]}`, () => {
      expect(romanize.romanize(VAR[0])).toBe(VAR[1])
    })
  });
})

describe('deromanize roman numbers', () => {
  const ROMAN = [
    [1, "I"],
    [2, "II"],
    [5, "V"],
    [9, "IX"],
    [30, "XXX"],
    [69, "LXIX"],
    [99, "XCIX"],
    [210, "CCX"],
    [420, "CDXX"],
    [2021, "MMXXI"],
    [3999, "MMMCMXCIX"],
    [-123, "-CXXIII"],
  ]

  const FAILSAFE = [
    [null, NaN],
    [undefined, NaN],
    [0, NaN],
    [false, NaN],
    [true, NaN],
    [new Array(), NaN],
    [() => {}, NaN],
    [new Object(), NaN],
    [new Date(), NaN],
    [new Set(), NaN],
  ]

  ROMAN.forEach((VAR, I) => {
    test(`N°${String(I + 1).padStart(2, "0")} ${VAR[0]} in arabic is "${VAR[1]}"`, () => {
      expect(romanize.romanize(VAR[0])).toBe(VAR[1])
    })
  });

  FAILSAFE.forEach((VAR, I) => {
    test(`N°${String(I + 1 + ROMAN.length).padStart(2, "0")} ${VAR[1]} returned for ${VAR[0]}`, () => {
      expect(romanize.romanize(VAR[0])).toBe(VAR[1])
    })
  });
})