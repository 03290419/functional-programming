var result = [];
var names = [
  "alonzo church",
  "Haskell curry",
  "stephen_kleene",
  "John Von Neumann",
  "stephen_kleene",
];
const filter = function (list, predicate) {
  var new_list = [];
  for (var i = 0, len = list.length; i < len; i++) {
    if (predicate(list[i], i, list)) new_list.push(list[i]);
  }
  return new_list;
};
const map = function (list, iteratee) {
  var new_list = [];
  for (var i = 0, len = list.length; i < len; i++) {
    new_list.push(iteratee(list[i]));
  }
  return new_list;
};
const a = map(
  map(
    map(
      filter(names, function (name) {
        return name != undefined && names != null;
      }),
      function (name) {
        return name.replace(/_/, " ").split(" ");
      }
    ),
    function (name) {
      return map(name, function (n) {
        return n.charAt(0).toUpperCase() + n.slice(1);
      });
    }
  ),
  function (name) {
    return name.join(" ");
  }
);
const b = new Set(a);
console.log(Array.from(b).sort());
