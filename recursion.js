function flatten(arr) {
    return (function f(arr, new_arr) {
        // 1.
        arr.forEach(function (v) {
            Array.isArray(v) ? f(v, new_arr) : new_arr.push(v); // 2.
        });
        return new_arr;
    })(arr, []); // 3.
}

console.log(flatten([1, [2], [3, 4]]));
console.log(flatten([1, [2], [[3], 4]]));
console.log(flatten([1, [[2], [[3], [[4], 5]]]]));

function flatten2(arr, new_arr) {
    arr.forEach(function (v) {
        Array.isArray(v) ? flatten2(v, new_arr) : new_arr.push(v);
    });
    return new_arr;
}
flatten2([1, [2], [3, 4]], []); //항상 빈 Array를 추가로 넘겨야 하는 복잡도 증가

function flatten3(arr, new_arr) {
    if (!new_arr) return flatten3(arr, []); // if문이 생김
    arr.forEach(function (v) {
        Array.isArray(v) ? flatten3(v, new_arr) : new_arr.push(v);
    });
    return new_arr;
}
