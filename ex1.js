const db = require('./MOCK_DATA.json');

function countFemale(list) {
    return list.filter(item => item.gender == "Female").length;
}
function countMale(list) {
    return list.filter(item => item.gender == "Male").length;
}
module.exports = { 
    countFemale,
    countMale
};


