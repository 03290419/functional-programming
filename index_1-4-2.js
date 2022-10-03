var a = 10;
var b = 20;
function f1() {
    return a + b;
}
f1();

function f2() {
    var a = 10;
    var b = 20;
    function f3(c, d) {
        return c + d;
    }
    return f3;
}
var f4 = f2();
f4(5, 7);

function f4() {
    var a = 10;
    var b = 20;
    function f5() {
        return a + b;
    }
    return f5();
}
f4();

function f6() {
    var a = 10;
    function f7(b) {
        return a + b;
    }
    return f7;
}
var f8 = f6();
f8(20);
f8(10);

function f9() {
    var a = 10;
    var f10 = function (c) {
        return a + b + c;
    };
    var b = 20;
    return f10;
}
var f11 = f9();
f11(30);
