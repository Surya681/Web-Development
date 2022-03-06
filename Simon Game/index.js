var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;
var started = false;
$(".btn").click(function() {

  var userChosenColour = $(this).attr("id")
  userClickedPattern.push(userChosenColour);

  playSound(userChosenColour);
  animatePress(userChosenColour);
  checkAnswer(userClickedPattern.length - 1);
  // $("#" + userChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

});

function checkAnswer(currentLevel) {

  if (gamePattern[currentLevel] == userClickedPattern[currentLevel]) {
    console.log("yes");
    if (userClickedPattern.length === gamePattern.length) {

      //5. Call nextSequence() after a 1000 millisecond delay.
      setTimeout(function() {
        nextSequence();
      }, 1000);

    }
  } else {
    console.log("no");
    var audio = new Audio("sounds/wrong.mp3");
    audio.play();
    $("body").addClass("game-over");
    setTimeout(function() {
      $("body").removeClass("game-over")
    }, 200);
    $("h1").text("Game Over, Press Any Key to Restart ");
startOver();
  }
}

function startOver() {
  level = 0;
  gamePattern = [];
  started = false;
}


function animatePress(currentColour) {
  $("#" + currentColour).addClass("pressed");
  setTimeout(function() {
    $("#" + currentColour).removeClass("pressed")
  }, 100);

}


function playSound(color) {
  var audio = new Audio("sounds/" + color + ".mp3");
  audio.play();
}


function nextSequence() {
  userClickedPattern = [];
  level++;
  var randomNumber = Math.floor(Math.random() * 4);
  var colorChosen = buttonColours[randomNumber]
  gamePattern.push(colorChosen);
  $("h1").text("level " + level);

  $("#" + colorChosen).fadeIn(100).fadeOut(100).fadeIn(100);

  playSound(colorChosen);


}

$(document).keydown(function() {
  if (!started) {
    nextSequence();
    started = true;
  }
});
