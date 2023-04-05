let body = document.querySelector("body");
let button = document.querySelector('button');
let h1 = document.querySelector('h1');
button.addEventListener('click', changeOpacity);

function changeOpacity(){
    h1.classList.toggle('contentOpacity');
    body.classList.toggle("bodyOpacity");
}