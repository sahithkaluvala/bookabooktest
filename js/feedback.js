  let $ = function(id)
  {
  return document.getElementById(id);
  
  };

  window.onload = function(){
    
    var retrievedObject = sessionStorage.getItem("feedbacks");
    
   let fname = sessionStorage.getItem("firstnameStore");
   let lname = sessionStorage.getItem("lastnameStore");
   let emailID = sessionStorage.getItem("emailStore");
   let fb = sessionStorage.getItem("feedbackStore"); 
     
    if(!(retrievedObject == null))
{
  document.getElementById("box").innerHTML=`<span> Hi \' ${fname} \' your form already is submitted, Thank You <span><br><br><span>Email id : \ ${emailID} \</span><br><br><br><br><span style="color:#fdaf48;">Your Given Feedback    :<h4>  \ ${fb} \</h4> <span>`   ;  
  document.getElementById("box").firstChild.style.color="#fdaf48";   
  document.getElementById("box").firstChild.style.fontsize="90px";
}
  }

 
  function validateForm(){
    let firstname = $('fname');
    let lastname = $('lname');
    let emailId = $('emailid');
    let feedback = $('feedback');
    console.log("startttt");
  

  let namepattern = /^[a-zA-Z]{2,12}$/;
  let emailpattern=/^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
  let Store={
    'fn': '',
    'ln': '',
    'email':'',
    'feedbackstr':''
  }

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
else {
  document.getElementById("span1").innerHTML="";
  Store.fn=firstname.value;
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
else {
  Store.ln=lastname.value;
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
     
    document.getElementById("span3").innerHTML="";
         if(!(firstname.value===''||lastname.value===''||emailId.value===''))  {     
      alert("Hi  " + firstname.value +  "   Your Feedback is Submitted !!!!  ")
      feedbackstore.email=emailId.value;
      
    document.getElementById("box").innerHTML=`<span> Hi \' ${feedbackstore.email} \' your form is submitted <span><br><br><span style="color:rgb(120, 120, 197);"> Feedback    :   ${feedback.value}  <span>`   ;  
    document.getElementById("box").firstChild.style.color="blue";   
    document.getElementById("box").firstChild.style.fontsize="90px";

    console.log(feedbackstore);
    sessionStorage.setItem('feedbacks', JSON.stringify(feedbackstore));
    
    
sessionStorage.setItem("feedbackStore", feedback.value );
Store.feedbackstr=sessionStorage.getItem("feedbackStore");
  
  sessionStorage.setItem("emailStore", emailId.value );
  Store.email=sessionStorage.getItem("emailStore");
  
  sessionStorage.setItem("firstnameStore", firstname.value );
  Store.fn=sessionStorage.getItem("firstnameStore");
  
  sessionStorage.setItem("lastnameStore", lastname.value );
  Store.ln=sessionStorage.getItem("lastnameStore");
  
  
  sessionStorage.setItem('feedbacks', JSON.stringify(Store));
  
  document.getElementById("box").innerHTML=`<span> Hi \' ${Store.fn} \' your form is submitted <span><br><br><span>Email id :  ${Store.email} </span><br><br><br><br><span style="color:#fdaf48;">Your Given Feedback    :<h4>  \ ${Store.feedbackstr} \</h4> <span>`   ;  
  document.getElementById("box").firstChild.style.color="#fdaf48";   
  document.getElementById("box").firstChild.style.fontsize="90px";

  }

  }