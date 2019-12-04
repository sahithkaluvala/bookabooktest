document.getElementById('button').onclick=function(){
    validateform();
} 
// window.onload = function(){
//     document.getElementById('button').onclick = validateform;
// }  
/*let $ = function(id){
    return document.getElementById(id);
} */

function validateform(){

    let name = document.getElementById('name');
    let namepattern = /^[a-zA-Z]{2,30}$/;
    if (name.value == '')
        name.nextElementSibling.innerHTML='please enter name';
    else if (!namepattern.test(name.value))
        name.nextElementSibling.innerHTML='please enter letter only';
    else
        name.nextElementSibling.innerHTML='validate';
    
    let email = document.getElementById('email');
    let emailpattern = /^\w([\.-]?\w+)*@\w([\.-]?\w+)*(\w{2,3})+$/;
    if (!emailpattern.test(email.value))
        email.nextElementSibling.innerHTML='it is not valid';
    else
        email.nextElementSibling.innerHTML='validate';

    let address = document.getElementById('address');
    if (address.value == '')
        address.nextElementSibling.innerHTML='please enter address';
    else
    address.nextElementSibling.innerHTML='validate';
    
    let phone = document.getElementById('phone');
    let phonepattern = /^[0-9]{10}$/;
    if (!phonepattern.test(phone.value))
        phone.nextElementSibling.innerHTML='it is not valid';
    else 
        phone.nextElementSibling.innerHTML='validate';

    let numofbook = document.getElementById('numofbook');
    let numofbookpattern = /^[0-9]{1,3}$/;
    if (!numofbookpattern.test(numofbook.value))
        numofbook.nextElementSibling.innerHTML='it is not valid';
    else 
    numofbook.nextElementSibling.innerHTML='validate';
}

