    function validateName(str){

      let namepattern = /^[a-zA-Z\. ]{2,22}$/;
      if( str == "" || (!namepattern.test(str)))
      return true

      else 
      return false

    }
    function validateEmail(str){
      let emailpattern=/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
       if(str == "" || (!emailpattern.test(str)))
       return true
       else 
       return false
    }
    function CanadaAddressValidation(str){
      let adrspattern = /^\d+\s[A-z]+\s[A-z]+/;
      if( str == "" || (!adrspattern.test(str)))
       return true
       else 
       return false
    }
    function CanadaCityValidation(str){
      let citypattern=/^[a-zA-Z\. ]{2,22}/
      if( str == "" || (!citypattern.test(str)))
      return true
      else 
      return false

    }
    function CanadaZipValidation(str){
      let zippattern=/^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/;
      if( !(zippattern.test(str)))
      return true
      else 
      return false
    }
    function validatePhone(str) {
      const phonepattern = /^\(?\d{3}\)?[-. ]?\d{3}[-. ]?\d{4}$/;
    
      if(!phonepattern.test(phone.value))
        return true
       else 
        return false
    }