//singleton  (via constructor)

const tinderUser=new Object()         //      Singleton
// const tinderUser={}                   //      non-singleton

tinderUser.id='123abc'
tinderUser.name='Sunny'
tinderUser.isLoggedIn=false

// //console.log(tinderUser)

// const regularUser={
//     email:'abc@gmail.com',
//     fullName:{
//         userFullName:{
//             firstName:'Kavyansh',
//             lastName:'Saini'
//         }
//     }
// }
// console.log(regularUser.fullName.userFullName.firstName)

// const obj1={1:'a',2:'b'}
// const obj2={3:'a',4:'b'}
// const obj3={obj1, obj2}
// const obj4={...obj1,...obj2}
// const obj5=Object.assign({},obj1,obj2)  //{} stores values combined from all later objects
// console.log(obj3)
// console.log(obj4)
// console.log(obj5)

//data as from database
users=[
    {
        id:'1',
        email:'xyz@gmail.com'
    },
    {
        id:'1',
        email:'xyz@gmail.com'
    },
    {
        id:'1',
        email:'xyz@gmail.com'
    },
    {
        id:'1',
        email:'xyz@gmail.com'
    },
    {
        id:'1',
        email:'xyz@gmail.com'
    },
    
]


// console.log(users[1].email);
// console.log(Object.keys(tinderUser));   //Array Datatype
// console.log(Object.values(tinderUser));   
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'))

const course={
    courseName:'js',
    price:999,
    Instructor:"hitesh",
}
const {Instructor}= course;
console.log(Instructor);