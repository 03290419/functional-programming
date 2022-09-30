function addMaker(a) {
    return function (b) {
        return a + b;
    };
}

addMaker(10)(5);

var add5 = addMaker(5);
add5(3);
add5(4);

console.log(add5(3), add5(4));
