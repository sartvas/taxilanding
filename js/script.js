"use strict";

const myBtn = document.querySelectorAll('button');

const myDiv = document.createElement('div');

myDiv.classList.add('black-div');


console.log(myBtn.forEach(item =>{
    item.onclick = function(){
        document.querySelector('.reasons_advant').prepend(myDiv);
        console.log('click')
    }
}));

myDiv.innerHTML = '<h1>Hello</h1>'
