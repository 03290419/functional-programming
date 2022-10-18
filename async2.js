console.log(1);
setTimeout(function () {
  console.log(3);
  console.clear();
}, 1000);
console.log(2);
console.clear();
var add = function (a, b, callback) {
  setTimeout(function () {
    callback(a + b);
  }, 1000);
};

var sub = function (a, b, callback) {
  setTimeout(function () {
    callback(a - b);
  }, 1000);
};

var div = function (a, b, callback) {
  setTimeout(function () {
    callback(a / b);
  }, 1000);
};

add(10, 15, function (a) {
  sub(a, 5, function (a) {
    div(a, 10, function (r) {
      console.log(`log: ${r}`);
    });
  });
});

// console.log(div(sub(add(10, 5), 5), 10));

function wrap(func) {
  // 1.함수 받기
  return function () {
    // 2. 함수 리턴하기, 이것이 실행됨
    // 이 스코프에 새 공간이 생김, 나중에 함수를 실행했을 때 이 부분을 거쳐감
    console.log(arguments);
    return func.apply(null, arguments);
  };
}
var add = wrap(function (a, b, callback) {
  setTimeout(function () {
    callback(a + b);
  }, 1000);
});

add(5, 10, function (r) {
  console.log(r);
});
