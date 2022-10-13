// const house={
//     doors:3
// }

// house.window=30
// console.log(house)

// const cohort = {
//     id: 'SEIR Flex Madeline',
//     students: ['Diana', 'Julio', 'Cory'],
//     instructors: ['Arthur', 'Nando', 'Teo', 'Sean'],
//     addStudent: function(name) {
//       name = name[0].toUpperCase() + name.substr(1).toLowerCase();
//       this.students.push(name);
//     },
//     pickRandomStudent: function() {
//       const rndIdx = Math.floor(Math.random() * this.students.length);
//       return this.students[rndIdx];
//     }
//   };

// function makeGamePlayer(name,totalScore,gamesPlayed) {
//   //should return an object with three keys:
//   // name
//   // totalScore
//   // gamesPlayed

//    var obj = {
//        this.name =  name;
//        this.totalScore = totalScore;
//        this.gamesPlayed = gamesPlayed;
//     }
//   }
// class vehicle{
//  constructor(speed,color){
//   this.vehiclespeed=speed;
//   this.vehiclecolor=color
//   this.logSpeed=()=>{
//     console.log("This is where I will log my speed")
//   }
// }
// }
// const myNewCar=new vehicle(240, "yellow")
// const mylesNewCar=new vehicle (300, "blue")
// console.log(myNewCar)
// //console.log(myNewCar.logSpeed())

//prompt 1: Use class Vehicle to make 3 new vehicles called plane, car, and train.
// class vehicle {
//   constructor(name, owner,color) {
//     this.name = name;
//     this.owner = owner;
//     this.color = this.color;
//   }
// }

// const plane = new vehicle("BMW", "tam","Red");
// const car =new vehicle("Hawndi", "mnye","silver")
// const train =new vehicle("Ford", "sala", "white")

// console.log(plane)
// console.log(car)
// console.log(train)

//prompt 2: Add a new property to class Vehicle called "vehicleYear" (and the parameter "year).

// class vehicle {
//   constructor(name, owner,color) {
//     this.name = name;
//     this.owner = owner;
//     this.color = color;
//     this.vehicleYear="year"
//   }
// }

// const plane = new vehicle("BMW", "tam","Red", 2018);
// const car =new vehicle("Hawndi", "mnye","silver", 2016)
// const train =new vehicle("Ford", "sala", "white", 1999)

// console.log(plane)
// console.log(car)
// console.log(train)

/*prompt 3: Add a new property to class Vehicle called "logVehicleInformation" 
that will log the speed, color, owner, and year of the vehicle.*/
// class vehicle {
//   constructor(name, owner,color,vehicleYear) {
//     this.name = name;
//     this.owner = owner;
//     this.color = color;
//     this.vehicleYear = vehicleYear;
//     this.logVehicleInformation =()=>{
//       console.log(`this vehicle is owned by ${owner}. it is ${color} and ${name} model. it is manufacture in ${vehicleYear}`)
//     }

//   }
// }
// const plane = new vehicle("BMW", "tam","Red", 2018);
// console.log(plane)
/*Prompt 4: Create a new class called "Doctor" that will make new objects. 
The class should have at least 4 properties (for example "age"). 
One property should be a function that will log "time to go to work!". 
One property should be a list of coworkers.*/
class Doctor {
  constructor (specialization, age,coworkers){
  this.specialization =specialization;
  this.age =age;
  this.coworkers =coworkers;
  this.timeToWork=()=>{
   console.log("time to go to work")
  }
  }
}
let Tam = new Doctor("no",34, ["hfs","bvsb"])
Tam.timeToWork()
console.log(Tam)


/*Prompt 5: create a new class called "User" that will make new objects.
 The class should have user information and the ability to login the 
 user and logout the user - console.log("you are logged in!");*/
 class user{
  constructor(age,name,email){
    this.age=age
    this.name=name
    this.accountCreated=new Date()
    this.email=email
    this.logInUser=()=>console.log("you are login")
    this.logOutUser=()=>console.log("you are logout")
 }
 }
 let Tam =new user(19,"tam", "@yahoo",)
