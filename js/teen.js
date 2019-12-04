
$(document).ready(function() {
    $.getJSON('../json/teen.json', function(data) {
      $.each(data.book, function(key, value) {
        $('.book1').append(
            //further values will be appended to respective HTML content
            '<img class="img1" src='+value.url+' alt="book2" height="320px" width="250px"></img><p>'+value.p1 +'</p>'+ value.Category1+
            '<p>'+value.p2 +'</p>'+ value.Language1+
            '<p>'+value.p3 +'</p>'+ value.Author1+
            '<p>'+value.p4 +'</p>'+ value.Publication_information+
            '<p div class="review0">'+value.p5+'</p>'+value.Summary+'</div>' +
            '<p div class="review0">'+value.p6+'</p>'+value.Availablity+'</div>' 
            +'<br>'+'<button class="button_class">Book</button><br><br>'    
     
        );
      });
    });
  });