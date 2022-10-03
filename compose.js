const compose = function () {
    var args = arguments;
    var start = args.length - 1;
    return function () {
        var i = start;
        var result = args[start].apply(this, arguments);
        console.log(
            args[0],
            arguments,
            args[0].apply(this, arguments),
            args[1]
        );
        while (i--) {
            console.log(i);
            result = args[i].call(this, result);
        }
        console.log(result);
        return result;
    };
};

var greet = function (name) {
    return 'hi:' + name;
};
var exclaim = function (statement) {
    return statement.toUpperCase() + '!';
};
var welcome = compose(greet, exclaim);
welcome('moe!');
// console.log(welcome('moe!'));
