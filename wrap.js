function wrap(func) {
  // 1.함수 받기
  return function () {
    console.log("2");
    // 2. 함수 리턴하기, 이것이 실행됨
    // 이 스코프에 새 공간이 생김, 나중에 함수를 실행했을 때 이 부분을 거쳐감
    return func.apply(null, arguments); // 매개 변수인 함수를 실행하면서 arguments 를 그대로 wrap에 넣어주는 역할 (wrap은 함수만 받을 수 있음) -> 이게 핵심인듯
  };
}
var add = wrap(function (a, b, callback) {
  setTimeout(function () {
    callback(a + b);
    console.log("settimeout");
  }, 1000);
});

add(5, 10, function (r) {
  console.log(r);
});
