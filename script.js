$(document).ready(function () {

  var eightBallImage = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/8side.png";
  var answerImage = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/answerside.png";
  var magic8Ball = {};

  magic8Ball.listOfAnswers = ["No", "Yes", "I don't think so…", "Of course!", "Indubitably", "In your dreams."];

  magic8Ball.askQuestion = function (question) {
    var randomIndex = Math.floor(Math.random()*this.listOfAnswers.length);
    var answer = this.listOfAnswers[randomIndex];

    $("#answer").hide(); //hide the answer div
    $("#answer").text(answer); //add answer to the div
    $("#8ball").attr("src", answerImage); //activate 8 ball answer image
    $("#answer").fadeIn(2000); //fade in answer on top

    /*$("#answer").fadeOut(8000); //fade in answer on top*/
    //write a reset function that after the answer brings
    //eightball back to normal automatically?

  };//end ask question

  var onClick = function () {
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
