const _ = require('underscore');


var stooges = [{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'curly', age: 60}, {name: 'someone', age: 35}];

// [{name: 'curly', age: 60}, {name: 'larry', age: 50}, {name: 'moe', age: 40}];

console.log(_.sortBy(stooges, 'name'));
console.log(_.sortBy(stooges, 'age'));