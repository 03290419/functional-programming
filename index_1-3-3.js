import { users } from './users.js';

function find(list, predicate) {
    for (var i = 0, len = list.length; i < len; i++) {
        if (predicate(list[i])) return list[i];
    }
}

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

function bmatch1(key, val) {
    return function (obj) {
        return obj[key] === val;
    };
}
function object(key, val) {
    var obj = {};
    obj[key] = val;
    return obj;
}

console.log(filter(users, bmatch1('age', 32)));
console.log(map(users, bmatch1('age', 32)));
