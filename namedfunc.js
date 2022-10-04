var hi = 1;
var hello = function hi() {
    console.log(hi);
};

hello();
console.log(hi);
console.log(++hi);

hello();
console.log(hello.name == 'hi');
var z1 = function z() {
    console.log(z, 1);
};
var z2 = function z() {
    console.log(z, 2);
};
z1();
z2();
console.log(z1.name == z2.name);

z;
