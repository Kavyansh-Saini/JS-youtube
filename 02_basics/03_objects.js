
//object literals

const mySym= Symbol("key1")         //declaring a symbol

const jsUser={
    name:"kavyansh",
    "full Name":"kavyansh saini",
    age :20,
    //mySym="key1",             //its seen as str (not symbol)
    [mySym]:"key1",             //its seen as declared symbol
    location:'delhi',
    email:'kavyanshdelhi@gmail.com',
    isLoggedIn: false,
    lastLoginDays:['monday','saturday']
}
// console.log(jsUser.email);
// console.log(jsUser["email"]);                    //better
// //console.log(jsUser.full Name); 
// console.log(jsUser["full Name"]);  
// console.log(jsUser[mySym]);  
// console.log(typeof(jsUser.mySym));  

jsUser.email="ksdelhi@gmail.com"
//Object.freeze(jsUser)                // no further modifications allowed
jsUser.email="kavyanshsaini@nsut.ac.in"

//console.log(jsUser)
jsUser.greeting= function(){            //needs to be unfreezed to use
    console.log("hello JS user");
}


jsUser.greeting2= function(){            //needs to be unfreezed to use
    console.log(`hello JS user, ${this.name}`   );
}

console.log(jsUser.greeting);
console.log(jsUser.greeting());
console.log(jsUser.greeting2());