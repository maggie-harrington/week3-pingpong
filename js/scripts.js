var enteredNumber;
var newNumber;
function pingPong(enteredNumber) {
  newNumber = enteredNumber * 5
}






$(document).ready(function(){
  $("form#input-number").submit(function(event){
    enteredNumber = parseInt($("input#entered-number").val());
    console.log(enteredNumber);
    pingPong(enteredNumber);
    console.log(newNumber);
    $("#output").text(newNumber);
    event.preventDefault();
  });
});
