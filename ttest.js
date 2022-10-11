function _async() {
  return function () {
    console.log("1");
    var _async_cb_receiver = function () {
      console.log("2");
    };
    return _async_cb_receiver;
  };
}
_async()()();
