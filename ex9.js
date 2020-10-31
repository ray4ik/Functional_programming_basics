const db = require('./MOCK_DATA.json');

function nameStartsWithL(list) {
    return list.filter(item => item.first_name[0] == 'L').length;
}

module.exports = { 
    nameStartsWithL
};

//9. Count the number of people who starts their first name with the letter L.