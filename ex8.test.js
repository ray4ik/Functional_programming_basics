const db = require('./MDTEST.json');
const ex1 = require('./ex8');

test('Count the number of males that are younger than 43 but older than 22', () => {
    expect(ex1.male2243(db)).toBe(1);
});

//Find the largest age gap between two consecutive people