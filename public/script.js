
const form = document.querySelector("#form")
const scriptURL = 'https://script.google.com/macros/s/AKfycbweO9bIkKpG_4we13g1uFOPrdcJgrriZJwdnB6CwW0pYlM7Atm73oKrrrXJHM0dxXRi3w/exec'
const submitButton = document.querySelector("#submit")
const Message = document.getElementById("msgDelivered")
 form.addEventListener('submit', e => {
     submitButton.disabled = true
     e.preventDefault()
 
     const responseBody = new FormData(form)
     const TrendBody = responseBody.getAll("TRENDS").join(" ")
     responseBody.set('TRENDS', TrendBody)
     fetch(scriptURL, { method: 'POST', body: responseBody })
     .then(response => {
     Message.innerHTML = "Message sent successfully!!!"
     setTimeout(function() {
         Message.innerHTML = ""
     },5000)
     form.reset()      
 })
    .catch(error => {
     alert('Error!', error.message)
     submitButton.disabled = false
}
    )
 }) 

        

function themeOpen() {
 const theme = document.querySelector("#theme-img");
 const close = document.querySelector(".fa-times");
 const themeDiv = document.querySelector(".theme-div");
 const colorSelecion = document.querySelector(".color-selecion");
 const colorSelecionTwo = document.querySelector(".two");
 const colorSelecionThree = document.querySelector(".three");
 const colorSelecionFour = document.querySelector(".four");
 const windowSize = window.innerWidth;
 const windowHeight = window.innerHeight;

 colorSelecion.style.width = "30%";
 colorSelecionTwo.style.width = "30%";
 colorSelecionThree.style.width = "30%";
 colorSelecionFour.style.width = "30%";
 if (windowSize <= 600 || windowHeight <= 500) {
     themeDiv.style.width = "30%";
 } else if (windowSize <= 545 || windowHeight <= 500) {
   themeDiv.style.width = "50%";
 }else {
     themeDiv.style.width = "20%"
 }
}

function themeClose() {
 const theme = document.querySelector("#theme-img");
 const close = document.querySelector(".fa-times");
 const themeDiv = document.querySelector(".theme-div");
 const colorSelecion = document.querySelector(".color-selecion");
 const colorSelecionTwo = document.querySelector(".two");
 const colorSelecionThree = document.querySelector(".three");
 const colorSelecionFour = document.querySelector(".four");
 themeDiv.style.right = "0px";
 themeDiv.style.width = "0%";
 themeDiv.style.padding = "0px";
 themeDiv.style.height = "0vh";
 theme.style.display = "inline-block";
 close.style.display = "none";
 colorSelecion.style.width = "0"
 colorSelecionTwo.style.width = "0";
 colorSelecionThree.style.width = "0";
 colorSelecionFour.style.width = "0";
}  
function themeRed() {

const nav = document.querySelector(".nav");
const nav2 = document.querySelector(".nav2");
const main = document.querySelector("main");
const span = document.querySelector("span");
const buttons = document.querySelectorAll(".button");
const send = document.querySelector(".send");
const technologies = document.querySelectorAll("#html-level, #css-level, #react-level, #express-level, #tailwind-level");
const technologyPercentages = document.querySelectorAll("#html-percentage, #css-percentage, #react-percentage, #express-percentage, #tailwind-percentage");
const navHover = document.querySelectorAll(".nav2 div.home-home");
const themeDivs = document.querySelectorAll(".home-column");
const h3s = document.querySelectorAll(".center h3");
const labels = document.querySelectorAll(".label input");
const contactIcon = document.querySelectorAll(".fa-5x");

 nav.style.backgroundColor = "rgba(255, 56, 0, 0.7)";
 nav2.style.backgroundColor = "rgba(255, 56, 0, 0.7)";
 main.style.backgroundColor = "#ff3800";
 span.style.color = "#155263";
 buttons.forEach((button) => button.style.backgroundColor = "#155263");
 themeDivs.forEach((themeDiv) => themeDiv.style.backgroundColor = "rgb(255, 100, 50");
 technologies.forEach((technology) => technology.style.backgroundColor = "rgb(255, 100, 50)");
 technologyPercentages.forEach((technologyPercentage) => technologyPercentage.style.backgroundColor = "#155263");
 technologies.forEach((technology) => technology.style.border= "1px solid #ff3800");
 technologyPercentages.forEach((technologyPercentage) => technologyPercentage.style.border = "1px solid #ff3800");
 navHover.forEach((hover) => hover.style.backgroundColor = "#ff3800");
 h3s.forEach((h3) => h3.style.color = "#155263");
 labels.forEach((label) => label.style.backgroundColor = "rgb(255, 100, 50)");
 send.style.backgroundColor = "#155263";
 contactIcon.forEach((icon) => icon.style.color = "#155263");

/*    function bright() {
   const navHover = document.querySelectorAll(".nav2 div");
 
   navHover.forEach((hover) => hover.style.backgroundColor = "#ff3800");
 }
  return bright(); */
}
function themeBrown() {
 const nav = document.querySelector(".nav");
 const nav2 = document.querySelector(".nav2");
 const main = document.querySelector("main");
 const span = document.querySelector("span");
 const buttons = document.querySelectorAll(".button");
 const send = document.querySelector(".send");
 const technologies = document.querySelectorAll("#html-level, #css-level, #react-level, #express-level, #tailwind-level");
 const technologyPercentages = document.querySelectorAll("#html-percentage, #css-percentage, #react-percentage, #express-percentage, #tailwind-percentage");
const navHover = document.querySelectorAll(".nav2 div.home-home");
const themeDivs = document.querySelectorAll(".home-column");
 const h3s = document.querySelectorAll(".center h3");
 const labels = document.querySelectorAll(".label input");
const contactIcon = document.querySelectorAll(".fa-5x");
 

 nav.style.backgroundColor = "#d9b650";
 nav2.style.backgroundColor = "#d9b650";
 main.style.backgroundColor = "#83580b";
 buttons.forEach((button) => button.style.backgroundColor = "#00C7FF");
 themeDivs.forEach((themeDiv) => themeDiv.style.backgroundColor = "#ca9e1a");
 technologies.forEach((technology) => technology.style.backgroundColor = "#d9b650");
 technologyPercentages.forEach((technologyPercentage) => technologyPercentage.style.backgroundColor = "#00C7FF");
 technologies.forEach((technology) => technology.style.border= "1px solid #807664");
 technologyPercentages.forEach((technologyPercentage) => technologyPercentage.style.border = "1px solid #83580b");
 navHover.forEach((hover) => hover.style.backgroundColor = "#83580b");
span.style.color = "#00C7FF";
 h3s.forEach((h3) => h3.style.color = "#00C7FF");
 labels.forEach((label) => label.style.backgroundColor = "#d9b650");
 send.style.backgroundColor = "#155263";
 contactIcon.forEach((icon) => icon.style.color = "#00C7FF");

/* function bright() {
   const themeDivs = document.querySelectorAll(".nav2 div.home-home");

   themeDivs.forEach((themeDiv) => themeDiv.style.backgroundColor = "#552e5a");
 }*/
}

function themeBlue() {
const nav = document.querySelector(".nav");
const nav2 = document.querySelector(".nav2");
const main = document.querySelector("main");
const span = document.querySelector("span");
const buttons = document.querySelectorAll(".button");
const send = document.querySelector(".send");
const technologies = document.querySelectorAll("#html-level, #css-level, #react-level, #express-level, #tailwind-level");
const technologyPercentages = document.querySelectorAll("#html-percentage, #css-percentage, #react-percentage, #express-percentage, #tailwind-percentage");
const navHover = document.querySelectorAll(".nav2 div.home-home");
const contactIcon = document.querySelectorAll(".fa-5x");
const themeDivs = document.querySelectorAll(".home-column");
const h3s = document.querySelectorAll(".center h3");
const labels = document.querySelectorAll(".label input");

 nav.style.backgroundColor = "#49beb7";
 nav2.style.backgroundColor = "#49beb7";
 main.style.backgroundColor = "#085f63";
 themeDivs.forEach((themeDiv) => themeDiv.style.backgroundColor = "#688d8b");
 technologies.forEach((technology) => technology.style.backgroundColor = "#49beb7");
 technologyPercentages.forEach((technologyPercentage) => technologyPercentage.style.backgroundColor = "#ff3800");
 technologies.forEach((technology) => technology.style.border= "1px solid #085f63");
 technologyPercentages.forEach((technologyPercentage) => technologyPercentage.style.border = "1px solid #085f63");
 h3s.forEach((h3) => h3.style.color = "#ff3800");
 span.style.color = "#ff3800";
 buttons.forEach((button) => button.style.backgroundColor = "#ff3800");
 send.style.backgroundColor = "#ff3800";
 labels.forEach((label) => label.style.backgroundColor = "#688d8b");
 navHover.forEach((hover) => hover.style.backgroundColor = "#085f63");
 contactIcon.forEach((icon) => icon.style.color = "#ff3800");

 /*function bright() {
   const themeDivs = document.querySelectorAll(".nav2 div.home-home");

   themeDivs.forEach((themeDiv) => themeDiv.style.backgroundColor = "#552e5a");
 }*/

}
function themePurple() {
const nav = document.querySelector(".nav");
const nav2 = document.querySelector(".nav2");
const main = document.querySelector("main");
const span = document.querySelector("span");
const buttons = document.querySelectorAll(".button");
const send = document.querySelector(".send");
const technologies = document.querySelectorAll("#html-level, #css-level, #react-level, #express-level, #tailwind-level");
const technologyPercentages = document.querySelectorAll("#html-percentage, #css-percentage, #react-percentage, #express-percentage, #tailwind-percentage");
const navHover = document.querySelectorAll(".nav2 div.home-home");
const contactIcon = document.querySelectorAll(".fa-5x");
const themeDivs = document.querySelectorAll(".home-column");
const h3s = document.querySelectorAll(".center h3");
const labels = document.querySelectorAll(".label input");


nav.style.backgroundColor = "#cf7979";
nav2.style.backgroundColor = "#cf7979";
main.style.backgroundColor = "#552e5a";
themeDivs.forEach((themeDiv) => themeDiv.style.backgroundColor = "#8b5e5e");
technologies.forEach((technology) => technology.style.backgroundColor = "#cf7979");
technologyPercentages.forEach((technologyPercentage) => technologyPercentage.style.backgroundColor = "#ff3800");
technologies.forEach((technology) => technology.style.border= "1px solid #552e5a");
technologyPercentages.forEach((technologyPercentage) => technologyPercentage.style.border = "1px solid #552e5a");
h3s.forEach((h3) => h3.style.color = "#0962ea");
span.style.color = "#0962ea";
buttons.forEach((button) => button.style.backgroundColor = "#0962ea");
send.style.backgroundColor = "#0962ea";
labels.forEach((label) => label.style.backgroundColor = "#cf7979");
navHover.forEach((hover) => hover.style.backgroundColor = "#552e5a");
contactIcon.forEach((icon) => icon.style.color = "#0962ea");

/*function bright() {
 const themeDivs = document.querySelectorAll(".nav2 div.home-home");

 themeDivs.forEach((themeDiv) => themeDiv.style.backgroundColor = "#552e5a");
}
*/
}