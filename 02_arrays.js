const marvel_Hero=['ironman','spiderman','thor']
const dc_Hero=['batman','flash','superman']

//marvel_Hero.push(dc_Hero)
//console.log(marvel_Hero);

// console.log(marvel_Hero[3]);
// console.log(marvel_Hero[3][0]);

//const allHero=marvel_Hero.concat(dc_Hero)         //method 1
//console.log(allHero);

// const newHeroes=[...dc_Hero,...marvel_Hero]         //(...)-> spreading
// console.log(newHeroes);

const another_Array=[1,2,3,[4,5,6],[7,8,[9,0]]]  //3d array
const realAnotherArr= another_Array.flat(Infinity)/*Depth,here 3 could work*/
// console.log(realAnotherArr);

console.log(Array.isArray(realAnotherArr))
console.log(Array.isArray("Kavyansh"))
console.log(Array.from("Kavyansh"))
console.log(Array.from({name:"Kavyansh"}))  //interesting

let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2, score3));