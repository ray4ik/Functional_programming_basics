const db = require('./MDTEST.json');
const ex1 = require('./ex11');

test('Increment the age with 1 year for everyone that has a first name that starts with letter K and last name that ends with letter', () => {
    expect(ex1.increment1yearKS(db)[0].age).toBe(88);
});