const db = require('./MOCK_DATA.json');

function increment1yearKS(list) {
    return list.map( person  => {
        if (person.first_name.startsWith('K') && person.last_name.endsWith('s')) {
            person.age++;
            return person;
        }
        else {
            return person;
        }
    }); 
}

module.exports = { 
    increment1yearKS
};

// Increment the age with 1 year for everyone that has a first name that starts with letter K and last name that ends with letter s. 
