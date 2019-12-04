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
              <a href="../Product.html"> ${item.name} <img id='book${count}' src="${item.imgSrc}" alt='book${count}' height="50px" width="30px" ></a> 
              <span class="price"> <input type="button" value="+" onclick="up(10,'qty${count}',${item.price})"> <input value="1" disabled type="number" id="qty${count}" size="1"  value="${item.qty}" min="0"><input type="button" value="-" onclick="down('0','qty${count}',${item.price})"><span class="totals" id="finalPrice${count}">$${item.price}</span></span>
          </li>
          `;
          });
          output+=`<li >
          Total <span class="totPrice" id="totPrice" style="color:black">$11</span>

             </li>`;
          console.log(output);
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
 }

