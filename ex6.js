const db = require('./MOCK_DATA.json');

function personYounger64Avg(list) {
    arrPersonYounger64 = list.filter(item => item.age < 64);
    avg = arrPersonYounger64.reduce((a, c) => a + c.age, 0) / arrPersonYounger64.length;
    return avg;
}

module.exports = { 
    personYounger64Avg
};