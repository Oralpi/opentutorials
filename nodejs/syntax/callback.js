// function a() {
//   console.log('A');
// }
let a = function() {
  console.log('A');
}

function slowFunc(callback) {
  callback();
}

slowFunc(a);