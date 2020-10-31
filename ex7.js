const db = require('./MOCK_DATA.json');

function largestGap(list) {
    let max = 0; 
    list.reduce((acc, current)  => 
    {
        if (Math.abs (acc - current.age) > max && acc != 0 ) {
            max = Math.abs (acc - current.age); 
        }
        return current.age; 

    }, 0);
    
    return max;
}

module.exports = { 
    largestGap
};

//Find the largest age gap between two consecutive people