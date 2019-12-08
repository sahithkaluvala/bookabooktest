
'use strict';

$(document).ready(function() {
 
  localStorage.removeItem('name');
  $('#add').click(function() {
    var textbox = $('#fname');
    var textbox1= $('#mail');
    var textbox2=$('#psw')
    var textbox3=$('#lname')

    let namepattern = /^[a-zA-Z]{2,12}$/;
    let passpattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/;
    let mailpattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   
   
    var task = textbox.val();
    var task1 = textbox1.val();
    var task2 = textbox2.val();
    var task3= textbox3.val();
    
    //checking the conditions

    if (task === ''|| (!namepattern.test(task))) 
     {
      document.getElementById("dom").innerHTML="Please enter correct name ";
      textbox.focus();
    
      }else if (task1 === '' || (!mailpattern.test(task1))) {
        document.getElementById("dom1").innerHTML="Please enter correct email";
        textbox1.focus();
      } 
       else if (task2 === '' || (!passpattern.test(task2))) {
        document.getElementById("domp").innerHTML="Please enter correct password";
        return false();
      }
      else if (task3 === '' ) {
        document.getElementById("doml").innerHTML="Please enter last name";
        return false();
      } 
     
      else {
      let name = 'charmi';
      localStorage.setItem('name', name);
      var tasks = localStorage.C15tasks || ''; 
      var t1 = tasks.concat('mail: '+ task1 , '\n'); 
      localStorage.C15tasks = t1.concat('name: '+ task, '\n'+'\n');
      textbox.val('');
      textbox.focus();
    }

    
    document.getElementById("fname").value="";
    document.getElementById("mail").value=""; 
    document.getElementById("psw").value=""; 
    document.getElementById("lname").value=""; 
   
    
  });
   
});

