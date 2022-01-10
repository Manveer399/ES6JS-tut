/* REST PARAMETER */

/*
function multiply(multiplier,...args) {
  return args.map(element =>
  multiplier * element)
}

let arr = multiply(2,1,2,3);
console.log(arr);
*/

/////////////////////////////////////////////////////


/* SPREAD OPERATOR */

// add elements to an existing array 
/*
const x = [1,2,3];
const y = [x,4,5,6];
const z = [...x,4,5,6];
console.log(z);
*/




//pass elements of an array as arguments to a function
/*
function sum(x,y,z) {
  console.log(x+y+z)
}

var arr = [1,2,3];

sum(...arr);
*/


//copy arrays
/*
let arr1 = [1,2,3];
const arr2 = [...arr1];
arr2.push(4);
console.log(arr1);
console.log(arr2);

*/


//concatenate arrays
/*
const example = [1,2,3];
const arrEx= [4,5,6];

const arrY = [...arrEx,"free",...example];
console.log(arrY);
*/