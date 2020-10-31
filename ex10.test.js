const db = require('./MDTEST.json');
const ex1 = require('./ex10');

test(' the average age of everyone who is between the ages of 35 and 80 and their last name starts with the letter D', () => {
    expect(ex1.avg3580D(db)).toBe(60.5);
});