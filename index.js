// Detecting button press
const buttons = document.querySelectorAll(".drum");
buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const buttonText = e.target.innerHTML;
    makeSound(buttonText);
    buttonAnimation(buttonText);
  });
});
// Detecting keyboard press
document.addEventListener("keydown", (e) => {
  makeSound(e.key);
  buttonAnimation(e.key);
});

function makeSound(key) {
  switch (key) {
    case "w": {
      const audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;
    }
    case "a": {
      const audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;
    }
    case "s": {
      const audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;
    }
    case "d": {
      const audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;
    }
    case "j": {
      const audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;
    }
    case "k": {
      const audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      break;
    }
    case "l": {
      const audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      break;
    }

    default:
      console.log(key);
      break;
  }
}

function buttonAnimation(currentKey) {
  const activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  setTimeout(() => {
    activeButton.classList.remove("pressed");
  }, 100);
}
