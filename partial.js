import _, { partial } from 'underscore';
function abc(a, b, c) {
    console.log(a, b, c);
}
var ac = _.partial(abc, _, 'b'); //a가 올 자리를 비워 두었고 c자리는 생략
ac('a', 'c');
var b = _.partial(abc, 'a', _, 'c'); //b가 올 자리릘 비워 둠
b('b');

var ab = _.partial(abc, _, _, 'c'); // a,b가 올 자리를 비워 둠
ab('a', 'b');

function add() {
    var result = 0;
    for (var i = 0; i < arguments.length; i++) {
        result += arguments[i];
    }
    return result;
}

var add2 = _.partial(add, _, 2);
add2(1, 3, 4, 5);
add2(3, 5);

function equal(a, b) {
    return a === b;
}
var isUndefined = _.partial(equal, undefined); // a 자리에 undefined 를 적용해 둠
isUndefined(undefined); // b 자리에 undefined가 들어와 true 를 리턴함

var bj = {
    name: 'BJ',
    greet: _.partial(
        function (a, b) {
            return a + this.name + b;
        },
        '저는',
        '입니다.'
    ),
};
bj.greet();
bj.greet.call({ name: 'HA' });
var greetPj = bj.greet.bind({ name: 'PJ' }); // bind는 새로운 함수를 리턴함
greetPj();

bj.greet(); // 여전히 잘 보존 됨
//저는 BJ입니다.
