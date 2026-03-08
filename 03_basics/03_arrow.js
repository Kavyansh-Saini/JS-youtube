const user ={
    username:'rajesh',
    price:999,
    welcomeMessage:function(){
        console.log(`${this.username}, welcome to website`)
                       //this-> current context
        //console.log(this)
    }
}
// user.welcomeMessage()
// user.username="suresh"
// user.welcomeMessage()

// console.log(this)

//-------------------------------------------------------------
// function chai(){
//     console.log(this)
// }
// chai()

//-----------------------------------------------------------

// const chai=()=>{
//     let username='rajesh'
//     console.log(this.username);
//     console.log(this);
// }
// chai()

//------------------------------------------------------------------
// const summation=(num1,num2 )=> {
//     return num1+num2
// }
// console.log(summation(3,5))

// const summation2=(num1,num2 )=> num1+num2   //implicit return
//                                             //returns the value inline
// console.log(summation2(3,5))
/*  When we use {}  we must use return statement to return 
    though if we use () or nothing in inline, return isnt used */

//-------------------------------------------------------------------
//for objects

const naming=()=>{username:'hitesh'}
console.log(naming())

const naming2=()=>({username:'hitesh'})
console.log(naming2())