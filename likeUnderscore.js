export const map = function (list, iteratee) {
    var new_list = [];
    for (var i = 0, len = list.length; i < len; i++) {
        new_list.push(iteratee(list[i], i, list));
    }
    return new_list;
};
export const filter = function (list, predicate) {
    var new_list = [];
    for (var i = 0, len = list.length; i < len; i++) {
        if (predicate(list[i], i, list)) new_list.push(list[i]);
    }
    return new_list;
};
export const find = function (list, predicate) {
    for (var i = 0, len = list.length; i < len; i++) {
        if (predicate(list[i], i, list)) return list[i];
    }
};
export const findIndex = function (list, predicate) {
    for (var i = 0, len = list.length; i < len; i++) {
        if (predicate(list[i], i, list)) return i;
    }
    return -1;
};

console.log(
    filter([1, 2, 3, 4], function (val, idx) {
        return idx > 1;
    })
);
console.log(
    filter([1, 2, 3, 4], function (val, idx) {
        return idx % 2 == 0;
    })
);

console.clear();
const compose = function () {
    var args = arguments;
    var start = args.length - 1;
    return function () {
        var i = start;
        var result = args[start].apply(this, arguments);
        while (i--) result = args[i].call(this, result);
        return result;
    };
};

var greet = function (name) {
    return 'hi:' + name;
};
var exclaim = function (statement) {
    return statement.toUpperCase() + '!';
};
var welcome = compose(greet, exclaim);
console.log(welcome('moe!'));
