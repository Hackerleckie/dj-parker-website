const words = [
"Software Developer",
"Web Designer",
"Android App Developer",
"Hardware Engineer",
"Networking Specialist"
];

let index = 0;

function changeText(){

document.getElementById("typing").textContent = words[index];

index++;

if(index >= words.length){

index = 0;

}

}

changeText();

setInterval(changeText,2000);
function toggleMenu(){

const menu = document.getElementById("menu");

menu.classList.toggle("active");

}