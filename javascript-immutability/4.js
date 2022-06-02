// function fn(person) {
//   person = Object.assign({}, person);
//   person.name = 'lee';

//   return person;
// };

// var o1 = { name: 'kim' };
// var o2 = fn(o1);

// console.log(o1, o2);

function fn(person) {
  person.name = 'lee';
};

var o1 = { name: 'kim' };
var o2 = Object.assign({}, o1);

fn(o2);

console.log(o1, o2);