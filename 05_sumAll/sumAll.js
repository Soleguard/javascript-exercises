const sumAll = function(start, stop) {

    let sum;
    let larger_Number;
    let smaller_Number;

    // Check for non-number parameters
    if (!(typeof start === "number") || !(typeof stop === "number"))
    {
        return 'ERROR';
    }

    // Check for negative numbers
    else if (start < 0 || stop < 0)
    {
        return 'ERROR';
    }

    // Assign larger and smaller number
    if (stop > start)
    {
        larger_Number = stop;
        smaller_Number = start;
    }
 
    else
    {
        larger_Number = start;
        smaller_Number = stop;
    }

    // Loop from larger to smaller number
    for (let i = larger_Number; i >= smaller_Number; i--) {
        // Sum i
        sum += i;
    }

    // Return sum
    return sum;

};

// Do not edit below this line
module.exports = sumAll;
