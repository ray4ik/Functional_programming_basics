const db = require('./MDTEST.json');
const ex1 = require('./ex6');

test('the average age of everyone who is younger than 64.', () => {
    expect(ex1.personYounger64Avg(db)).toBe(171/4);
});

//6. Calculate the average age of everyone who is younger than 64.