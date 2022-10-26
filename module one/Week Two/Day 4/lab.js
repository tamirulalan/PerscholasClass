/*Make 2 arrays - loggedInUsers, and loggedOutUsers
Make an array of 10 first names, another array of 10 lastNames, and an array of 10 professions

Make a class of User that is the parent class of Admin.


Use a for loop to create 25 normal users and 5 admin users. When creating the users - randomly select the first name, last name, and profession. I want you to also 
generate an gmail address (just a string - dont make an actual acount lol) from scratch using the user's name and a random number.


User should have normal properties and some functions including login and logout that will add/remove themselves from the user arrays. 

Admins are the same but they are able to "logout" other users as well as change their email addresses.
*/

let firstName = ['Hadia','Chase','Richard','Gary','Kasper','Tishana','Makayla','Judah','Denisse','Mike'];
let lastName  = ['Smith','Harris','Jiminez','Ortega','Torres','Despojo','Hall','Almazan','Wheeler']
let profession = ['Developer','Plumber','Students', 'Teacher', 'player', 'Pastor', "Machinist",'engineering','Thearapist', 'Realitor']

class user {
    constructor(firstName,lastName,email,profetional){
        this.firstName = firstName;
        this.lastName = lastName;
        this.email =`${this.firstName}${Math.random*10}@gmail.com`;
        this.profession =profession;
    }
}
// const Richard=new User(firstName[Math.floor(Math.random() * firstName.length)],lastName[Math.floor(Math.random()  lastName.length)],profession[Math.floor(Math.random() * profession.length)]);
// console.log(Richard)

// class admin extends user{
//     super()
//     {
//         generaterandomPipeName():
//     }
// }
// const autoGenUsers = (arr = [], addToArr = []) =>
// {
//     let e= 0;
//     for (let id = 0; id < arr.length; id++) 
//     {
        
//         //element = arr[id];
//         var fn = firstName[Math.ceil(Math.random()* firstName.length) - 1];
//         var ln = lastName[Math.floor(Math.random()* lastName.length)];
//         var pf = profession[Math.floor(Math.random()* profession.length)];
//         var rn = Math.floor(Math.random() *lastName.length);
//         if (e >= 4)
//         {
//             var ad = new admin(ln + fn + rn + '@gmail.com', fn,ln,pf,false);
//             e = 0;
//             addToArr.push(ad);
//         }
//         var nU = new User(ln + fn + rn + '@gmail.com', fn, ln, pf, false);
//         addToArr.push(nU);
//     }
// };
// autoGenUsers(firstName,loggedOutUsers);
