import { users } from './users.js';

function findBy(key, list, val) {
    for (var i = 0, len = list.length; i < len; i++) {
        if (list[i][key] === val) return list[i];
    }
}

function User(id, name, age) {
    this.getId = function () {
        return id;
    };
    this.getName = function () {
        return name;
    };
    this.getAge = function () {
        return age;
    };
}

var users2 = [
    new User(1, 'ID', 32),
    new User(2, 'HA', 25),
    new User(3, 'BJ', 32),
    new User(4, 'PJ', 28),
    new User(5, 'JE', 27),
    new User(6, 'JM', 32),
    new User(7, 'HI', 24),
];
console.log(findBy('age', users2, 25));
