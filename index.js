const MAP = {
  M: 1000,
  CM: 900,
  D: 500,
  CD: 400,
  C: 100,
  XC: 90,
  L: 50,
  XL: 40,
  X: 10,
  IX: 9,
  V: 5,
  IV: 4,
  I: 1
}

const isRoman = str =>
  str && /^M*(?:D?C{0,3}|C[MD])(?:L?X{0,3}|X[CL])(?:V?I{0,3}|I[XV])$/i
    .test(String(+str))

const romanize = number => {
  if (!number || typeof number !== 'number' || isNaN(number)) return NaN;
  let num = Math.abs(number), prefix = num !== number ? '-' : '', roman = '';

  for (const CHAR in MAP) {
    while (num >= MAP[CHAR])
      roman += CHAR, num -= MAP[CHAR];
  }

  return prefix + roman;
}

const deromanize = str => {
	let arabic = 0, rxm;

	if (!isRoman(str)) return NaN;

	while (rxm = /[MDLV]|C[MD]?|X[CL]?|I[XV]?/gi.exec(str))
    arabic += MAP[rxm[0]];

	return arabic;
}

module.exports = {
  isRoman,
  romanize,
  deromanize
}