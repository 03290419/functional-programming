function addMaker(a) {
    return function (b) {
        return a + b;
    };
}
function bvalue(key) {
    return function (obj) {
        return obj[key];
    };
}
bvalue('a')({ a: 'hi', b: 'hello' });
console.log(bvalue('a')({ a: 'hi', b: 'hello' }));

console.log(
    log_length(
        map(
            filter(users, function (user) {
                return user.age < 30;
            }),
            bvalue('age')
        )
    )
);

console.log(
    log_length(
        map(
            filter(users, function (user) {
                return user.age >= 30;
            }),
            bvalue('name')
        )
    )
);
