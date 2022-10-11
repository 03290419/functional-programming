function test(a, b, c) {
  console.log("a,b,c:", a, b, c);
  console.log("this:", this);
  console.log("arguments", arguments);
}
test.call(undefined, 1, 2, 3);
test.call(null, 1, 2, 3);
test.call(void 0, 1, 2, 3);

console.clear();
const animals = ["ant", "bison", "camel", "duck", "elephant"];
console.log(animals.slice(2, 4));
console.clear();

function add(a, b) {
  return a + b;
}
if (add(1, 2)) console.log("hi1");
var a;
if ((a = add(1, 2))) console.log(a);
if (
  (function () {
    return true;
  })()
)
  console.log("hi");
