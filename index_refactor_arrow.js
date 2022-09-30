import { users } from './users.js';

function filter(list, predicate) {
    var new_list = [];
    for (var i = 0, len = list.length; i < len; i++) {
        if (predicate(list[i])) new_list.push(list[i]);
    }
    return new_list;
}
function map(list, iteratee) {
    var new_list = [];
    for (var i = 0, len = list.length; i < len; i++) {
        new_list.push(iteratee(list[i]));
    }
    return new_list;
}
function log_length(value) {
    console.log(value.length);
    return value;
}
console.log(
    log_length(
        map(
            filter(users, (u) => u.age < 30),
            (u) => u.age
        )
    )
);

console.log(
    log_length(
        map(
            filter(users, (u) => u.age >= 30),
            (u) => u.name
        )
    )
);

var under_30 = (u) => u.age < 30;
var over_30 = (u) => u.age >= 30;
console.log(log_length(map(filter(users, under_30), (u) => u.age)));
console.log(log_length(map(filter(users, over_30), (u) => u.name)));

var age = (list) => map(list, (v) => v.age);
var names = (list) => map(list, (v) => v.name);
console.log(log_length(age(filter(users, under_30))));
console.log(log_length(names(filter(users, over_30))));

function bvalues(key) {
    var value = bvalue(key);
    return function (list) {
        return map(list, value);
    };
}
