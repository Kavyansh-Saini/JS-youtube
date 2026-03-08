// function sayMyName(){
//     console.log('k');
//     console.log('a');
//     console.log('v');
//     console.log('y');
//     console.log('a');
//     console.log('n');
//     console.log('s');
//     console.log('h');
// }

// sayMyName()

//function addTwoNumbers(num1,num2){
    // let result=(num1+num2);
    // return result;
    // console.log(num1+num2); //dont read after return 

  //  return num1 +num2 //method 2
//}

//addTwoNumbers(5,4)
// addTwoNumbers(null,3)
// addTwoNumbers(5,"4")
// addTwoNumbers(5,"e")
//const result=addTwoNumbers(3,4)
//console.log('Result: ', result);//fn just prints the value, but doesnt return anything


// function hello(username="Jason"){       // giving default value
//     if(username=== undefined){  //can be replaced by (!username)
//         console.log("enter a username");
//         return
//     }
//     return `Hello ${username}, Good Morning.`
// }

// hello('Kavyansh') //returns, but doesnt prints
// console.log(hello('Kavyansh')) //returns and prints
// console.log(hello())

//-----------------------different passing-------------------------

// function calcCartPrice(num1){
//     return num1
// }
// console.log(calcCartPrice(20,30,40,50,60))

// function calcCartPrice2(...num1){
//     return num1
// }
// console.log(calcCartPrice2(20,30,40,50,60))

// function calcCartPrice3(val1,val2,...num1){
//     return num1
// }
// console.log(calcCartPrice3(20,30,40,50,60))

//-------------------------------------------------------------------

// const user ={
//     username:'ramesh',
//     price:170
// }

// function handleObject(anyObject) {
//     console.log(`User is ${anyObject.username} and price is ${anyObject.price}.`)
// }

// handleObject(user)      //pre defined
// handleObject({          //defining on the go
//     username:"Suresh",
//     price:220
// })

//------------------------getting indexed values-------------------------

const Cart=[20,30,40,50,60,70,70]

function secondValue(anyArray){
    return anyArray[1]
}

console.log(secondValue(Cart))
console.log(secondValue([23,542,563,13,636,1324,929]))

//----------------------------------------------------------------------