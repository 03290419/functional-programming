import { filter } from './likeUnderscore.js';

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
