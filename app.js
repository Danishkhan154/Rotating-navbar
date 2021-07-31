console.log("in javascript")
const open = document.getElementById('open');
const close = document.getElementById('close');
const container = document.querySelector('.container');

open.addEventListener('click' , addClass);
close.addEventListener('click' , removeClass);

function addClass(){
    container.classList.add('show-nav');
}

function removeClass() {
    container.classList.remove('show-nav');
}