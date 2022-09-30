import { users } from './users.js';
import { users2 } from './index_1-3.js';

function find(list, predicate) {
    for (var i = 0, len = list.length; i < len; i++) {
        if (predicate(list[i])) return list[i];
    }
}

console.log(
    find(users2, function (u) {
        return u.getAge() === 25;
    }).getName()
);

console.log(
    find(users, function (u) {
        return u.name.indexOf('P') != -1;
    })
);
console.log(
    find(users, function (u) {
        return u.age == 32 && u.name == 'JM';
    })
);
console.log(
    find(users2, function (u) {
        return u.getAge() < 30;
    }).getName()
);
