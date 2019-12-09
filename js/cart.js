const xhr = new XMLHttpRequest();
console.log(window.location.href.split("/")[3]);
xhr.open('GET', '../json/cart.json', true);

xhr.onload = function(){
  if(this.status === 200) {
    // console.log(this.responseText);

    const items = JSON.parse(this.responseText);

    let output = '';

    let count=0;
        
        items.forEach(function(item){
            count++;
            output += `
            
              
              <li>
              <a href="../Product.html"> ${item.name} <img id='book${count}' src="${item.imgSrc}" alt='book${count}' height="59px" width="30px" ></a> 
              <span class="price"> <input type="button" value="+" onclick="up(10,'qty${count}',${item.price})"> <input value="1" disabled type="number" id="qty${count}" size="1"  value="${item.qty}" min="0"><input type="button" value="-" onclick="down('0','qty${count}',${item.price})"><span class="totals" id="finalPrice${count}">$${item.price}</span></span>
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
    
   function up(max,qty,price) {
    console.log(qty);
    let tPrice="finalPrice"+qty.charAt(qty.length-1);
    console.log(tPrice);
    console.log(document.getElementById(tPrice).textContent.substr(0,document.getElementById(tPrice).textContent.length-1));

    
    document.getElementById(qty).value = parseInt(document.getElementById(qty).value) + 1;
if (document.getElementById(qty).value >= parseInt(max)) {
  document.getElementById(qty).value = max;
}
document.getElementById(tPrice).innerHTML=`$${document.getElementById(qty).value*price}`;//("afterend","$"+(document.getElementById(qty).value*2))  // `${document.getElementById(qty).value*2} sfdjknkjjsdnfkjnkjjn$`;
calTotal();
}
function down(min,qty,price) {
    console.log(qty);
    let tPrice="finalPrice"+qty.charAt(qty.length-1);
    
document.getElementById(qty).value = parseInt(document.getElementById(qty).value) - 1;
if (document.getElementById(qty).value <= parseInt(min)) {
  document.getElementById(qty).value = min;
}
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


function cartForm(){
  
  let fname= document.getElementById("fname").value;
  let email= document.getElementById("email").value;
  let adrs= document.getElementById("adr").value;
  let city= document.getElementById("city").value;
  let state= document.getElementById("state").value;
  let namepattern = /^[a-zA-Z\. ]{2,42}$/;
  let emailpattern=/^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
  let adrspattern = /^[0-9]{1,4}(([\-\/][0-9]{1,4})|(\/[ABCDFGHJKLMNPRSTV]{1,2}))*/;


  if( fname == "" || (!namepattern.test(fname)))
  {
  document.getElementById("span1").innerHTML="Please enter Valid name";
  document.getElementById("span1").style.color="red";
  document.getElementById("span1").style.fontsize="1.2vw";
  }
  else
  {
  document.getElementById("span1").innerHTML="";
  }
  if( email == "" || (!emailpattern.test(email)))
  {
  document.getElementById("span2").innerHTML="Please enter Valid email ID";
  document.getElementById("span2").style.color="red";
  document.getElementById("span2").style.fontsize="1.2vw";
  }
  else
  {
  document.getElementById("span2").innerHTML="";
  }
  if( adrs == "" || (!adrspattern.test(adrs)))
  {
  document.getElementById("span3").innerHTML="Please enter Valid address";
  document.getElementById("span3").style.color="red";
  document.getElementById("span3").style.fontsize="1.2vw";
  }
  else
  {
  document.getElementById("span3").innerHTML="";
  }
  if( city == "" || (!namepattern.test(city)))
  {
  document.getElementById("span4").innerHTML="Please enter your City";
  document.getElementById("span4").style.color="red";
  document.getElementById("span4").style.fontsize="1.2vw";
  }
  else
  {
  document.getElementById("span4").innerHTML="";
  }if( state == "" || (!namepattern.test(state)))
  {
  document.getElementById("span5").innerHTML="Please enter your State";
  document.getElementById("span5").style.color="red";
  document.getElementById("span5").style.fontsize="1.2vw";
  }
  else 
  {
  document.getElementById("span5").innerHTML="";
  alert("You will be prcoeeded to Payment Page !!!");
  window.location.href="../payment.html"
}


  
}
window.onload = function() {
  this.calTotal();
};
document.onload = function() {
  this.calTotal();
};
