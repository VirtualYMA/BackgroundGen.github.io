var color1 = document.getElementById('color1');
var color2 = document.getElementById('color2');
var colorDetails = document.querySelector('h3');
var backgrounds = document.getElementById('gradient');


const Mybackground = () => {
    backgrounds.style.background = "linear-gradient(to right, " 
    + color1.value 
    + "," 
    + color2.value 
    + ")";

    colorDetails.textContent = backgrounds.style.background + ";";
}
color1.addEventListener("input", Mybackground)

color2.addEventListener("input", Mybackground)

