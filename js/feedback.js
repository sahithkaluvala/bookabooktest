

/*
<script>
       function validateForm() {
        var z=document.forms["contactcform"]["contactsubject"].value;
        var w=document.forms["contactcform"]["contactmsg"].value;
           var y=document.forms["contactcform"]["contactemail"].value;
          var robo=document.forms["contactcform"]["robo"].value;
  var x = document.forms["contactcform"]["contactname"].value;
  let namepattern = /^[a-zA-Z]{2,12}$/;
  let namepattern1 = /^[a-zA-Z]{2,20}$/;
  let namepattern2 = /^[a-zA-Z]{2,50}$/;
  let emailpattern=/^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/
  if (x == "") {
     document.getElementById("contactspn").innerHTML="Please enter your name";
    document.getElementById("contactspn").style.color="red";
    return false;
  }
  else if(!namepattern.test(x)){
    document.getElementById("contactspn").innerHTML="Please enter Valid name";
    document.getElementById("contactspn").style.color="red";
     return false;
     }
  else if(y== ""){
    document.getElementById("contactemailspn").innerHTML="Please enter your email ID";
    document.getElementById("contactemailspn").style.color="red";
    document.getElementById("contactemailspn").style.marginTop="6px";
      return false;
  }
  else if(!emailpattern.test(y)){
   document.getElementById("contactemailspn").innerHTML="Please enter your valid email";
   document.getElementById("contactemailspn").style.color="red";
   document.getElementById("contactemailspn").style.marginTop="6px";
      return false;
  }
  else if(z== ""){
    document.getElementById("contactsubjectspn").innerHTML="Please enter your subject";
    document.getElementById("contactsubjectspn").style.color="red";
    document.getElementById("contactsubjectspn").style.marginTop="6px";
      return false;
  }
  else if(!namepattern1.test(z)){
    document.getElementById("contactsubjectspn").innerHTML="Please enter Valid subject";
    document.getElementById("contactsubjectspn").style.color="red";
    document.getElementById("contactsubjectspn").style.marginTop="6px";
     return false;
     }
     else if(w== ""){
    document.getElementById("contactmsgspn").innerHTML="Please write a message";
    document.getElementById("contactmsgspn").style.color="red";
    document.getElementById("contactmsgspn").style.marginTop="6px";
      return false;
  }
     else if(!namepattern2.test(w)){
    document.getElementById("contactmsgspn").innerHTML="Please enter Valid message";
    document.getElementById("contactmsgspn").style.color="red";
    document.getElementById("contactmsgspn").style.marginTop="6px";

     return false;
     }
     else if(!robo.checked){
        document.getElementById("contactrobospn").innerHTML="Please check the box";
    document.getElementById("contactrobospn").style.color="red";
    document.getElementById("contactrobospn").style.marginTop="6px";
         return false;
     }
     else{
         alert("Form submmited");
     }
}
   </script>
   */
  let $ = function(id)
  {
  return document.getElementById(id);
  }
  function validateForm(){
  let firstname = $('fname');
  let lastname = $('lname');
  let emailId = $('emailid');
  let feedback = $('feedback');

  let namepattern = /^[a-zA-Z]{2,12}$/;
  let emailpattern=/^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;

  if(firstname.value == "")
  {
  //firstname.nextElementSibiling.innerHTML='Please enter firstname';
  document.getElementById('span1').innerHTML='Please Enter Your First Name';
  }
  else if(!namepattern.test(firstname.value)){
  document.getElementById("span1").innerHTML="Please enter Valid name";
  document.getElementById("span1").style.color="red";
  document.getElementById("span1").style.fontsize="1.2vw";
  
}
else{
  document.getElementById("span1").innerHTML="";
}
  if (lastname.value == "")
  {
  document.getElementById('span2').innerHTML='Please Enter Your Last Name';
  }
  else if(!namepattern.test(lastname.value)){
  document.getElementById("span2").innerHTML="Please enter Valid last name";
  document.getElementById("span2").style.color="red";
  document.getElementById("span2").style.fontsize="1.2vw";
  
}
else{
  document.getElementById("span2").innerHTML="";

} 
  if(emailId.value == ""){        
  //firstname.nextElementSibiling.innerHTML='Please enter firstname';
  document.getElementById('span3').innerHTML='Please Enter Your Email Id';
  }
  else if(!emailpattern.test(emailId.value)){
  document.getElementById("span3").innerHTML="Please enter Valid EMail Address";
  document.getElementById("span3").style.color="red";
  document.getElementById("span3").style.fontsize="1.2vw";
  
}
  else{            
      alert("Hi  " + firstname.value +  "   Your Feedback is Submitted !!!!  ")
  }

  }