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
export const compose = function () {
    var args = arguments;
    var start = args.length - 1;
    return function () {
        var i = start;
        var result = args[start].apply(this, arguments);
        while (i--) result = args[i].call(this, result);
        return result;
    };
};

export const some = compose(not, not, positive);
export const every = compose(beg(-1), negativeIndex);

function not(v) {
    return !v;
}
function beg(a) {
    return function (b) {
        return a === b;
    };
}
function positive(list) {
    return find(list, identity);
}
function negativeIndex(list) {
    return findIndex(list, not);
}
const identity = function (v) {
    return v;
};
