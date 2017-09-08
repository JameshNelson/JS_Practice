//Very simple, given a number, find its opposite.
function opposite(number) {
    if (number < 0) {
        return Math.abs(number);
    }
    else return -Math.abs(number);
}