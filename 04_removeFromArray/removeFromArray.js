const removeFromArray = function(array, element) {
    
    // Declare variable (anonymous function) for new array
    const new_Array = array.filter(function(given) {
        return given !== element;
    });

    // Return new array
    return new_Array;
};

// Do not edit below this line
module.exports = removeFromArray;
