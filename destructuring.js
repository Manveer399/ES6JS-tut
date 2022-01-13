//Assign variable from Arrays
/*
const alphabet = ['A','B','C','D','E','F'];
const numbers = ['1','2','3','4','5','6']

const [a,b] = alphabet
const [a,,c] = alphabet
const [a,b,c,...rest] = alphabet

const newArray = alphabet.concat(numbers);
const newArray2 = [...alphabet,...numbers];
console.log(a);
console.log(b);
console.log(c);
console.log(rest);
console.log(newArray);

example of its use 

function sumAndMultiply (a,b) {
  return [a+b,a*b]
}

const array = sumAndMultiply(2,3)

const [sum,multiply] = sumAndMultiply(2,3);

const [sum,multiply, division = 'No division'] = sumAndMultiply(2,3);

*/


/*Objects destructuring*/
/*
const personTwo = {
  name: 'Sally',
  age: 32,
  address: {
    city: 'Somewhere',
    state: 'another one of them'
  }
}

const {name ,age} = personTwo;
console.log(name);
console.log(age);

const {name :firstname,age:Age } = personTwo;

//default values 
const {name :firstname='john',age } = personTwo;

const {name: firstname , ...rest} = personTwo;


const {name: firstname , address: {city}} = personTwo;


//combine two objects

//take anthing in p1 and p2 and combine them but overwrite anything   //that was already in person One

const personThree = {...personOne,...personTwo}


function printUser({name,age}){
  console.log(name,age);
}

*/