'use strict'

const $ = document.querySelector.bind(document);
const textarea = document.getElementById('mytextinput');

$('#myButton').addEventListener('click', function() {
    var input = document.getElementById('mytextinput').value; //search mytestinput from index.html and and sets on input variable
    //if input is null it will show an alert 
    if (input == ' ') {
        alert("Please type something");
    } else {
        var box = document.getElementById('box'); //create box and sets it in box variable
        var list = document.createElement('ul'); //create List and sets it in li variable
        textarea.classList.add('completed'); //
        list.innerHTML = input; //take value from input and set it to innerhtml of li.
        box.appendChild(list); //
        document.getElementById('mytextinput').value = " ";
        list.addEventListener('click', e => { //this function create a line through when list is clicked
            list.style.textDecoration = 'line-through';
        });

    }

});