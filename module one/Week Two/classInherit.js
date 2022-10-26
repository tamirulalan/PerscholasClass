// // =========== Inheritance ============ //
// class ShewaFamily{
//   constructor(name, dob, hairColor){
//   this.name = name
//   this.dob = dob
//   this.hairColor = hairColor }
//   brushTheirTeeth() {
//     console.log(`${this.name} brush their Teeth`)
//   }
//   eatsDinner(){
//     console.log(`${this.name} eats dinner`)
//   }
//   job(work){
//     return (`My job is ${work}`)
//   }
// }
// const Bele = new ShewaFamily('Belete', '05/04/98', 'brown')
// Bele.brushTheirTeeth()

// class PostalWork extends Person {
//   wearsHat(){
//   console.log(`${this.name} wears hats`)
// }
//   driveSafe(){
//     console.log(`${this.name} drives safe`)
//   }
//   protestWages(){
//     console.log(`${this.name} protest their wages at the local Starbucks`)
//   }
// }
// class Chef extends Person {
//   washesHands(){
//     console.log(`${this.name} washes their hands often`)
//   }
//   sharesFood(){
//     console.log(`${this.name} shares food with the hungry`)
//   }
//   sleepsLate(){
//     console.log(`${this.name} sleeps late on the weekend`)
//   }
// }
// const Sam = new PostalWork ("Sam", '04/12/75', "black")
// Sam.protestWages()
// Sam.driveSafe()
// Sam.wearsHat()

// const Sara = new PostalWork ("Sara", '01/23/00', "red")
// Sara.driveSafe()
// Sara.wearsHat()
// Sara.protestWages()

// const Kenny = new Chef ('Kenny', '03/09/96', 'blonde')
// Kenny.sharesFood()
// Kenny.sleepsLate()
// Kenny.washesHands()

// const Mike = new Chef ('Mike', '10/5/91', 'white')
// Mike.sharesFood()
// Mike.sleepsLate()
// Mike.washesHands()

// ================ Hungry for More ================ //
// class BankAccount {
//     constructor(ownerName, balance, acctNum) {
//       this.ownerName = ownerName;
//       this.balance = balance;
//       this.acctNum = acctNum;
//     }
//     deposit(money) {
//       this.balance += money;
//       console.log(`Your new balance is ${this.balance}, ${this.ownerName}!`);
//     }
  
//     withdraw(money) {
//       this.balance -= money;
//       console.log(`Your new balance is ${this.balance}, ${this.ownerName}!`);
//     }
//   }
  
  // let PNC = new BankAccount('Yishaq',5000,'332231' )
  // PNC.deposit(1000)
  // PNC.withdraw(4000)
  
//   class CheckingAccount extends BankAccount {
//     constructor(ownerName, balance, acctNum, overdraftEnabled = true) {
//       super(ownerName, balance, acctNum);
//       this.overdraftEnabled = overdraftEnabled;
//     }
//     withdraw(money) {
//       if (this.balance - money < 0 && this.overdraftEnabled == false) {
//         console.log("sorry");
//       } else {
//         super.withdraw(money);
//       }
//     }
//     deposit(money) {
//       super.deposit(money);
//     }
//   }
  
//   // let Sammy = new CheckingAccount('Sam', 4000, '232132', false)
//   // Sammy.withdraw(4000)
//   // Sammy.deposit(100000)
  
//   class SavingsAccount extends BankAccount {
//     // Override withdraw to disallow withdrawals completely :)
//     constructor(ownerName, balance, acctNum) {
//       super(ownerName, balance, acctNum);
//     }
//     withdraw(money) {
//       console.log(`Better keep your money, ${this.ownerName}!`);
//     }
  
//     deposit(money) {
//       super.deposit(money);
//     }
//   }
  
//   let Mack = new SavingsAccount("Mack", 10000000, "23121212");
//   Mack.withdraw(4000);
//   Mack.deposit(23);