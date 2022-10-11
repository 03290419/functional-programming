function add(a, b) {
  return a + b;
}
// console.log(0 && 1);
// console.log(1 && 0);
// console.log([] || {});
// console.log([] && {});
// console.log(([] && {}) || 0);
// console.log(0 || 0 || 0 || 1 || null);
console.log(add(10, -10) || add(10, -10));
console.log(add(10, -10) || add(10, 10));
var v;
console.log((v = add(10, -10)) || (v++ && 20));
console.log((v = add(10, -10)) || (++v && 20));

console.clear();
v = 0;
console.log(v++);
console.log(++v);
