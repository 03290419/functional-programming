import _ from 'underscore';
_.each([1, 2, 3], function (val, idx, list) {
    console.log(val, idx, list);
});

[1, 2, 3].forEach(function (val, idx, list) {
    console.log(val, idx, list);
});
_.each({ a: 1, b: 2 }, function (val, key, obj) {
    console.log(val, key, obj);
});
