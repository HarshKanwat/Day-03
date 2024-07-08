//Compare two json values without order

var obj1 = { name: "Person 1", age: 5 };
var obj2 = { age: 5, name: "Person 1" };

var str1 = JSON.stringify(obj1);
var str2 = JSON.stringify(obj2);

console.log(str1 === str2); // true
