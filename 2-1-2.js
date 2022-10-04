var obj = { a: 1, b: 2 }; //1.
obj.c = 3;
obj['d'] = 4; //2.
var e = 'e';
obj[e] = 5;
function f() {
    return 'f';
}
obj[f()] = 6;
console.log(obj);

var obj2 = { ' a a a ': 1 };
obj2[' b b b '] = 2;
console.log(obj2);

var obj3 = { 'margin-top': 5 };
obj3['padding-bottom'] = 20;
console.log(obj3);

var obj4 = { 1: 20 };
obj4[2] = 20;
console.log(obj4);

// var obj5 = {(true ? "a": "b" ): 1} error
var obj5 = { [true ? 'a' : 'b']: 1 };
console.log(obj5);
var obj6 = {};
obj6[true ? 'a' : 'b'] = 1;
console.log(obj6);
