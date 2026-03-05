//------------------------------DATES-----------------------------

// let myDate=new Date()
// console.log(myDate);
// console.log(typeof(myDate));

// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toTimeString());


let myDate= new Date('01-26-2026')  //MMDDYYYY
// let myTimeStamp= Date.now()
// console.log(myDate.getTime());      //milliseconds
// console.log(myTimeStamp);
// console.log(myTimeStamp/1000);      //seconds

// console.log(myDate.getMonth()+1)    //Month
// console.log(myDate.getDay())        //Month

console.log(
    myDate.toLocaleString('default',{   //creates an object
    weekday:'long',
   
})
)