function myNumber (length, number, dash) {
    number = number + "";
    if (number.length < length) {
        for (var j = number.length; j < length; j += 1) {
            number = dash + number;
        }
    }

    return number;
}