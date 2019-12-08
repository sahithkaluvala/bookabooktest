'use strict';

$(document).ready(function() {
 
  localStorage.removeItem('name');
  $('#add').click(function() {
    var textbox = $('#username');
   
    var textbox1= $('#password');
    let namepattern = /^[a-zA-Z]{2,12}$/;
    let passpattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/;
   
    var task = textbox.val();
    var task1 = textbox1.val();
   
    /*checking conditions for validation */
    if (task === ''|| (!namepattern.test(task)))  {
      document.getElementById("dom").innerHTML="Please enter correct name ";
      textbox.focus();
    
      } else if (task1 === '' || (!passpattern.test(task1))) {
        document.getElementById("dom1").innerHTML="Please enter correct password";
        textbox1.focus();
      }
       else {
      let name = 'charmi';
      localStorage.setItem('name', name);
      var tasks = localStorage.C15tasks || ''; 
      var t1 = tasks.concat('password: '+ task1 , '\n'); 
      localStorage.C15tasks = t1.concat('name: '+ task, '\n'+'\n');
      textbox.val('');
      textbox.focus();
    }

    document.getElementById("username").value="";
    document.getElementById("password").value=""; 
  });
   
});

