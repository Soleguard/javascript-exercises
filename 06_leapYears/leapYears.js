const leapYears = function(year) {

    // Determine if year is divisible by 100 and not divisible by 400
    if (year % 100 == 0 && !(year % 400 == 0))
    {
        return false;
    }

    // Determine if value is divisible by 4
    else if (year % 4 == 0)
    {
        return true;
    }

    else
    {
        return false;
    }

};

// Do not edit below this line
module.exports = leapYears;
