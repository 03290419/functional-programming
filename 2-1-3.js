function obj8() {}
obj8.a = 1;
obj8.b = 2;
console.log(obj8.a);
console.log(obj8.b);

obj9.a = 1;
obj9.b = 2;
console.log(obj9.a + obj9.b);
function obj9() {}

var obj10 = [];
obj10.a = 1;
console.log(obj10);
console.log(obj10.length);

var obj11 = [];
obj11[0] = 1;
obj11[1] = 2;
console.log(obj11);
console.log(obj11.length);

console.clear();

var obj12 = [];
obj12.length = 5;
console.log(obj12);

var obj13 = [1, 2];
obj13[5] = 5;
console.log(obj13);
console.log(obj13.length);
obj13.push(6);
console.log(obj13);
console.log(obj13.length);

console.log(obj13['len' + 'gth']);
obj13['len' + 'gth'] = 10;
console.log(obj13.length);
obj13.push(11);
console.log(obj13);
