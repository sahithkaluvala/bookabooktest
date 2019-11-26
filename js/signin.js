function v(){
    var firstname= document.getElementById("fname").value;
    var lastname=document.getElementById("lname").value;
    var mail=document.getElementById("email").value;
    var pass=document.getElementById("psw").value;
    var check=document.getElementById("check").value;
    var sum =0;
    let emailpattern=/^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/
    
    if(firstname.length==0 || lastname.length==0 || mail.length==0 || pass.length==0) {
       alert("filed is blank ")
    }
    else if(!emailpattern.test(mail)){
        alert("format is not correct..")
    }
    else if(!check.checked){
        alert("checkbox is not selected...")
    }
    else if(pass.length<=6){
        alert("password is small..")
    }
     else  {
       alert("Form submmited")
     }
 
}