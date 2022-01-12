//Sychronous
/*This will print serially as JS run the code from top to bottom  and if one of the console.log does work/stuck the whole process stops*/
/*
console.log("I");

console.log("eat");

console.log("ice cream ");

console.log("with a");

console.log("spoon ");
*/

//Asynchronous
/*
console.log("I");

console.log("eat");

setTimeout(()=> {
  console.log("ice cream ");
},4000);

console.log("with a");

console.log("spoon ");
*/

//callback
/*
function one() {
  console.log("step 1");
}

function two() {
  console.log("step 2");
}

one();
two();
*/

/*
function one(call_two) {
  console.log("step 1");
  call_two();
}

function two() {
  console.log("step 2");
}

one(two);
*/

/*
let stocks = {
  Fruits: ["strawberry","grapes", "banana","apple"]
}
let order = (call_production) => {
  console.log("order placed, please call production ");
call_production();
}

let production = () => {
console.log("order received , starting prodcution")
}

order(production);
*/

/*
let stocks = {
  Fruits: ["strawberry","grapes", "banana","apple"],
  liquid: ["water","ice"],
  holder: ["cone","cup","stick"],
  toppings: ["chocolate","peanuts"]
};


let order = (fruit_name,call_production) => {
  
  setTimeout(() =>{
    console.log(`${stocks.Fruits[fruit_name]} was selected`)
    call_production(); //this wont be called unless fruit is selection is completed
  },2000)
  

}

let production = () => {
  setTimeout(()=>{
  console.log("Production has started");

setTimeout(()=>{
  console.log("The fruit has been chopped");
  setTimeout(()=>{
console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`)

setTimeout(()=>{
console.log("The machine was started");

setTimeout(()=>{
  console.log(`Ice cream was placed on the ${stocks.holder[0]}`);

  setTimeout(()=>{
    console.log(`${stocks.toppings[0]} was added as toppnings`);

    setTimeout(()=>{
console.log("Serve ice cream");
    },2000)
  },3000)
},2000)

},1000)

  },1000)

},2000)

  },0000)
}
order(0,production);
*/

let stocks = {
  Fruits: ["strawberry","grapes", "banana","apple"],
  liquid: ["water","ice"],
  holder: ["cone","cup","stick"],
  toppings: ["chocolate","peanuts"]
};

let isShopOpen = true;

let order = (time,work) => {
  return new Promise((resolve,reject)=>{
    if(isShopOpen){
      setTimeout(() => {
        resolve(work())
      },time);
    }
    else {
      reject(console.log("our shop is closed"))
    }
  } );
};

order(2000, ()=>console.log(`${stocks.Fruits[0]} was selected`))

.then(() => { 
  return order(0000, () => console.log("Production has started"));
})

.then(() => {
  return order(2000, () => console.log("The fruit was choppend"));
})

.then(() => {
  return order(1000, () => console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`))
})

.then(() => {
  return order(1000, () => console.log("The machine was started"))
})

.then(() => {
  return order(2000, () => console.log(`Ice cream was placed on the ${stocks.holder[0]}`))
})

.then(() => {
  return order(3000, () => console.log(`${stocks.toppings[0]} was added as toppnings`))
})

.then(() => {
  return order(1000, () => console.log("ice cream was served"))
})

.catch (() => {
  console.log("Customer left")
})

.finally( () => {
  console.log("Day ended, shop is closed");
})