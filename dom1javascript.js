
'use strict'


 function addClass() {
    const user_input = document.getElementById('classinput').value;
    const class_to_change = document.getElementById('text');

    class_to_change.className = user_input;

 }

 function toggleclass1(){
    const class_to_change = document.getElementById('text1');
    if(class_to_change.className === 'none')
        class_to_change.className  = 'block';
    else
        if(class_to_change.className === 'block')
            class_to_change.className = 'none';
 }

 
 function toggleclass2(){
    const class_to_change = document.getElementById('text2');
    if(class_to_change.className === 'none')
        class_to_change.className  = 'block';
    else
        if(class_to_change.className === 'block')
            class_to_change.className = 'none';
 }

 
 function toggleclass3(){
    const class_to_change = document.getElementById('text3');
    if(class_to_change.className === 'none')
        class_to_change.className  = 'block';
    else
        if(class_to_change.className === 'block')
            class_to_change.className = 'none';
 }

 function changeToClicked(){
    const value_to_change = document.getElementById('bt');
    value_to_change.innerHTML = "clicked ! ";
    value_to_change.className = "noevents";
    
 }