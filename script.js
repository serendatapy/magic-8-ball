$(document).ready(function () {

  var eightBallImage = "8side.png";
  var answerImage = "answerside.png";
  var magic8Ball = {};

  magic8Ball.listOfAnswers = ["No", "Yes", "I don't think so…", "Of course!", "Indubitably", "In your dreams."];

  magic8Ball.askQuestion = function (question) {
    var randomIndex = Math.floor(Math.random()*this.listOfAnswers.length);
    var answer = this.listOfAnswers[randomIndex];

    $("#answer").hide(); //hide the answer div
    $("#answer").text(answer); //add answer to the div
    $("#8ball").attr("src", answerImage); //activate 8 ball answer image
    $("#answer").fadeIn(4000); //fade in answer on top
    setTimeout(this.reset, 4000);
  };//end ask question

  magic8Ball.reset = function () {
    $("#answer").fadeOut(4000); //fade in answer on top*/
  };

  var onClick = function () {
    $("#answer").hide();
    $("#8ball").attr("src", eightBallImage);

    var collectQ = function () { //show prompt
      var question = prompt("Ask a yes or no question");
      $("#8ball").effect("shake");
      magic8Ball.askQuestion(question);
    }
    setTimeout(collectQ, 1000);
  };

  $("#questionButton").click(onClick); //when button is pressed, launch question prompt
});
