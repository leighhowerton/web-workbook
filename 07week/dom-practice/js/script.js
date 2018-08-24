'use strict';

document.addEventListener("DOMContentLoaded", function(event) {
  // You code here
});

// var counts =
// document.getElemetnsByTagName('ul')
// console.log(counts[0].children.length)

document.querySelector('h1').insertAdjacentHTML('aferEnd', '<h2> You have ' +count '
items in your shopping cart! </h2>');

var count =
document.querySelectorAll('li')
console.log(count.length);

var newh2 = document.createElement('h2');
newh2.innerHTML = `you have ${counts[0].childen.length}
items in your shopping cart`;
document.getElemetnsByTagName('h1').appendChild(newh2);
