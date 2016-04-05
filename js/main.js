
var num1 = document.querySelector('#value-one');
var num2 = document.querySelector('#value-two');
var btn = document.querySelector('#calculate-button');
var sum = document.querySelector('#answer');


// function add (num1, num2) {
//   return num1 + num2;
//   // console.log(add);
// }

btn.addEventListener('click', function (event) {
  event.preventDefault();
  // var add = sum.value;
  var value1 = Number(num1.value);
  var value2 = Number(num2.value);
  var value = value1 + value2;
  // Number(num1.value)= num1;
  answer.textContent = (value);
});
console.log(answer.textContent);
//  console.log(sum);
