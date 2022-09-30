import { users } from './users.js';

function findById(list, id) {
    for (var i = 0, len = list.length; i < len; i++) {
        if (list[i].id === id) return list[i];
    }
}
console.log(findById(users, 3));
console.log(findById(users, 5));
function findByName(list, name) {
    for (var i = 0, len = list.length; i < len; i++) {
        if (list[i].name === name) return list[i];
    }
}
console.log(findByName(users, 'BJ'));
console.log(findByName(users, 'JE'));
function findByAge(list, age) {
    for (var i = 0, len = list.length; i < len; i++) {
        if (list[i].age === age) return list[i];
    }
}
console.log(findByAge(users, 28));
console.log(findByAge(users, 25));

function findBy(key, list, val) {
    for (var i = 0, len = list.length; i < len; i++) {
        if (list[i][key] === val) return list[i];
    }
}
console.log(findBy('name', users, 'BJ'));
console.log(findBy('id', users, 2));
console.log(findBy('age', users, 28));
