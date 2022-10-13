//https://www.codecademy.com/learn/paths/introduction-to-javascript/tracks/introduction-to-javascript/modules/learn-javascript-loops/cheatsheet
// var i=7
// while(i>=0){
//     console.log(i)
//     i--
// }

// var i=0
// while(i<=35){
//     console.log(i)
//     i+=3

// }

//Keep printing integers in multiples of 5 as long as integers are less than 100
// var i=0
// while(i<=100){
//     console.log(i)
//     i+=5
// }
/*Using a while loop print integers between 0 and 20. All numbers divisible by 2 should be multiplied by 3 before they are output. All other integers should not be output.

Hint: use Modulo*/
// var i=2
// while(i<=20){
//     if(i%2==0){
//         console.log(i*3)
       
//     }
//      i++
// }
//Using a while loop, print out all prime numbers between 0 - 20
//  var i=1;

// while(i < 20){
//     if (i == 2 || i==3){
//         console.log(i)
//     }else
//         console.log("output i*3 is " + tempNum)
//     }
// 	i++;
// }
//Nando went to the vending machine to buy himself a cookie. The cookie costs $4 dollars. He paid with a $10 bill, the vending machine paid him back in quarters. Write a loop that says how many quarters he got in return.
//create a while loop
//let dollar =4
//subtraction
//convert to qouter
 
//return how many

// const fb = [];
// // ADD CODE HERE
// var i=1
// while(i<=16){
//   if(i%3==0){
//     fb.push("fizz")
//   } 
//   else if(i%5==0){
//     fb.push("buzz")
//   }
//   else if (i%3===0 && i%5===00){
//       fb.push("fizzbuzz")
//   }else{
//     fb.push(i)
//   }
  
//  i++ 
// }

// console.log(fb)

//Functions

//https://www.codecademy.com/learn/paths/introduction-to-javascript/tracks/introduction-to-javascript/modules/learn-javascript-functions/cheatsheet
// function addition(x,y){ // function keyword, addition is name, x,y are parameters
//     var z
//      z=x+y
//      return z
//     console.log(addition(2,4)) //2 ND 4 are arguments

// }
// let additiontwo = (x,y) => x+y
// console.log(additiontwo(10,6)
// let additionThree =(x,y) => {
//     return x+y
//  }
//Global vs Local Scope Playground:
let myFunction = () => {
    var hello = "hello";
//////////////////////////////////////////////////
    let innerFunction = () => {
        var hello = "inner hello";
        console.log("line 158 ", hello)
    }
    innerFunction()
//////////////////////////////////////////////////
    console.log("line 163 ", hello)
}
myFunction()
//Block scope is has different behavior (with var and let)
let myFunction = () => {
    var student = "George";
//////////////////////////////////////////////////
    if (true) {
        var student = "Iffy";
        console.log("IN: ", student)
    }
//////////////////////////////////////////////////
    console.log("OUT: ", student)
}