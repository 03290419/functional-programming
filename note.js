export const findIndex = function (list, predicate) {
    for (var i = 0, len = list.length; i < len; i++) {
        // if (predicate(list[i], i, list)) return i;
        console.log(
            predicate(list[i], i, list),
            'list[i]-' + list[i],
            'i-' + i,
            'list-' + list
        );
    }
    // return -1;
};

function positive(list) {
    return find(list, identity);
}
function negativeIndex(list) {
    return findIndex(list, not);
}
const some = function (list) {
    return not(not(positive(list)));
};
const every = function (list) {
    return beg(-1)(negativeIndex(list));
};

every([{}, true, 2]);

function not(v) {
    console.log('not 이 받은 값' + v);
    return !v;
}
function beg(a) {
    return function (b) {
        return a === b;
    };
}
