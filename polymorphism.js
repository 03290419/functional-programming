import { users } from './users.js';
import { users2 } from './index_1-3.js';

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

console.log(
    map(
        filter(users, function (u) {
            return u.age >= 30;
        }),
        function (u) {
            return u.name;
        }
    )
);

console.log(
    map(
        filter(users2, function (u) {
            return u.getAge() > 30;
        }),
        function (u) {
            return u.getName();
        }
    )
);
