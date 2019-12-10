//jason file for book description



$(document).ready(function() {
    $.getJSON('../json/Activity.json', function(data) {
      $.each(data.bookno, function(key, value) {
        $('#team').append(
  
          'Book No: ' +
            value.Bname +
            '<br>' +
            'Book Title: ' +
            value.btitle +
            '<br>' +
            'Book Summary: ' +
            value.bsummary +
            '<br>'+
            'Book price: ' +
            value.price +
            '<br><br>'
        );
      });
    });
  });    