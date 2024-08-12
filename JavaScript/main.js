const test = {
   firstName : 'Chimdike'
}
console.log(test.firstName);

const array = [1, 2, 3, 4, 5]
console.log(array[1]);

let x = 10
let y = 7
console.log(x <= y);

const comp = x > 8 && 8 > y
console.log(comp);

console.log('Chimdike ' + 'Obi');

const logic = 10 % 3 == 0 ? true : false
console.log(logic);

const num = 0
if(num > 0) {
   console.log('It is');
} else if(num < 0) {
   console.log('It is not');
} else {
   console.log('It is zero');
}

const color = 'black'
switch(color) {
   case 'red':
      console.log('red');
      break
   case 'blue':
      console.log('blue');
      break
   case 'green':
      console.log('green');
      break
   default:
      console.log('Option not available.');
}