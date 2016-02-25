var pingPongFunction = function (number) {
  var listResult="";

    for(var i=1;i<= number; i++){
      if((i%3===0)&&(i%5===0)){
        listResult += "pingpong";
      }else if (i%3===0) {
        listResult += "ping";
      }else if (i%5===0) {
        listResult += "pong";
      }else {
        listResult += i;
      }
      listResult += "<br>"
    } //end of for loop
    return listResult;
  }

$(document).ready(function(){
  $("form#search").submit(function(event){
    var userType = $("input#something").val();
    alert("you said: "+userType);
    event.preventDefault();
  })
  $(".container").submit(function pingpong(event){
    var userInput = parseInt($("input#form-control").val());

    if (userInput <= 0){
      $("#results").hide();
      $(".error").show();
    }else if (userInput > 0){
      var result = pingPongFunction(userInput);
      // var collection =
      document.getElementById("results").innerHTML = result;
      $(".error").hide();
      $("#results").show();
    } else {
      alert("There is a problem with your input. A force refresh will occur, please try again!");
      location.reload();
    }
    event.preventDefault();
  }); //end of form-inline submit
});  //end of document ready
