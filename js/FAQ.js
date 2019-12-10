"use strict";

$(document).ready(function(){

    $.getJSON('json/FAQ.json',function(data){
        $.each (data.FAQ,function(key,value){
            let question="";
            question ='<h2><a href="#">'+ value.question+'</a></h2>'+' <div class="Answer">';
           // console.log(value.question);
            let temp="";
            for( let i=0;i<value.answer.length;i++)
            {
            temp+='<p>'+value.answer[i]+'</p>'                  
            }
            let end="</div>";
            console.log( question + temp+end);
              $('#faq').append(
                question + temp + end    
             );
        });
 
        $("#faq h2").click(function(evt) {
            $(this).toggleClass("minus");
            if ($(this).attr("class") !== "minus") {
                $(this).next().hide();
            }
            else {
                $(this).next().show();
            }
            evt.preventDefault();
        }); // end click
        $("#faqs").find("a:first").focus();

    }) ;

});