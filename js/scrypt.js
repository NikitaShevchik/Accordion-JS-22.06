"use strict"

const accordHeader = document.querySelectorAll('.accord__header');


for (let ac of accordHeader){
    ac.addEventListener('click', function(){
        ac.classList.toggle('_open');
        ac.parentNode.classList.toggle('_active')
    })
}