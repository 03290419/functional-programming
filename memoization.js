import { map } from './likeUnderscore.js';
function L(str) {
    var splitted = str.split('=>');
    return new Function(splitted[0], 'return(' + splitted[1] + ');');
}
//메모이제이션 기법
function L2(str) {
    if (L2[str]) return L2[str]; // 1. 혹시 이미 같은 str 로 만든 함수가 있다면 즉시 리턴
    var splitted = str.split('=>');
    return (L2[str] = new Function(
        splitted[0],
        'return (' + splitted[1] + ');'
    ));
}
console.time('6');
var arr = Array(10000);
map(arr, function (v, i) {
    return L2('v, i => i * 2')(v, i);
});
console.timeEnd('6');
