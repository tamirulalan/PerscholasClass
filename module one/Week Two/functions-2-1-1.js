/* 
1. Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. Do some googling to figure this out if you forget how conditionals work.
*/

maxOfTwoNumbers = (numOne,numTwo) => {
  if(numOne > numTwo){
        console.log(`${numOne} is the lasgest of two`);
      } else if (numOne < numTwo) {
        console.log(`${numTwo} is the largest of two`);
      }else{
        console.log(`${numOne} is equal with ${numTwo}`);
      }
}
 console.log(maxOfTwoNumbers(5,3))
 console.log(maxOfTwoNumbers(5,9))
 console.log(maxOfTwoNumbers(5,5))

//we can also use the inbuilt Math.max()
maxOfTwoNumbers=(a,b)=>Math.max(a,b)

console.log(maxOfTwoNumbers(2,5));

// 2. Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.
// */
maxOfThree = (num1,num2,num3) => {
  if(num1 >= num2 && num1 >= num3) {
   return num1;
}
  else if (num2 >= num1 && num2 >= num3) {
    return num2;
}
  else {
    return num3;
}
};
console.log(maxOfThree(1,2,3))

//we can also use the inbuilt Math.max()
maxOfThree=(a,b,c)=>Math.max(a,b,c)

console.log(maxOfThree(2,5,7));



// 3. Write a function isCharacterAVowel that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// */
const isCharacterAVowel = (letter) => {
  if ('aeiou'.includes(letter)) {
    return true
  } else {
    return false
  }
}
console.log(isCharacterAVowel('a'))

// /*
// 4. Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.
// */

   sumArray = (numbers) => {
	var total = 0;
	for (var i = 0; i < numbers.length; i++) {
		total += numbers[i];
	}
	return total;
}

console.log(sumArray([1,2,3,4]));

const multiply=(numbers) => {
	let product = 1;
	for (let i = 0; i < numbers.length; i++) {
		product = (product * numbers[i]);
	}
	return product;
}
// Print out the total to the console
console.log(multiply([1,2,3,4]));

// /*
// 5.Write a function that returns the number of arguments passed to the function when called.
// */
function ArgCounter() {
	return arguments.length;
}
console.log(ArgCounter(10))
// /*
// 6. Define a function reverseString that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".
// */

 const reverseString = (str) => {
let newString = "";
for (let i = str.length - 1; i >= 0; i--) { 
  newString += str[i]; 
}
return newString;
 }
 console.log(reverseString("reverse string"))

 //or
 function reverseString(str) {
  var newString = "";
  for (var i = str.length - 1; i >= 0; i--) {
      newString += str[i];
  }
  return newString;
}
reverseString('reverse string');

// /*
// 7. Write a function findLongestWord that takes an array of words and returns the length of the longest one.
// */
    findLongestWord = (array) => {
    var arr=array.split(" "); //splits a String object into an array of strings by separating the string into sub strings.
    var longest = 0;
    var word = null;
    for (var i = 0; i < arr.length - 1; i++) {
        if (longest < arr[i].length) {
            longest = arr[i].length;
            word = arr[i];
        }
    }
    return word;
}
console.log(findLongestWord("Write a function findLongestWord that takes an array of words"))

// /*
// 8. Write a function filterLongWords that takes an array of words and a number i and returns the array of words that are longer than i characters long.
// */
filterLongWords = () => {
    var array = ['breakfast', 'lunch', 'bunch', 'snack', 'dinner', 'disert'];
    return array.filter(array => array.length > 8);
};
console.log(filterLongWords())
