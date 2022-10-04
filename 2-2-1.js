// console.log(add1);
// console.log(add2);

// function add1(a, b) {
//     return a + b;
// }
// var add2 = function (a, b) {
//     return a + b;
// };

function add(a, b) {
    return valid() ? a + b : new Error();
    function valid() {
        return Number.isInteger(a) && Number.isInteger(b);
    }
}
console.log(add(10, 5));
console.log(add(10, 'a'));
