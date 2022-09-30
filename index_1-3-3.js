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

function object(key, val) {
    var obj = {};
    obj[key] = val;
    return obj;
}
function match(obj, obj2) {
    for (var key in obj2) {
        if (obj[key] !== obj2[key]) return false;
    }
    return true;
}
function bmatch(obj2, val) {
    if (arguments.length == 2) obj2 = object(obj2, val);
    return function (obj) {
        return match(obj, obj2);
    };
}
console.log(
    match(
        find(
            users,
            bmatch('id', 3),
            find(users, bmatch(users, bmatch('name', 'BJ')))
        )
    )
);
console.log(
    find(users, function (u) {
        return u.age === 32 && u.name === 'JM';
    })
);
console.log(find(users, bmatch({ name: 'JM', age: 32 })));
