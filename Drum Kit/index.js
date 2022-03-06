var n = document.querySelectorAll(".drum").length;

for (var i = 0; i < n; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    // var audio = new Audio('sounds/tom-1.mp3');
    // audio.play();
    // console.log(this.style.color="white");
    var button_clicked = this.innerHTML;
    makeSound(button_clicked);
    buttonAnimation(button_clicked);


  });
  document.addEventListener("keydown", function(event) {
    var button_pressed = event.key;
    makeSound(button_pressed);
    buttonAnimation(button_pressed);
  });

  function makeSound(key) {
    switch (key) {
      case "w":
        var tom1 = new Audio('sounds/tom-1.mp3');
        tom1.play();
        break;
      case "a":
        var tom2 = new Audio('sounds/tom-2.mp3');
        tom2.play();
        break;
      case "s":
        var tom3 = new Audio('sounds/tom-3.mp3');
        tom3.play();
        break;
      case "d":
        var tom4 = new Audio('sounds/tom-4.mp3');
        tom4.play();
        break;
      case "j":
        var snare = new Audio('sounds/snare.mp3');
        snare.play();
        break;
      case "k":
        var crash = new Audio('sounds/crash.mp3');
        crash.play();
        break;
      case "l":
        var kick = new Audio('sounds/kick-bass.mp3');
        kick.play();
        break;
      default:

    }
  }

  function buttonAnimation(currentkey) {
    var c = document.querySelector("." + currentkey);
      c.classList.add("pressed");
      setTimeout(function(){
        c.classList.remove("pressed");
      },100)
  }
}
