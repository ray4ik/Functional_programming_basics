const db = require('./MDTEST.json');
const ex1 = require('./ex5');

test('percentage of people who are older than 50', () => {
    expect(ex1.persPeopleOlder50(db)).toBe(4/7);
});

//5. Calculate the percentage of people who are older than 50.