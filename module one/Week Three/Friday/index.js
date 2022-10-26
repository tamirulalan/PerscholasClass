let myBody = document.getElementById("main")
myBody.style.backgroundColor ="rgb(118,181,197)"
let myElement = document.getElementById('heading');
// getting the HTML element with id of "myid" and setting it to a variable
console.dir(myElement)
myElement.style.border ="3px solid blue"
myElement.style.fontSize = "20px"

//getting the second element
let myElement1 = document.getElementById('head');
myElement1.innerText = "Green Goose Bistro"
myElement1.style.border ="2px solid blue"
myElement1.style.fontSize = "20px"

//getting the third element
let myElement2 = document.getElementById('hd');
myElement2.style.border ="2px solid blue"
myElement2.style.fontSize = "20px"
let myTop = document.getElementById("top")
myTop.style.backgroundColor ="grey"


// let navButton = document.querySelectorAll(".nav-button")
// console.log(navButton)
// navButton.foreach((item)=>{
//     //item.addEventListner('click',()=>){
//     item.style.backgroundColor = "red"
//     }


// myElement.innerText = "CSS Practice"
// // now that we have the element - we are changing it's text from JS
// let mySecondElement = document.querySelector('.my-class');
// // getting the HTML element - here we can search by type (div, p, h1), class (".my-class"), or ID ("#myid")
// // we are only returning ONE element (the first)
// let mySeletedElements = document.querySelectorAll('div');
// // getting the HTML elements - here we can search by type (div, p, h1), class (".my-class"), or ID ("#myid")
// // we are only returning MANY elements
// let myclassElements = document.getElementsByClassName('my-class');
// // getting the HTML elements - here we can search class ("my-class")
// // we get a NodeList of the elements
// ///////////////////////// more advanced
// let arrayOfElements = Array.from(mySeletedElements);
// console.log(arrayOfElements);
// console.log(arrayOfElements.map((item) => {
//     console.log(item);
// }));
let myPhoto = document.getElementById("sura")
myPhoto.style.marginBottom ="40px"

// let gooseImage=document.getElementById("goose-img")
// console.log(gooseImage.getAttribute('alt'))
// gooseImage.setAttribute('src',"https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FDomestic_goose&psig=AOvVaw2iBmUma6xXkbogGivL-Gyw&ust=1666452744552000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCNDyprHS8foCFQAAAAAdAAAAABAE")

const output = document.querySelector('.output');
const userVal =
document.querySelector('input[name="userName"]');
const btn = document.querySelector('button');
userVal.style.borderColor = '#333';
btn.onclick = ()=>{
if(userVal.value.length > 3){
const message = `Welcome to the site ${userVal.value}`;
output.textContent = message;
userVal.style.display = 'none';
btn.style.backgroundColor = 'yellow';
}
else{
output.textContent = 'Name length must be 3+ characters';
userVal.style.borderColor = 'red';
}
}
let Button = document.querySelector("button")
Button.style.backgroundColor ="blue"