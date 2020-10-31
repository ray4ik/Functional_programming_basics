const db = require('./MOCK_DATA.json');

function totalAge(list) {
    return list.reduce((accumulator, currentValue) => accumulator + currentValue.age, 0);
}

module.exports = { 
    totalAge
};