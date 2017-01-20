var enteredNumber;
var results = [];
// var newNumber; //test variable
function pingPong(enteredNumber) {
  // newNumber = enteredNumber * 5 // test function

  for (var result = 1; result <= enteredNumber; result ++) {
    results.push(result);
  }
}






$(document).ready(function(){
  $("form#input-number").submit(function(event){
    // $("#output").text(clear());
    event.preventDefault();

    enteredNumber = parseInt($("input#entered-number").val());
    // console.log(enteredNumber);
    if (isNaN (enteredNumber)) {
      alert ("Error: Please enter a numeric value!");
    } else if (enteredNumber <= 0) {
      alert ("Error: Please enter a positive number!");
    } else {
      pingPong(enteredNumber);
    }
    // console.log(newNumber);

    $("#output").text(results);


  });
});
