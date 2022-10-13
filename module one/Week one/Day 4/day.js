// // declare a variable 'num'
"use strict";
// var num = 10

// if (num > 0) {
//     console.log("num is positive")
// } else {
//     console.log("num is negative")
// }

// let x = 7,
//     v = "Sam",
//     y = true

// let yo // yo's value is undefined at this point
// console.log(yo)
// yo = 55 // now yo equals 55
// console.log(yo)

// let empty = ''


// // person = "John Doe" // incorrect
// // console.log(person)

// const cars = ["Volvo", 3, true, "6"] // array

// const candy = {candyName: "KitKat", wrapperColor: "Red"} //object

// console.log(typeof cars)
// console.log(typeof candy)
// console.log(typeof yo)
// console.log(typeof v)
// console.log(typeof y)

// write a nested if/else statement

// var num = -5
// if(num >= 0){ // num must be positive
//     if(num >= 100){
//         console.log("num is greater than 100, yay.")
//     }else{
//         console.log("num is less than 100, or whatever...")
//     }

// }else{
//     console.log("num is negative...")
// }

// let grade = 75
// if(grade >= 90){
// console.log("You get a A...")
// }else if(grade >= 80){
//     console.log("You get a B...")
// }else if( grade >= 70){
//     console.log("You get a C...")
// }else if(grade >= 55){
//     console.log("You get a D...")
// }else {
//     console.log("You get a F... Do you even try?")
// }

// for loop

// for(var i = 0; i <= 10; i++){
//     console.log(i) // any notes about this line of code
// }

// for(var i = 10; i >= 1; i--){
//     console.log(i) // any notes about this line of code
// }

// // Exercise 2
// // Write a for loop for the given output: 1, 3, 5, 7, 9 2, 4, 6, 8, 10
// for(let i = 0; i <=10; i++){
//     if (i%2==0){
//         console.log(i)
// }
// }

// Arrays

// let movies = ['Willy Wonka and the Chocolate Factory', 'Eternal Sunshine of the Spotless Mind', 'Everything, Everywhere, All at Once'] // 3 items in this array

// console.log(movies[1])

// movies.push('Spirited Away') // adding an item to the end of the array

// console.log(movies)

// movies.unshift('Forest Gump') // adding an item to the beginning of the array

// console.log(movies)

// movies.pop() // remove the last item in an array

// console.log(movies)

// movies.shift() // remove an item from the beginning of an array

// console.log(movies)
// Arrays
let movies = ['Willy Wonka and the Chocolate Factory', 'Eternal Sunshine of the Spotless Mind', 'Everything, Everywhere, All at Once', "Spirited Away", 'Beetlejuice'] // 5 items in this array

// for(let i=0; i < movies.length; i++){ // standard for loop
//     console.log(movies[i])
// }
// movies.forEach(function(movie) { // forEach ( a little advanced)
// 	console.log(movie)
// })

// for(let x of movies){ // for..of loop 
//     console.log(x)
// }

// let lastTwoMovies = movies.slice(3, 5)

// console.log(lastTwoMovies)

// let moviesCopy = [...movies]

// console.log(moviesCopy)

// let moreMovies = ['Interstellar', ...movies, 'Contact']

// console.log(moreMovies)

let movieStr = movies.join()

// console.log(movieStr)

let otherMov = movies.join('-')

console.log(otherMov)