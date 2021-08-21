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

const validroman = str =>
  str && /^M*(?:D?C{0,3}|C[MD])(?:L?X{0,3}|X[CL])(?:V?I{0,3}|I[XV])$/i
    .test(String(+str))

const romanize = num => {
  if (isNaN(num)) return NaN;
  
  let roman = '';

  for (const CHAR in MAP) {
    while (num >= MAP[CHAR])
      roman += CHAR, num -= MAP[CHAR];
  }

  return roman;
}

const deromanize = str => {
	let arabic = 0, rxm;

	if (!validroman(str)) return NaN;

	while (rxm = /[MDLV]|C[MD]?|X[CL]?|I[XV]?/gi.exec(str))
    arabic += MAP[rxm[0]];

	return arabic;
}

module.exports = {
  validroman,
  romanize,
  deromanize
}