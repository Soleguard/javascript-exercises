const reverseString = function(word) {

    // Split word into array of chars
    let split_Word = word.split('');

    // Reverse array
    let reversed_Array = split_Word.reverse();

    // Join array into string
    let joined_String = reversed_Array.join('');

    // Return final result
    return joined_String;

};

// Do not edit below this line
module.exports = reverseString;
