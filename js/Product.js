"use strict";
$(document).ready(function(){

    $.getJSON('../json/Product.json',function(data){
        let s1="images/products/";
        s1+=data.Products[0].image;
        $('#book1').attr('src',s1);
        let s2="";
        s2=data.Products[0].image;
        $('#book1').attr('alt',s1);
       

        $('.title1').text(data.Products[0].title1);
        $('.title2').text(data.Products[0].title2);
        $('.title3').text(data.Products[0].title3);

        let s3="Summary/Review: <br>";
        $('.comment').html(s3+data.Products[0].summary);
        
        let s4="<tr><th class='t1'>Language:</th><th class='t2'>";
        s4+=data.Products[0].language;
        s4+=" </th></tr> <tr><th class='t1'>ISBN:</th><th class='t2'>";
        s4+=data.Products[0].ISBN;
        s4+="</th></tr><tr><th class='t1'>Format:</th><th class='t2'>";
        s4+=data.Products[0].Format;
        s4+="</th></tr> <tr> <th class='t1'>Physical description:</th> <th class='t2'>";
        s4+=data.Products[0].Physicaldescription;
        s4+="</th></tr><tr> <th class='t1'>Record ID:</th><th class='t2'>";
        s4+=data.Products[0].RecordID;
        s4+="</th></tr> <tr><th class='t1'>Date acquired:</th> <th class='t2'>"
        s4+=data.Products[0].Dateacquired;
        s4+="</th></tr>"
        $('table').html(s4);
 
        $("#details").click(function(evt) {
        $('table').toggle();
        evt.preventDefault();                  
            }); // end click
     
        let showChar = 500;  
        let ellipsestext = "…";  
        let moretext = "more";  
        let lesstext = "less";  
        $('.more').each(function() {  
        let content = $(this).html();  
        console.log(content.length);
        console.log(showChar);
        if(content.length > showChar) {  

            let c = content.substr(0, showChar);  
            let h = content.substr(showChar-1, content.length-showChar);  
            let html = c + '<span class="moreellipses">' + ellipsestext+ '&nbsp;</span><span class="morecontent"><span>' 
            + h + '</span>&nbsp;&nbsp;<a href="" class="morelink">' + moretext + '</a></span>';  
            $(this).html(html);  
        }  

        });  

        $(".morelink").click(function(){  
       
        if($(this).hasClass("less")) {  
            $(this).removeClass("less");  
            $(this).html(moretext);  
        } else {  
            $(this).addClass("less");  
            $(this).html(lesstext);  
        }  
        $(this).parent().prev().toggle();  
        $(this).prev().toggle();  
        return false;  
        });  

        let slider = $("#photos");
        let leftProperty, newLeftProperty;

        //click event for the right button
        $("#right_button").click(function(){
        leftProperty = parseInt(slider.css("left"));
        if(leftProperty - 300 <= -900){
            newLeftProperty = 0;
        }
        else{
            newLeftProperty = leftProperty - 600;
        }

        console.log(leftProperty);
        console.log(newLeftProperty);

        slider.animate({left: newLeftProperty},1000);

        });

        $("#left_button").click(function() {

        // get value of current right property
        leftProperty = parseInt(slider.css("left"));

        // determine new value of left property
        if (leftProperty < 0) {
        newLeftProperty = leftProperty + 600;
        }
        else {
        newLeftProperty = 0;
        }

        // use the animate function to change the left property
        slider.animate( {left: newLeftProperty}, 1000);			

        }) ;

    });
}) ;