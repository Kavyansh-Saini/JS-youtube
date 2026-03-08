//Immediate Invoked Function Expression

/*prevents global scope pollution by giving your code a private area
Variable aint leaked from it*/
//-----------------------------NOT IIFE--------------------------------
// function chai(){
//     console.log('db connected')
// }

// chai()

//-----------------------------IIFE----------------------------------
// (function chai(){              // named IIFE
//     console.log("db connected")
// })();
//()=>defines function, ()=>execution call ;=>scope end
//<<all three important ()();>>

(()=> {                             // simple IIFE
    console.log(console.log("db connected 2"))
})();

((name)=> {
    console.log(console.log(`db connected 3 ${name}`))
})('Kavyansh');



//_________________EXECUTION CONTEXT & CALL STACK______________________

/*  code files
1. global execution context (diff context for diff environment)
        called using 'this'
        other contexts :>Function execution context
                        >eval
phase 1> MEMORY CREATION PHASE
-memory allocation

phase 2> EXECUTION PHASE
*/

/*LET CODE:-
let val1=10
let val2=5
function addnum(num1,num2){
    let total=num1+num2
    return total
}
let result1 = addnum(val1,val2)
let result2 = addnum(3,5)
*/

//code execution
//1>> GLOBAL EXECUTION/ENVIRONMENT (via 'this')
//2>> MEMRORY PHASE
    //val1> undefined
    //val2> undefined
    //addnum> definition
    //result1> undefinded
    
// cycle 1 ends

//3>> EXECUTION PHASE               (cycle 2)
    //val1<10
    //val2<5
    //addnum>creates a sub-executional context
                            //new variable environment+executional thread
                            //both phase in it each time
                                //memory phase
                                    //val1>undefined
                                    //val2>undefined
                                    //total>undefined
                                //execution phase
                                    //val1< 10
                                    //val2<5
                                    //total<15  (return var returns to global execution context)
