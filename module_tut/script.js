import {add} from "./maths_function.js"
import divFunc, {multiply as multFunc , substract} from "./maths_function.js"

let sum = add(3,4);
let product = multFunc(2,3);
let sub = substract(5,4);

console.log(sub);
console.log(product);
console.log(sum);

/*
import * as mathsFunc from "./maths_function.js"

let sum = mathsFunc.add(3,4);
let product = mathsFunc.multiply(2,3);
let sub = mathsFunc.substract(5,4);

console.log(sub);
console.log(product);
console.log(sum);
*/




let div = divFunc(8,2);

console.log(div);