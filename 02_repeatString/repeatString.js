const repeatString = function(word, number) {
    
    let repeated_String = '';

    // Loop through given number
    for (let i = 0; i < number; i++)
    {
        repeated_String += word;
    }

    return repeated_String;

};

// Do not edit below this line
module.exports = repeatString;
