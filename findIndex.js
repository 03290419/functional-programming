import { users } from './users.js';
import { bmatch } from './bmatch.js';

function findIndex(list, predicate) {
    for (var i = 0, len = list.length; i < len; i++) {
        if (predicate(list[i])) return i;
    }
    return -1;
}

console.log(findIndex(users, bmatch({ name: 'JM', age: 32 })));
console.log(findIndex(users, bmatch({ age: 36 })));
