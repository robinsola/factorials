// Business Logic:

var numbers = 1;

var factorial = function(numberInput) {
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

      $("#output").text(result);
  });
});
