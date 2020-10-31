const db = require('./MDTEST2.json');
const ex1 = require('./ex2');

test('older35 should count correct number of person who is older than 35', () => {
    expect(ex1.older35(db)).toStrictEqual([{"id":1000,"first_name":"Antony","last_name":"Fallon","email":"afallonrr@aol.com","gender":"Male","ip_address":"87.211.133.140","age":36}]);
});

