// Check to see if a string has the same amount of 'x's and 'o's.The method must
//  return a boolean and be case insensitive.The string can contains any char.

function XO(str) {
    var counterO = 0;
    var counterX = 0;
    str = str.toLowerCase();

    for (var i = 0; i <= str.length; i++) {
        switch (true) {
            case str[i] === "x":
                counterX += 1;
                break;
            case str[i] === "o":
                counterO += 1;
                break;
        }
    }
    if (counterX === counterO) {
        return true;
    }
    else return false;
}