// const adventurer = {
// 	name: 'Timothy',
// 	hitpoints: 10,
// 	belongings: ["sword", "potion", "Tums"],
// 	companion: {
// 		name: "Velma",
// 		type: "Bat",
// 		companion: {
// 			name: "Tim",
// 			type: "Parasite",
// 			belongings: ["SCUBA tank", "sword", "3 children"]
// 		}
// 	}
// }
// // for (let i=0; i < adventurer.belongings.length; i++) {
// // 	console.log(adventurer.belongings[i]);
// // }
// console.log(adventurer.companion.companion.belongings[0])
// console.log(adventurer.companion.type

// const adventurer = {
// 	name: 'Timothy',
// 	hitpoints: 10,
// 	belongings: ["sword", "potion", "Tums"],
// 	companion: {
// 		name: "Velma",
// 		type: "Bat",
// 		companion: {
// 			name: "Tim",
// 			type: "Parasite",
// 			belongings: ["SCUBA tank", "Rogan josh", "health insurance"]
// 		}  
// 	}
// }
// //What would your write to: console.log "health insurance"
// console.log(adventurer.companion.companion.belongings[2])

// const movies = [ { title: "Tokyo Story", year: 2018 },  { title: "Paul Blart: Mall Cop" }, { title: "L'Avventura" } ];
// // console.log(movies[0].year)
// for (let i=0; i < movies.length; i++) {
// 	console.log(movies[i].title);
// }

var userOne = {
    email: 'ryu@ninjas.com',
    name: 'Ryu',
    login(){
        console.log(this.email, 'has logged in');
    },
    logout(){
        console.log(this.email, 'has logged out');
    }
};

userOne.email = "tamiratako@yahoo.com"
console.log(userOne.email)
userOne.login();
userOne.logout();