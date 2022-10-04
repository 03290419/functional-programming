import { map } from './likeUnderscore.js';

var a = eval('10 + 5');
console.log(a);

var add = new Function('a, b', 'return a + b');
console.log(add(10, 5));

function L(str) {
    var splitted = str.split('=>');
    return new Function(splitted[0], 'return (' + splitted[1] + ');');
}

console.log(L('n => n * 10')(10));
console.log(L('n => n * 10')(20));
console.log(L('n => n * 10')(30));

console.log(L('a, b => a + b')(10, 20));
console.log(L('a, b => a + b')(10, 5));

console.clear();
console.time('익명함수');
for (var i = 0; i < 10000; i++) {
    (function (v) {
        return v;
    })(i);
}
console.timeEnd('익명함수');
console.time('new Function');
for (var i = 0; i < 10000; i++) {
    L('v => v')(i);
}
console.timeEnd('new Function');
console.clear();
console.time('1');
var arr = Array(10000);
map(arr, function (v, i) {
    return i * 2;
});
console.timeEnd('1');
console.time('2');
var arr = Array(10000);
map(arr, L('v, i => i * 2'));
console.timeEnd('2');

console.clear();
console.time('3');
var arr = Array(10000);
map(arr, eval("L('v, i => i * 2')"));
console.timeEnd('3');

console.time('4');
var arr = Array(10000);
map(arr, function (v, i) {
    return (function (v, i) {
        // 안에서 익명 함수를 한 번 더 만들어 즉시 실행
        return i + 2;
    })(v, i);
});
console.timeEnd('4');
console.time('5');
var arr = Array(10000);
map(arr, function (v, i) {
    return L('v, i => i * 2')(v, i); // 안에서 문자열 화살표 함수로 함수를 만들어 즉시 실행
});
console.timeEnd('5');
