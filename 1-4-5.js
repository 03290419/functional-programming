import { map, filter, find, findIndex, some, every } from './likeUnderscore.js';
function add(a, b) {
    return a + b;
}
function sub(a, b) {
    return a - b;
}
function constant(val) {
    return function () {
        return val;
    };
}
var always10 = constant(10);
always10();
always10();
always10();

function callWith(val1) {
    return function (val2, func) {
        return func(val1, val2);
    };
}
// var callWith10 = callWith(10);
// console.log(callWith10(20, add));
// var callWith5 = callWith(5);
// console.log(callWith5(10, sub));

callWith(30)(20, add);
callWith(20)(20, sub);

console.clear();
console.log(
    callWith([1, 2, 3])(function (v) {
        return v * 10;
    }, map)
);

const get = function (list, idx) {
    return list[idx];
};
var callWithUsers = callWith([
    { id: 2, name: 'HA', age: 25 },
    { id: 4, name: 'PJ', age: 28 },
    { id: 5, name: 'JE', age: 27 },
]);

console.log(callWithUsers(2, get));
console.log(
    callWithUsers(function (user) {
        return user.age > 25;
    }, find)
);
console.log(
    callWithUsers(function (user) {
        return user.age > 25;
    }, filter)
);

console.log(
    callWithUsers(function (user) {
        return user.age > 25;
    }, some)
);

console.log(
    callWithUsers(function (user) {
        return user.age > 25;
    }, every)
);
