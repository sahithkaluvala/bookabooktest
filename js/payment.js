
            $(document).ready(function() {
            $('input:radio').change(function() {
                if (this.value == 'cc') {
                    $(".creditcard").css("display", "inline");
                    $(".interac").css("display", "none");
                    
                }
                else if (this.value == 'interac') {
                    $(".creditcard").css("display", "none");
                    $(".interac").css("display", "inline");
                    }
                });
            });

            const form = document.querySelector('#ccpayment');
            const interacform = document.querySelector('#interacPayment');
            console.log(form);
            const cardele=document.querySelector('#cardvalue');
            const cardtype=document.querySelector('#cardsel');
            const emailv=document.querySelector('#emailVal');
            loadEventListeners();
               
                    function loadEventListeners() {
                    document.addEventListener('DOMContentLoaded', hide);
                    if(form)
                    form.addEventListener('submit', validateCard);
                    interacform.addEventListener('submit',validateEmail);
                   

            }
            function validateEmail(e){
                $("#ierrormessage").text('');
                
                var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
                if (!filter.test(emailv.value)) {
                    emailv.focus;
            
                    $("#ierrormessage").text("Please enter a valid email address");
                    $("#ierrormessage").css("color", "red");
                    $('#emailVal').val('');
                    

                }   

            }
            function hide(e){
              //  document.querySelector(".creditcard").style.display = 'none';
               // document.querySelector(".interac").style.display = 'none';
                $('.creditcard,.interac').hide();
               
            }
            $("#ccpayment,#interacPayment").submit(function(e){
                    e.preventDefault();
                });
                
            function validateCard(e){
                    e.preventDefault();
                    console.log("function called")
                    if(cardele.value.length > 16 || cardele.value.length<13 ){
                        console.log(cardtype.value)
                        document.getElementById("errormessage").textContent="Please enter a valid card number";
                        document.getElementById("errormessage").style.color="red";
                        
                    }
                    else if(cardtype.value === 'VISA'){
                        document.getElementById("errormessage").textContent=" "
                        var cardno = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;
                        if(cardele.value.match(cardno))
                                {
                                console.log("valid");
                                }
                            else
                                {
                                    document.getElementById("errormessage").textContent="Not a valid Visa credit card number!"
                                }

                    }
                    else if(cardtype.value === 'MASTER'){
                        var cardno = /^(?:5[1-5][0-9]{14})$/;
                        if(cardele.value.match(cardno))
                        {
                                    console.log("valid");
                        }
                        else
                        {
                                document.getElementById("errormessage").textContent="Not a valid Master credit card number!"
                        }
                    }
                    else if(cardtype.value === 'AMEX'){
                        var cardno = /^(?:3[47][0-9]{13})$/;
                        if(cardele.value.match(cardno))
                                {
                            return true;
                                }
                            else
                                {
                                    document.getElementById("errormessage").textContent="Not a valid Amercican Express credit card number!";
                               
                                }
                    }
                

                e.preventDefault();
            }
    function Validate()
    {
        var cardVal=document.getElementById("cardvalue").value;
        var prefix=cardVal.substring(0,2);
        var sum=0;
        if(cardVal.length!=16 && cardVal.length!=15)
        {   
            alert("Please enter a 15/16 digit card number")
        }
        else
        { if(prefix<51||prefix>55)
           alert("Please enter a 16d digit card number")
           else
           for(var i=0;i<16;i++)
           {
           var oddtempadd=cardVal.substring(+i+1,+i+2);
           var eventempadd=2*cardVal.substring(+i,+i+1);
           alert(eventempadd);
           //eventempadd=+eventempadd.substring(0,1) + +eventempadd.substring(1,2);
           alert(eventempadd+"dddd"+oddtempadd);
           i++;
           sum+= +eventempadd + +oddtempadd;
           eventempadd=0;
           oddtempadd=0;
           alert(sum);
           }
           if(sum%10==0)
           alert(" Web Site under progress");
        }
        

    }


