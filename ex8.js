const db = require('./MOCK_DATA.json');

function male2243(list) {
    
    return list.filter(item => (item.age > 22)  && (item.age < 43)  && (item.gender === "Male")).length;
}

module.exports = { 
    male2243
};

//8. Count the number of males that are younger than 43 but older than 22. filter . length