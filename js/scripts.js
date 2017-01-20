var enteredNumber;
var result;
var results = [];
function pingPong(enteredNumber) {
  for (result = 1; result <= enteredNumber; result ++) {
    if (result % 15 === 0) {
      results.push("pingpong");
    } else if (result % 5 === 0) {
      results.push("pong");
    } else if (result % 3 === 0) {
      results.push("ping");
    } else {
      results.push(result);
    }
  }
}



$(document).ready(function(){
  $("form#input-number").submit(function(event){
    event.preventDefault();
    $("#output").empty();
    results = [];
    enteredNumber = parseInt($("input#entered-number").val());
    if (isNaN (enteredNumber)) {
      alert ("Error: Please enter a numeric value!");
    } else if (enteredNumber <= 0) {
      alert ("Error: Please enter a positive number!");
    } else {
      pingPong(enteredNumber);
    }
    for (var index = 0; index < enteredNumber; index ++) {
      $("#output").append("<li>" + results[index] + "</li>");
    }
  });
});
