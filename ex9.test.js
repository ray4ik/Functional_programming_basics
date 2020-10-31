const db = require('./MDTEST.json');
const ex1 = require('./ex9');

test('number of people who starts their first name with the letter L.', () => {
    expect(ex1.nameStartsWithL(db)).toBe(2);
});

//Find the largest age gap between two consecutive people