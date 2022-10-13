//there are two ways of function decl
//1. function declaration
// function sayHello(name) {
//     console.log('Hello ' + name + '!');
// }
// sayHello("Tame")

//2. Function expression
// const sayHello = function(name) {
//     console.log('Hello ' + name + '!');
// };
// sayHello("Onno")
// const sayHello = (name)=>{
//       console.log('Hello ' + name + '!');
//     };
//     sayHello("Onno")
// function computeArea(width,height){
//     return area=width*height
// console.log(`The area of a rectangle with a width of 2 and a height of 3 is ${area} square units.`)
// }
// console.log(`The area of a rectangle with a width of 2 and a height of 3 is ${area} square units.`)

// computeArea(2,4)

// const sayHello =()=>{
//     console.log("hello")
// }
// const returnPlusFive =number => number+5
// //aspects of function
// // objects, versatile, common
// //handling complexity
// //Reusability(DRY)
// //what is the type of the function? 

// //Name is Verb, Use const,purity(don't change value of variable out side our function)
// //for singular purpose
// //Variables that are useful for a single function, should be inside that function and part of it's logic

// //// I want you to write a function that has a dog age, the function is for the dogs birthday and will increase the dogs age by 1.
// let dog = {
//     name : "fido",
//     birthdate : new Date(2022, 9, 11),
//     color: 'brown',
//     breed: "German Sheppard",
//     age : 2
//     }
// const isItMyDogsBirthday = (dog) => {
//     let currentDate = new Date();
//     birthdate = dog.birthdate;
//     if(currentDate.getMonth() === birthdate.getMonth() && currentDate.getDay() === birthdate.getDay()) {
//          dog.age++;
//     }
// }
// console.log(dog.age);
// isItMyDogsBirthday(dog);
// console.log(dog.age);


// arrayOfDogs = ["Fido", "Bruno","Sir Fetch\'alot", "Sweetie", "Boogie"]
// // Prompt 2:
// // const updateArrayOfDogs = (array, name1, name2, name3) => {
// //     lastDogIndex = array.length-1
// //     //console.log(lastDogIndex)
// //     console.log(`${array[lastDogIndex]} got adopted`)
// //     array.pop()
// //     array.push(name1)
// //     array.push(name2)
// //     array.push(name3)
// //     console.log(array)
// //     return array
// // }
// const updateArrayOfDogs =arrayOfDogs.splice(4,1,"tam","chase","Gatc")
// // updateArrayOfDogs(arrayOfDogs, "Joe", "Moe", "Curly");
// // updateArrayOfDogs(arrayOfDogs, "Sue", "Rat", "Psy");
// // updateArrayOfDogs(arrayOfDogs, "a", "b", "c");
// console.log(arrayOfDogs)

// const checkName =(parameter)=>{
//     if (parameter==="cody"){
//         console.log("is cody")
//     }else {
//     console.log("not")
// }

// }
// checkName("cody")
//console.log(Math.floor(2.5)) // round to lower
//console.log(new Date())

//RETURN..sending data back
// const returnNumber=()=>{
//     return 6
// }
// let myNum=5
// let myNumtwo=returnNumber()
// console.log(returnNumber())

//the difference
//
//make a variable called studentGrade. Write a function that takes a parameter called grade. Set the student's grade to 80. log it.
//change the grade to 55. Log it. Change grade to 99.
// function studentGrade(grade){
// console.log(grade)
// }
// studentGrade(80)
// const changedStudentGrade=(grade)=> grade
// console.log(changedStudentGrade(55))
// const newStudentGrade=(grade)=>grade
// console.log(newStudentGrade(99))


//Make an array of students in a kindergarten class. create a function that has a parameter of name and adds that name to the class.


//Make a user object. Make a function that takes user as a parameter and checks if their age is above 21 - add a new property to the object called canDrink and assign it true or false.
//If the user has no email log "User is unverfied"
let userOne={
    age:22,
    email:"@yahoo.com"
}
let userTwo={
    age:18,
    email:null
}
const fetchUserData=(userparam)=>{
    if (userparam.email===false){
        console.log("user undefined")
    }else {
        
        if(userparam.age<21){
            console.log("cant drink")
            userparam.canDrink=false
        } else{
            //console.log("can drink")
            userparam.canDrink=true
        }
        console.log(userparam)
    
        }
        
}
    
    fetchUserData(userOne)
    fetchUserData(userTwo)
    console.log(userOne)
    console.log(userTwo)
//Prompt 2: Make an array of students in a kindergarten class. create a function that has a parameter of name and adds that name to the class.
//Add 3 students to the class.

//Prompt 3: Make a user object. Make a function that takes user as a parameter and checks if their age is above 21 - add a new property to the object called canDrink and assign it true or false.
//If the user has no email log "User is unverfied"

//Prompt 4: Doggy Daycare. Make array of present dogs. Make function that takes a parameter of newDogs (array). take the array of new dogs and add them to the array of present dogs. (edited) 
