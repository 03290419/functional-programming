function test(a, b, c) {
  console.log("a,b,c:", a, b, c);
  console.log("this:", this);
  console.log("arguments", arguments);
}

function test2(a, b) {
  b = 10;
  console.log(arguments);
}

test2(1);
test2(1, 2);
var obj1 = {
  0: 1,
  1: 2,
};

console.log(obj1);

var a = obj1[0];
var b = obj1[1];
b = 10;

console.log(obj1);
console.log(obj1[1]);
console.log(b);

console.clear();
function test3(a, b) {
  arguments[1] = 10;
  console.log(b);
}

test3(1, 2);

test(10);

test(10, undefined);

test(10, 20, 30);

console.clear();

var o1 = { name: "obj" };
o1.test = test;
o1.test(3, 2, 1);

var a1 = [1, 2, 3];
a1.test = test;
a1.test(3, 3, 3);

console.clear();
console.log(o1);
var o1_test = o1.test;
o1_test(5, 6, 7);

console.clear();
a1.test(8, 9, 10);
a1["test"](8, 9, 10);

console.log(test == o1.test && o1.test == a1.test);

console.clear();
