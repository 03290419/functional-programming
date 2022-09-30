var ages = map(
    filter(users, function (user) {
        return user.age < 30;
    }),
    function (user) {
        return user.age;
    }
);
console.log(ages.length);
console.log(ages);

var names = map(
    filter(users, function (user) {
        return user.age >= 30;
    }),
    function (user) {
        return user.name;
    }
);
console.log(names.length);
console.log(names);
