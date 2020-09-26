/**
 * Beat class that keeps track of playing the audio
 * HINT: Make sure to pass in the audioSrc as parameter to create a new audio track
 * HINT: Create a play function to play the audio if called
 */

// let test = new Audio("");
// test.play();

class Beat {
  //using JS Object Constructors, and this as statement for reference
  constructor(audioSrc) {
    this.audio = new Audio(audioSrc);
    console.log(this.audio);
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
  constructor(color, keyCode) {}

  /**
   * Set the button color based on color specified
   */
  setButtonColorInHTML = () => {};

  /**
   * Select function to set the background color and boxShadow
   */
  select = () => {};

  /**
   * Deselect function to reset background color and boxShadow
   */
  deselect = () => {};
}
