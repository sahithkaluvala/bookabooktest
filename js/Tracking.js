//java script for swaping image (image galary)

function myFunction(imgs) {
    
      var expand = document.getElementById("expandImg");
      var imageT = document.getElementById("imgtext");
  
      expand.src = imgs.src;
      imageT.innerHTML = imgs.alt;
  
      //display image in container
      expand.parentElement.style.display = "block"
      expand.style.width="100px";
      expand.style.height="100px";
    }
  
  