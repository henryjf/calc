// var number = function (num1, num2){
//   return num1 + num2;
// }
  // return value-one + value-two;

var num1 = document.querySelector('#value-one');
var num2 = document.querySelector('#value-two');
var btn = document.querySelector('#calculate-button');
var sum = document.querySelector('#answer');

function add (num1, num2) {
  return num1 + num2;
  // console.log(num1 + num2);
}

btn.addEventListener('click', function(event) {
  event.preventDefault();
  var add = sum.value;
});
 console.log(sum);
