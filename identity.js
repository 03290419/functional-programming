import _ from 'underscore';
import { filter, find, findIndex } from './likeUnderscore.js';

const identity = function (v) {
    return v;
};
var a = 10;
console.log(identity(a));

console.log(filter([true, 0, 10, 'a', false, null], identity));

const falsy = function (v) {
    return !v;
};
const truthy = function (v) {
    return !!v;
};

const some = function (list) {
    return !!find(list, identity);
};
const every = function (list) {
    return beg(-1)(findIndex(list, not));
};

console.clear();
console.log(some([0, null, 2]));
console.log(some([0, null, false]));

console.log(every([0, null, 2]));
console.log(every([{}, true, 2]));

function not(v) {
    return !v;
}
function beg(a) {
    return function (b) {
        return a === b;
    };
}
