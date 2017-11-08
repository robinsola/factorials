// Business Logic:

var numbers = 1;

// User Logic:

$(document).ready(function() {
  $("#input").submit(function(e) {
    e.preventDefault();

    var number1 = parseInt($("#number").val());

    for (var i=1; i <= number1; i++) {
      numbers = numbers * i;
    }

      $("#output").text(numbers);
  });
});
