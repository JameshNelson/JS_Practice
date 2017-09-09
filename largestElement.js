//Write a program that outputs the top n elements from a list.

function largest(n, xs) {
    var arr = [];
    var index = 0;

    for (var i = 0; i < n; i++) {
        arr.unshift(Math.max.apply(null, xs))
        index = xs.indexOf(Math.max.apply(null, xs));
        xs.splice(index, 1);

    }
    return arr;
}