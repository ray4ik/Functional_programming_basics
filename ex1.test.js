const db = require('./MDTEST.json');
const ex1 = require('./ex1');

test('femalesCount should count correct number of females', () => {
    expect(ex1.countFemale(db)).toBe(3);
});

test('femalesCount should count correct number of males', () => {
    expect(ex1.countMale(db)).toBe(4);
});
