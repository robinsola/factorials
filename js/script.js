// Business Logic:


var factorial = function(numberInput) {
  var numbers = 1;
  for (var i=2; i <= numberInput; i++) {
    numbers *= i;
  }
  return numbers;
}

// User Logic:

$(document).ready(function() {
  $("#input").submit(function(e) {
    e.preventDefault();

    var numberInput = parseInt($("#number").val());
    var result = factorial(numberInput);
      $(".teaser").hide();
      $("#output").text(result);
  });
});
