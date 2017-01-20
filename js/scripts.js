var enteredNumber;
var result;
var results = [];
// var newNumber; //test variable
function pingPong(enteredNumber) {
  // newNumber = enteredNumber * 5 // test function

  for (result = 1; result <= enteredNumber; result ++) {
    results.push(result);
//    console.log (results.indexOf(result));
  }
}






$(document).ready(function(){
  $("form#input-number").submit(function(event){
    event.preventDefault();
    // $("#output").empty();
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
    for (result = 0; result < enteredNumber; result ++) {
      $("#output").append("<p>" + results[result] + "</p>");

    }
    results = "";
  });
});
