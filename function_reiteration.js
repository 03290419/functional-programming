function log_length(value) {
    console.log(value.length);
    return value;
}
console.log(
    log_length(
        map(
            filter(users, function (user) {
                return user.age < 30;
            }),
            function (user) {
                return user.age;
            }
        )
    )
);

console.log(
    log_length(
        map(
            filter(users, function (user) {
                return user.age >= 30;
            }),
            function (user) {
                return user.name;
            }
        )
    )
);
