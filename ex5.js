const db = require('./MOCK_DATA.json');

function persPeopleOlder50(list) {
    return (list.filter(item => item.age > 50)).length / list.length ;
}

module.exports = { 
    persPeopleOlder50
};

//