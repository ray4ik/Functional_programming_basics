const db = require('./MOCK_DATA.json');

function older35(list) {
    return list.filter(item => item.age > 35);
}

module.exports = { 
    older35
};