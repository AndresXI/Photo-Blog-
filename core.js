window.onload = function() {

function greet() {
  alert("Durham is awesome!");
// }

greet();

var bands = ['Kiss', 'Aerosmith', 'ACDC', 'Led Zeppelin', 'Nickelback'];
var lastIndex = bands[bands.length - 1];
for (var i = 0; i < bands.length; i++) {
  console.log("I love " + bands[i]);
}

for (var i = 0; i < bands.length; i++) {
  if (bands[i] == lastIndex) {
    console.log("I DON'T love " + lastIndex + "!");
  } else {
  console.log("I love " + bands[i]);
 }
}

var array = [34, 203, 16, 46, 34, 432, 342, 124, 33, 188, 12];
var sum = 0;
for (var i = 0; i < array.length; i++) {
  var sum = sum + array[i];
  }
console.log((sum / array.length).toFixed(2));


function bank(cost) {
  var hun = cost / 100;
  var tens = cost % 100;
  var twt = tens / 20;
  var fiv = tens - (20 * Math.floor(twt));
  var fives = fiv / 5;

  var obj = {
    '100': Math.floor(hun),
    '20': Math.floor(twt),
    '5': Math.floor(fives)
  };
  return obj;
}

console.log(bank(1745));

};
