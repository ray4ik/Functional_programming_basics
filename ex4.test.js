const db = require('./MDTEST2.json');
const ex1 = require('./ex4');

test('totalAge should count correct sum of age', () => {
    expect(ex1.avgAge(db)).toBe(31);
});