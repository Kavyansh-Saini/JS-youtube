
/*  resizable
    multi datatype storage
    indexing from 0
    copy->> shallow copy
    also have prototype property
*/

//shallow copy:copies with same ref point.
//        ie. change in copy> change in original
//deep copy: copies without same ref point
//        ie. change in copy remains in copy

const myArray= [1,2,3,4,5,'jump', true]
const newArray= new Array('king','brawler','knight')
//console.log(myArray);

myArray.push(55)
myArray.push(34)
//console.log(myArray);

myArray.pop()
//console.log(myArray);

myArray.unshift(1234)       //appends at start
//console.log(myArray);
myArray.shift()             // pops from start
//console.log(myArray);

//console.log(myArray.includes(123));     //boolean
//console.log(myArray.includes(3));

//console.log(myArray.indexOf(4));
//console.log(myArray.indexOf(123));          //-1 for false(not available)

const nextArr= myArray.join()
//console.log(nextArr)
//console.log(typeof nextArr)


//console.log("A ", myArray);
const Arr2= myArray.splice(1,4)     //Splice  Original same
console.log(Arr2);
console.log("B ", myArray)

//console.log("A ", myArray);
const Arr3= myArray.slice(1,4)      //Slice->slice removed from original

console.log(Arr3);      
console.log("B ", myArray);

