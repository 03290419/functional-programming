function f1() {
    return (function (a) {
        console.log(a);
    })(1);
}
f1();

!(function (a) {
    console.log(a);
})(1);

true &&
    (function (a) {
        console.log(a);
    })(1);

1
    ? (function (a) {
          console.log(a);
      })(1)
    : 5;

0,
    (function (a) {
        console.log(a);
    })(1);

var b = (function (a) {
    console.log(a);
})(1);

function f2() {}
f2(
    (function (a) {
        console.log(a);
    })(1)
);

var f3 = (function c(a) {
    console.log(a);
})(1);

new (function () {
    console.log(1);
})();

var pj = new (function () {
    this.name = 'PJ';
    this.age = 28;
    this.constructor.prototype.hi = function () {
        console.log('hi');
    };
})();
console.log(pj);
pj.hi();

var a = function (a) {
    console.log(this, a);
}.call([1], 1);
