/**
 * Beat class that keeps track of playing the audio
 * HINT: Make sure to pass in the audioSrc as parameter to create a new audio track
 * HINT: Create a play function to play the audio if called
 */

// let test = new Audio("");
// test.play();

class Beat {
  //using JS Object Constructors, and this as statement for reference , check on this https://www.w3schools.com/js/js_object_constructors.asp
  constructor(audioSrc) {
    this.audio = new Audio(audioSrc);
    //console.log(this.audio);
    // for testing out the audio assets play sounds
    // this.audio.play();
  }

  play = () => {
    this.audio.currentTime = 0; // this fuction will reset the audio file to start over because we enter the key multiple time
    this.audio.play();
  };
}

/**
 * Button class that keeps track of the button color based on a press
 */
class Button {
  constructor(color, keyCode) {
    this.color = color;
    this.keyCode = keyCode;
    this.element = document.getElementById(keyCode);
    this.setButtonColorInHTML();
    this.setATransitionListener();
  }

  // solution 1 remove style on keyup
  // solution 2 wait a certaon amount a time to remove a style
  // solution 3: event called transition end (OK) --> REACT ON TRANSITION EVENT

  setATransitionListener = () => {
    this.element.addEventListener("transitionend", () => {
      // we should inserting the deselect fucntion for remove once transition end
      this.deselect();
    });
  };

  /**
   * Set the button color based on color specified
   */
  setButtonColorInHTML = () => {
    //this function generate recolor the border,
    //calling this.element because, the button ID already define above, and
    // we should restyling the color by color.borderColor
    //then equeal to this.color which already setup at Class Button above,
    //and the reference color as sets on let beats fuction @script.js
    this.element.style.borderColor = this.color;
  };

  /**
   * Select function to set the background color and boxShadow
   */
  select = () => {
    this.element.style.backgroundColor = this.color;
    //to adding equal for set the css, are using template literals,
    //then adding the color using dollar sign
    this.element.style.boxShadow = `0px 0px 17px 0px ${this.color}`;
  };

  /**
   * Deselect function to reset background color and boxShadow
   */
  deselect = () => {
    this.element.style.backgroundColor = "transparent";
    this.element.style.boxShadow = "none";
  };
}
