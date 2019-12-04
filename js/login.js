/*function validate(){
 
   //window.alert("file");
   //var user = document.forms["cform"]["username"].value;
   var user= document.getElementById("username").value;
   var pass=document.getElementById("password").value;
   var sum=0;
   let namepattern = /^[a-zA-Z]{2,12}$/;
   //var sum =0;
   if (user==''){
   document.getElementById("dom").innerHTML="Please enter your name";
   document.getElementById("dom").style.color="red";
    //return false;
  }
  else if(!namepattern.test(user)){
    document.getElementById("dom").innerHTML="Please enter Valid name";
    document.getElementById("dom").style.color="red",'14s';
     //return false;

  }
  
  //local storage
  
}
*/

'use strict';

$(document).ready(function() {
  //alert(localStorage.getItem('name'));
  localStorage.removeItem('name');
  $('#add').click(function() {
    var textbox = $('#username');
   // document.getElementById("username").value="";
    var textbox1= $('#password');
   // document.getElementById("password").value="";
    
   
    var task = textbox.val();
    var task1 = textbox1.val();
    
    if (task1 === '')  {
      document.getElementById("dom1").innerHTML="Please enter correct your password ";
      //alert('Please enter your pass.');
      textbox1.focus();
    
      } else if (task === '') {
        document.getElementById("dom").innerHTML="Please enter your name";
        //alert('Please enter your name.');
        textbox.focus();
      } else {

      // add task to web storage
      let name = 'charmi';
      localStorage.setItem('name', name);

      var tasks = localStorage.C15tasks || ''; 
      var t1 = tasks.concat('password: '+ task1 , '\n');
     
      localStorage.C15tasks = t1.concat('name: '+ task, '\n'+'\n');

      // clear task text box and re-display tasks
      textbox.val('');
     // $('#text2').val(localStorage.C15tasks);
      textbox.focus();
    }
  });
});

