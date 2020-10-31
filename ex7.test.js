const db = require('./MDTEST.json');
const ex1 = require('./ex7');

test('largest age gap between two consecutive people', () => {
    expect(ex1.largestGap(db)).toBe(38);
});

//Find the largest age gap between two consecutive people