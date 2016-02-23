$(document).ready(function(){
  $("form#search").submit(function(event){
    var userType = $("input#something").val();
    alert("you said: "+userType);
    event.preventDefault();
  })
  $(".container").submit(function pingpong(event){
    var userInput = parseInt($("input#form-control").val());
    var listResult = "";


    if (userInput <= 0){
      $("#results").hide();
      $(".error").show();
    }else if (userInput > 0){
      for(var i=1;i<= userInput; i++){
        if((i%3===0)&&(i%5===0)){
          listResult += "pinGPong"+'<br>';
        }else if (i%3===0) {
          listResult += "ping"+'<br>';
        }else if (i%5===0) {
          listResult += "pong"+'<br>';
        }else {
          listResult += i+"<br>";
        }
      } //end of for loop
      document.getElementById("results").innerHTML = listResult;
      $(".error").hide();
      $("#results").show();
    } else {
      alert("There is a problem with your input. A force refresh will occur, please try again!");
      location.reload();
    }

    event.preventDefault();
  }); //end of form-inline submit
});  //end of document ready
