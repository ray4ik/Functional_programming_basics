const db = require('./MOCK_DATA.json');

function avgAge(list) {
    return list.reduce((accumulator, currentValue) => accumulator + currentValue.age, 0) / list.length;
}

module.exports = { 
    avgAge
};