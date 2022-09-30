var users = [
    { id: 1, name: 'ID', age: 32 },
    { id: 2, name: 'HA', age: 25 },
    { id: 3, name: 'BJ', age: 32 },
    { id: 4, name: 'PJ', age: 28 },
    { id: 5, name: 'JE', age: 27 },
    { id: 6, name: 'JM', age: 32 },
    { id: 7, name: 'HI', age: 24 },
];
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
console.log(log_length(ages(filter(users, under_30))));
console.log(log_length(ages(filter(users, over_30))));

function bvalues(key) {
    var value = bvalue(key);
    return function (list) {
        return map(list, value);
    };
}
