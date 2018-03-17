// Business Logic:


var factorial = function(numberInput) {
  var numbers = 1;
  for (var i=1; i <= numberInput; i++) {
    numbers *= i;
  }
  return numbers;
}

// User Logic:

$(document).ready(function() {
  $("#input").submit(function(e) {
    e.preventDefault();

    var numberInput = parseInt($("#number").val());
    if (isNaN(numberInput) || (numberInput === " ")) {
      alert("That's not a number! Fox Wins!");
    } else if (numberInput === 0) {
      alert("No factorial for zero! Fox Wins!");
    } else {
      var result = factorial(numberInput);
      $(".teaser").hide();
      $("#output").text(result);
    }

  });
});
