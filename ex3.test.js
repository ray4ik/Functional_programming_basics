const db = require('./MDTEST2.json');
const ex1 = require('./ex3');

test('totalAge should count correct sum of age', () => {
    expect(ex1.totalAge(db)).toBe(62);
});