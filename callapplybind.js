var obj = {
    string: 'zero',
    yell: function () {
        console.log(this.string);
    },
};
var obj2 = {
    string: 'what?',
};
var yell2 = obj.yell.bind(obj2);
yell2();

obj.yell();
obj.yell.call(obj2);

// function example() {
//     console.log(arguments.join());
// }
// example(1, 'string', true);

function example() {
    console.log(Array.prototype.join.call(arguments));
}
example(1, 'string', true);
