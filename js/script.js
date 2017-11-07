var numbers = 1;
$(document).ready(function() {
  $("#input").submit(function(e) {

    e.preventDefault();
    var numbers = [];
    var number1 = parseInt($("#number").val());
    for (var i=1; i <= number1; i++) {
      numbers.push(i);
      numbers.forEach(function(number) {
        numbers = numbers * i;
      });
      console.log(numbers);


      $("#output").text(numbers);
    }
  });
});
