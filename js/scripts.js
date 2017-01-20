var enteredNumber;
var newNumber;
function pingPong(enteredNumber) {
  newNumber = enteredNumber * 5
}






$(document).ready(function(){
  $("form#input-number").submit(function(event){
    enteredNumber = parseInt($("input#entered-number").val());
    console.log(enteredNumber);
    if (isNaN (enteredNumber)) {
      alert ("Error: Please enter a numeric value!");
    } else if (enteredNumber <= 0) {
      alert ("Error: Please enter a positive number!");
    } else {
      pingPong(enteredNumber);
    }
    console.log(newNumber);
    $("#output").text(newNumber);
    event.preventDefault();
  });
});
