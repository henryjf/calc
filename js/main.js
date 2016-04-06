
var num1 = document.querySelector('#value-one');
var num2 = document.querySelector('#value-two');
var btn = document.querySelector('button');
var sum = document.querySelector('#answer');

btn.addEventListener('click', function (event) {
  event.preventDefault();

  var value1 = Number(num1.value);
  var value2 = Number(num2.value);
  var value = value1 + value2;

  answer.textContent = (value);
});
