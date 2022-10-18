function _async(func) {
  return function () {
    console.log(arguments[arguments.length++]);
    arguments[arguments.length++] = function (result) {
      _callback(result);
    };
    func.apply(null, arguments);
    var _callback;
    function _async_cb_receiver(callback) {
      // 두 번째 실행의 인자가 할당됨
      _callback = callback;
    }
    return _async_cb_receiver; // 할당받은 callback 을 _callback으로 실행 -> 두번째 괄호로 실행
  };
}

var add = _async(function (a, b, callback) {
  setTimeout(function () {
    callback(a + b);
  }, 1000);
});
add(
  20,
  30
)(function (r) {
  console.log(r);
});
