Function.prototype.partial = function () {
    var fn = this,
        args = Array.prototype.slice.call(arguments); //1.
    return function () {
        //2.
        var arg = 0;
        for (
            var i = 0;
            i < args.length && arg < arguments.length;
            i++ //5.
        )
            if (args[i] === undefined) args[i] = arguments[arg++]; //6.
        return fn.apply(this, args);
    };
};
function abc(a, b, c) {
    console.log(a, b, c);
}
var ac = abc.partial(undefined, 'b', undefined); //3.
ac('a', 'c'); //4.

var ac2 = abc.partial(undefined, 'b');
ac('a', 'c');

function add() {
    var result = 0;
    for (var i = 0; i < arguments.length; i++) {
        result += arguments[i];
    }
    return result;
}

add(1, 2, 3, 4, 5);

var add2 = add.partial(undefined, 2);
console.log(add2(1, 3, 4, 5));

var add3 = add.partial(undefined, undefined, 3, undefined, undefined);
console.log(add3(1, 2, 4, 5));
console.log(add3(50, 50, 50, 50)); // 버그
console.log(add3(100, 100, 100, 100)); // 버그
