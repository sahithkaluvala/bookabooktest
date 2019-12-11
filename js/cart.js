const xhr = new XMLHttpRequest();
//console.log(window.location.href.split("/")[3]);
let items;
xhr.open('GET', 'json/cart.json', true);
xhr.onload = function(){
  
  if(this.status === 200) {
    // console.log(this.responseText);
    //const items = JSON.parse(this.responseText);
    console.log(localStorage.getItem('items'));
    if(!(localStorage.getItem('items'))){
    localStorage.setItem('items', JSON.stringify(JSON.parse(this.responseText)));
    console.log("going in")  
    }
    items=JSON.parse(localStorage.getItem('items'));
    console.log(items); 
    
    let output = '';
    let count=0;
        
        items.forEach(function(item){
            count++;
            let t=`finalPrice${count}`;
            console.log(item.productCode+"   qqq   "+  item.qty )
            output += `
            
              
              <li>
              <a href="Product.html"> ${item.name} <img id='book${count}' src="${item.imgSrc}" alt='book${count}' height="59px" width="30px" ></a> 
              <span class="price"> <input type="button" value="+" onclick="up(10,'qty${count}',${item.price},${item.productCode})"> <input  disabled type="number" id="qty${count}" size="1"  value="${item.qty}" min="0"><input type="button" value="-" onclick="down('0','qty${count}',${item.price},${item.productCode})"><span class="totals" id="finalPrice${count}">$${item.qty*item.price}</span></span>
          </li>
          `;
          });
          output+=`<li >
          Total <span class="totPrice" id="totPrice" style="color:black">$11</span>

             </li>`;
          //console.log(output);
         document.getElementById("fCart").innerHTML=output;
            }
}

xhr.send();
   // window.onload=up(10,'qty2',2);
    
function up(max,qty,price,productsCode) {
    console.log(qty);
    let tPrice="finalPrice"+qty.charAt(qty.length-1);
    console.log(tPrice);
    console.log(document.getElementById(tPrice).textContent.substr(0,document.getElementById(tPrice).textContent.length-1));

    
    document.getElementById(qty).value = parseInt(document.getElementById(qty).value) + 1;
    if (document.getElementById(qty).value >= parseInt(max)) {
      document.getElementById(qty).value = max;
    }
    items.forEach(function(item){
      console.log(productsCode+"==="+item.productCode);
      if(productsCode == item.productCode)
      {
        item.qty=document.getElementById(qty).value;
        console.log("reached inner if")
      }
      localStorage.setItem('items', JSON.stringify(items));
    });
    document.getElementById(tPrice).innerHTML=`$${document.getElementById(qty).value*price}`;//("afterend","$"+(document.getElementById(qty).value*2))  // `${document.getElementById(qty).value*2} sfdjknkjjsdnfkjnkjjn$`;
    calTotal();
}
function down(min,qty,price,productsCode) {
    console.log(qty);
    let tPrice="finalPrice"+qty.charAt(qty.length-1);
    
    document.getElementById(qty).value = parseInt(document.getElementById(qty).value) - 1;
    if (document.getElementById(qty).value <= parseInt(min)) {
      document.getElementById(qty).value = min;
    }
    items.forEach(function(item){
      console.log(productsCode+"==="+item.productCode);
      if(productsCode == item.productCode)
      {
        item.qty=document.getElementById(qty).value;
        console.log("reached inner if")
      }
      localStorage.setItem('items', JSON.stringify(items));
    });

// document.querySelector(price).innerHTML=`${document.getElementById(qty).value*price} $`;//("afterend","$"+(document.getElementById(qty).value*2))  // `${document.getElementById(qty).value*2} sfdjknkjjsdnfkjnkjjn$`;
    document.getElementById(tPrice).innerHTML=`$${document.getElementById(qty).value*price}`;
    calTotal()
}

 function calTotal(){
     let temp=document.getElementsByClassName("totals");
     let sum=0;
     console.log("-------------------------------"+temp.length);
     for(let i=0;i<temp.length;i++){
         console.log(temp[i].textContent.substr(1,temp[i].textContent.length-1))                ;
       sum+= parseInt(temp[i].textContent.substr(1,temp[i].textContent.length-1));
     }
     console.log(sum)
     
     document.getElementById("totPrice").innerHTML=`Total Cart Value : $${sum}`;
     localStorage.setItem('Total', JSON.stringify(sum));
 }

 let billingAddress={
  "SFullName": "",
  "Semail": "",
  "SAddr":"",
  "SCity":"",
  "SState":"",
  "SZip":"",
  "Sphone":""
}
function cartForm(){
  
    let fname= document.getElementById("fname").value;
    let email= document.getElementById("email").value;
    let adrs= document.getElementById("adr").value;
    let city= document.getElementById("city").value;
    let state= document.getElementById("state").value;
    let zip=document.getElementById("zip").value;
    let phone=document.getElementById("phone").vlaue;
    //var errorspan = document.createElement('span');


     if( validateName(fname))
      {
      document.getElementById("span1").innerHTML="Please enter Valid name";
      document.getElementById("span1").style.color="red";
      document.getElementById("span1").style.fontsize="1.2vw";
      }
      else
      {
      document.getElementById("span1").innerHTML="";
      billingAddress.SFullName=fname;
      if( validateEmail(email))
      {
      document.getElementById("span2").innerHTML="Please enter Valid email ID";
      document.getElementById("span2").style.color="red";
      document.getElementById("span2").style.fontsize="1.2vw";
      }
      else
      {
       document.getElementById("span2").innerHTML="";
       billingAddress.Semail=email;
       if( CanadaAddressValidation(adrs))
       {
       document.getElementById("span3").innerHTML="Please enter Valid address";
       document.getElementById("span3").style.color="red";
       document.getElementById("span3").style.fontsize="1.2vw";
       }
       else
       {       
         document.getElementById("span3").innerHTML="";
         billingAddress.SAddr=adrs;
         if( CanadaCityValidation(city))
         {
         document.getElementById("span4").innerHTML="Please enter valid City";
         document.getElementById("span4").style.color="red";
         document.getElementById("span4").style.fontsize="1.2vw";
         }
         else
         {
           document.getElementById("span4").innerHTML="";
           billingAddress.SCity=city;
           if( validateName(state))
           {
           document.getElementById("span5").innerHTML="Please enter valid State";
           document.getElementById("span5").style.color="red";
           document.getElementById("span5").style.fontsize="1.2vw";
           }
           else 
           {
           document.getElementById("span5").innerHTML="";
           billingAddress.SState=state;
         //  window.location.href="payment.html"
          
      if( validateName(state))
      {
      document.getElementById("span5").innerHTML="Please enter valid State";
      document.getElementById("span5").style.color="red";
      document.getElementById("span5").style.fontsize="1.2vw";
      }
      else 
      {
      document.getElementById("span5").innerHTML="";
      billingAddress.SState=state;
    //  window.location.href="payment.html"
    if(CanadaZipValidation(zip)){
      document.getElementById("span6").innerHTML="please enter a valid ZIP";
      document.getElementById("span6").style.color="red";
      document.getElementById("span6").style.fontsize="1.2vw";
      }
      else{
      document.getElementById("span6").innerHTML="";
      console.log("zip")
      billingAddress.SZip=zip;
      if(validatePhone(phone)){
        document.getElementById("span7").innerHTML="please enter a valid phone";
        document.getElementById("span7").style.color="red";
        document.getElementById("span7").style.fontsize="1.2vw";
        }
        else{
        document.getElementById("span7").innerHTML="";
        billingAddress.Sphone=phone;
          window.location.href="payment.html"
          localStorage.setItem('shippingaddress', JSON.stringify(billingAddresss));


        }
        console.log(billingAddress)
}
      }

      }
           }
         }
       }

       }

      }
      
      
     
     // console.log(city)
     
      
     

    window.onload = function() {
      calTotal();
      
    };
    document.onload = function() {
      calTotal();
    };


