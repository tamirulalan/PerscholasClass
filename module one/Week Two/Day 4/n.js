// // class Game {
// //     constructor(name, maxNumberOfPlayers) {
// //       this.name = name;
// //       this.maxNumberOfPlayers = maxNumberOfPlayers;
// //     }
// //   }
  
// //   //Using a class
// //   let newGame = new Game("Monopoly", 8)
// //   let newGame2 = new Game("UNO", 10)
  
// //   console.log(newGame.name)
// //   console.log(newGame2.maxNumberOfPlayers)
// //   //Prints:
// //   //Monopoly 
// //   //UNO

// //Game class
// class Game {
//     constructor(name, maxNumberOfPlayers) {
//       this.name = name;
//       this.maxNumberOfPlayers = maxNumberOfPlayers;
//     }
//   }
//   //The Videogame class inherits properties from the Game class
//   class Videogame extends Game {
//     constructor(name, maxNumberOfPlayers, platforms) {
//       super(name, maxNumberOfPlayers);
//       this.platforms = platforms; 
//     }
//   }
//   //Creates two new videogame objects
//   let newVideogame1 = new Videogame("The Legend of Zelda: Breath of the Wild", 1, ["Nintendo Switch"]);
//   let newVideogame2 = new Videogame("Stardew Valley", 4, ["PC", "Nintendo Switch", "Android", "PS", "XBOX"]);
  
//   console.log(newVideogame1.name);
//   //Prints The Legend of Zelda: Breath of the Wild
//   newVideogame2.platforms.forEach((p) => {
//     console.log(p)
//   })
//   //Prints:
//   //PC
//   //Nintendo Switch
//   //Android
//   //PS
//   //XBOX

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

userOne.email ="tamirumelese@yahoo.com"
userOne['email']
 userOne.login();
// userOne.logout();
