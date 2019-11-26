function validate(){
 
   //window.alert("file");
   var user= document.getElementById("username").value;
   var pass=document.getElementById("password").value;
   var sum =0;
   
   if(user.length<=6 || pass.length==0) {
      alert("plaese enter correct username and password ");
   }
     
     else if ( pass.length<=5 ) {
      alert("password is small")
    } else {
      alert("Website under progress...");
    }

    
   
}

