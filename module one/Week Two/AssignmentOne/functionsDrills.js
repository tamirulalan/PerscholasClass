/*
 * Before you start, add this javascript file in a script tag in index.html.
 *
 * Tip: Comment out your solution to a prompt before moving on to the next one.
 * It will keep your console clean and easy to read!
 */

/*
 * Prompt 1:
 *
 * Write a function, using the function keyword. Call the function sayHello.
 * When invoked, sayHello should print the string 'hello world'.
 */
/*1. write a function using function declaration using sayHello as a name of the function
  
2. co 
*/
// function sayHello(){
//   sayHello="hello world"
//   console.log(sayHello)
// }
// sayHello()


/*
 * Prompt 2:
 *
 * Create a function called print. Print should take a parameter called message.
 * When invoked and passed a string, print should `console.log` the message.
 */
// const print =(message)=>{
// console.log(message)
// }
// print("please signup early for class")

/*
 * Prompt 3:
 *
 * Create a function called printMessage. This function should take a parameter
 * called message. When invoked and passed a string, print 'Today's message
 * is:', followed by the message passed in as a parameter.
 */
// const printMessage=function(message){
//   console.log(`Today's message is: ${message}`)
// }
// printMessage('submit your assignment before 11:59Pm')

/*
 * Prompt 4:
 *
 * Fix the following function:
 */

/** Starter Code */
//  function squareOfNumber(a) {
//  return a ** 2
// }
// console.log(squareOfNumber(5))
  
  /*
   * Prompt 5:
   *
   * Create a function called reverseMessage. This function should take
   * a parameter called message. When invoked and passed a string, print the
   * string in reverse. (hint: look up some ways of doing this.)
   */
//   function reverseString(str) {
//     var splitString = str.split("");
//     var reverseArray = splitString.reverse()
//     var joinArray = reverseArray.join("")
//     return joinArray
// }
// console.log(reverseString("hello"))
  /*
   * Prompt 6:
   *
   * Create a function called C that takes two parameters: a and b. When
   * invoked, multiply a times b. If b an argument is not passed in for b, then
   * double a (i.e. multiply it by two).
   *
   * Hint: use a default parameter.
   */
//   const multiply=(a,b=a)=>{
//     return (a*b)
// }
// console.log(multiply(2,3))
  
  /*
   * Prompt 7:
   *
   * Fix the following code. HINT: Think Objects :)
   */
  
 
  //  let makePerson = (firstname,lastname)=> {
  //   return {
  //   firstname: firstname,
  //   lastname: lastname
  //   }
  // }
  //  const zakk = makePerson('Zakk', 'F')
  //  const jimmy = makePerson('Jimmy', 'B')
  // console.log(zakk)
  // console.log(jimmy)
  
  /*
   * Prompt 8:
   *
   * Write a function that returns an object. The object can be anything.
   */
  //  makePerson=(para1, para2)=> {
  
  //   return {
  //     name: para1,
  //     age: para2
  //   };
  // }
  // console.log(makePerson('Tam', 25))
  
  /*
   * Prompt 9:
   *
   * Write a function that returns an array. The array can be of anything.
   */
  // function formArray(studnts, event) {
  //   let newArray = []
  //   for (let i = 0; i <studnts.length; i++) {
  //     newArray.push(studnts[i] + " is "+ event[i])
  //   }
  //   return newArray;
  // }
  // console.log(formArray(['tamiru', 'John', 'chase'], ['Praying', 'consulting','teaching']));
  
  
  /*
   * Prompt 10:
   *
   * Write a function that, when called, adds a number passed in as a parameter to
   * the sum variable below. Invoke your method a few times and then print the sum
   */
  
  /** Starter Code */
  // function sumAndPara(){
  //   var sum =0; 
  //   for(var i=0;i<arguments.length;i++){
  //      sum += arguments[i];
  //   }
  //    return sum;
  // }
  // console.log(sumAndPara(10,5,4))
  // console.log(sumAndPara(11,6,20,3))
  
  
  /*
   * Prompt 11:
   *
   * Write a function that takes an array of number values and returns the sum.
   * Test it out to make sure it works.
   */
//   number =10
//   function sumOfArrayNumbers() {
//     var total = 0;
//     for (i = 0; i < number; ++i) {
//          total +=i; // add each element in an array to total
//     }
//     return total;// return sum of elements in array
// }
// console.log(sumOfArrayNumbers())
  
  
  /*
   * Prompt 12:
   *
   * Write a function that takes a string and returns an array of every word in
   * the string.
   */
//   function getAllWords(str) {
//     if(str === "") {
//         var array = {};
//     } else {
//         var array = str.split(" ");
//     }
//     return array;
// }
// console.log(getAllWords("change this string sentence to array"))
  
  
  /*
   * Prompt 13:
   *
   * How can you write a function so that this expression works? It should print
   * the string "this works!"
   */
  
  /** Starter Code */
  //testFunc()()
   
  // const testFunc =()=>{
  //  console.log("this work")
  // }
  // console.log(testFunc())
  
  /*
   * Prompt 14:
   *
   * Write a function that takes the add function below as a parameter and invokes
   * it, passing in 2 and 4.
   */
  
  /** Starter Code */
  // function add(a, b) {
  //  return a + b
  // }
  // console.log(add(2,4))
  
  /*
   * Prompt 15:
   *
   * Write a function that returns another function. Have the inner function print
   * the string "hello world"
   */
  // const firstFunct=(para1)=> ("Hello " + para1)
  // const secondFunct=(para1,para2)=>{
  //  console.log((para2 + "  connected "+ para1))
  //  return firstFunct
  // }
  // console.log(firstFunct("Tamiru","fine"))