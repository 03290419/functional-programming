// var add = function (a, b, callback) {
//   setTimeout(function () {
//     callback(a + b);
//   }, 1000);
// };
// add(10, 5, function (r) {
//   console.log(r);
// });
// console.clear();
// var add = function (a, b, callback) {
//   setTimeout(function () {
//     callback(a + b);
//   }, 1000);
// };

// var sub = function (a, b, callback) {
//   setTimeout(function () {
//     callback(a - b);
//   }, 1000);
// };

// var div = function (a, b, callback) {
//   setTimeout(function () {
//     callback(a / b);
//   }, 1000);
// };

// add(10, 15, function (a) {
//   sub(a, 5, function (a) {
//     div(a, 10, function (r) {
//       console.log(r);
//     });
//   });
// });

// function wrap(func) {
//   // 1
//   return function () {
//     //2
//     return func.apply(null, arguments); //3
//   };
// }

// var add = wrap(function (a, b, callback) {
//   setTimeout(function () {
//     callback(a + b);
//   }, 1000);
// });

// add(5, 10, function (r) {
//   console.log(r);
// });
function _async(func) {
  return function () {
    arguments[arguments.length++] = function (result) {
      console.log(arguments.length++);
      _callback(result);
    };
    func.apply(null, arguments);

    var _callback;
    function _async_cb_receiver(callback) {
      console.log(callback);
      _callback = callback;
    }
    return _async_cb_receiver;
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
