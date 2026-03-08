// let a =10
// const b=20
// var c=30

// if (true){
//     let a =10       //local(block) scope
//     const b=20      //local scope
//     var c=30        //global scope

// }

// console.log(a);
// console.log(b);
// console.log(c);

//------------------------------------------------------------------
// let a=350           //global
// if(true){
//     let a =10       //local(block) scope
//     const b=20      //local scope
//     var c=30        //global scope

//     console.log(a); //10
// }

// console.log(a);     //350

//---------------------------------------------------------------
function one(){
    const username='rajesh'
    function two(){
        const website="youtube"
        console.log(username)
    }
    //console.log(website)        //problem (not in this scope)
    two()
}
//one()

//----------------------------------------------------------------
if(true){
    const username='rajesh'
    if(username==='rajesh'){
        const website='youtube'
        console.log(username+website);
    }
    //console.log(website);       //error
}
//console.log(username)

// ++++++++++++++++++++++hoisting+++++++++++++++++++++++++++++++++++

console.log(addOne(5))      //gives value before initialisation
function addOne(num){
    return num+1
}

//console.log(addTwo(5))   //gives ERROR    as addTwo (as a fn) is
const addTwo= function (num){           //stored in variable
    return num+2
}