"use strict";      // treat all code as newer version of JS

//alert(3+3)        cant use due to not in html

// console.log(3+2)

/************************Primitive Type********************************/


// let name="jumbo"
// let age= 23
// let isLoggedIn=false

//  num size 2^53
//  bigint
//  string =>>""
//  boolean =>> true/false
//  null =>> standalone value  (but datatype=object)
//  undefined 
//  symbol =>> unique

//  object


// console.log(typeof age)
// console.log(typeof null)
// console.log(typeof undefined)




/*******************Reference (non primitive)***********************/

// const runners=["Brecken", "Amir", "Tahir"]  //Array

// let P1={                                    //Object
//     Name:"Brecken",
//     Age:32,
//     Ocucpation:" GRE Operative",
//     CurrentlyDeployed:"Harran", 
//     PresentJob:"Runner"
// }                           


// const myFunc = function(){                  //Function
//     console.log("hello world");
// }

// myFunc()


//-------------------------------------------------------------------//

// Stack (Primitive),   Heap(non Primitive)

let name = "USSR"
let anotherName= name

name ="Russia"
console.log(name);
console.log(anotherName);       
/*a copy of value is stored in anotherName,
so it is not affected by change in name variable.*/


/*The heap comes into play only when you create objects 
(arrays, functions, plain {} objects, etc.). 
In those cases the object itself is allocated on the heap
and variables contain a reference (pointer) to that heap location. 
With primitives like strings, numbers, booleans, etc., 
the values live on the stack and assignments copy the value*/   