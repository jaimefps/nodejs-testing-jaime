const getPINs = require('./getpins');

test('gives all possible PIN number combinations if 8 is observed', () => {
	expect(getPINs('8').sort()).toEqual([ '5', '7', '8', '9', '0' ].sort());
});
test('gives all possible PIN number combinations if 11 is observed', () => {
	expect(getPINs('11').sort()).toEqual([ '11', '22', '44', '12', '21', '14', '41', '24', '42' ].sort());
});
test('gives all possible PIN number combinations if 369 is observed', () => {
	expect(getPINs('369').sort()).toEqual(
		[
			'339',
			'366',
			'399',
			'658',
			'636',
			'258',
			'268',
			'669',
			'668',
			'266',
			'369',
			'398',
			'256',
			'296',
			'259',
			'368',
			'638',
			'396',
			'238',
			'356',
			'659',
			'639',
			'666',
			'359',
			'336',
			'299',
			'338',
			'696',
			'269',
			'358',
			'656',
			'698',
			'699',
			'298',
			'236',
			'239'
		].sort()
	);
});
