const db = require('./MOCK_DATA.json');

function avg3580D(list) {
    filtered = list.filter(item => (item.last_name[0] === 'D') && (item.age >= 35) && (item.age <= 80));
    if (filtered.length != 0) {
        return filtered.reduce((acc, cVal) => acc + cVal.age, 0) / filtered.length;  
    }
    else {
    return 0;
    }
}

module.exports = { 
    avg3580D
};

//Count the average age of everyone who is between the ages of 35 and 80 and their last name starts with the letter D
