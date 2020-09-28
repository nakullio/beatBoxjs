/**
 * Rebuilding the beatBox into EDM LaunchPad
 */

let beats = {
  //Bass
  49: {
    beat: new Beat("./assets/hbass2.mp3"),
    button: new Button("#00fffe", 49),
  },
  50: {
    beat: new Beat("./assets/hbass4.mp3"),
    button: new Button("#00fffe", 50),
  },
  51: {
    beat: new Beat("./assets/hbass5.mp3"),
    button: new Button("#00fffe", 51),
  },
  52: {
    beat: new Beat("./assets/hbass6.mp3"),
    button: new Button("#00fffe", 52),
  },
  53: {
    beat: new Beat("./assets/hbass7.mp3"),
    button: new Button("#00fffe", 53),
  },
  54: {
    beat: new Beat("./assets/hbass9.mp3"),
    button: new Button("#00fffe", 54),
  },
  55: {
    beat: new Beat("./assets/hbass11.mp3"),
    button: new Button("#00fffe", 55),
  },
  56: {
    beat: new Beat("./assets/hbass15.mp3"),
    button: new Button("#00fffe", 56),
  },
  57: {
    beat: new Beat("./assets/hbass13.mp3"),
    button: new Button("#00fffe", 57),
  },

  //Drum Loop
  81: {
    beat: new Beat("./assets/hdrum38.mp3"),
    button: new Button("#FF00FF", 81),
  },
  87: {
    beat: new Beat("./assets/hdrum2.mp3"),
    button: new Button("#FF00FF", 87),
  },
  69: {
    beat: new Beat("./assets/hdrum4.mp3"),
    button: new Button("#FF00FF", 69),
  },
  82: {
    beat: new Beat("./assets/hdrum5.mp3"),
    button: new Button("#FF00FF", 82),
  },
  84: {
    beat: new Beat("./assets/hdrum8.mp3"),
    button: new Button("#FF00FF", 84),
  },
  89: {
    beat: new Beat("./assets/hdrum10.mp3"),
    button: new Button("#FF00FF", 89),
  },
  85: {
    beat: new Beat("./assets/hdrum12.mp3"),
    button: new Button("#FF00FF", 85),
  },
  73: {
    beat: new Beat("./assets/hdrum15.mp3"),
    button: new Button("#FF00FF", 73),
  },
  79: {
    beat: new Beat("./assets/hdrum41.mp3"),
    button: new Button("#FF00FF", 79),
  },

  //FX Loop
  80: {
    beat: new Beat("./assets/hfx4.mp3"),
    button: new Button("#FFFFFF", 80),
  },
  65: {
    beat: new Beat("./assets/hfx3.mp3"),
    button: new Button("#FFFFFF", 65),
  },
  83: {
    beat: new Beat("./assets/hfx6.mp3"),
    button: new Button("#FFFFFF", 83),
  },
  68: {
    beat: new Beat("./assets/hfx10.mp3"),
    button: new Button("#FFFFFF", 68),
  },
  70: {
    beat: new Beat("./assets/hfx12.mp3"),
    button: new Button("#FFFFFF", 70),
  },
  71: {
    beat: new Beat("./assets/hfx8.mp3"),
    button: new Button("#FFFFFF", 71),
  },
  72: {
    beat: new Beat("./assets/hfx9.mp3"),
    button: new Button("#FFFFFF", 72),
  },
  74: {
    beat: new Beat("./assets/hfx11.mp3"),
    button: new Button("#FFFFFF", 74),
  },
  75: {
    beat: new Beat("./assets/hfx5.mp3"),
    button: new Button("#FFFFFF", 75),
  },

  //Synth Loop
  76: {
    beat: new Beat("./assets/hsynth10.mp3"),
    button: new Button("#ff3a17", 76),
  },
  90: {
    beat: new Beat("./assets/hsynth16.mp3"),
    button: new Button("#ff3a17", 90),
  },
  88: {
    beat: new Beat("./assets/hsynth10.mp3"),
    button: new Button("#ff3a17", 88),
  },
  67: {
    beat: new Beat("./assets/hsynth11.mp3"),
    button: new Button("#ff3a17", 67),
  },
  86: {
    beat: new Beat("./assets/hsynth13.mp3"),
    button: new Button("#ff3a17", 86),
  },
  66: {
    beat: new Beat("./assets/hsynth15.mp3"),
    button: new Button("#ff3a17", 66),
  },
  78: {
    beat: new Beat("./assets/hsynth14.mp3"),
    button: new Button("#ff3a17", 78),
  },
  77: {
    beat: new Beat("./assets/hsynth1.mp3"),
    button: new Button("#ff3a17", 77),
  },
  48: {
    beat: new Beat("./assets/hsynth2.mp3"),
    button: new Button("#ff3a17", 48),
  },
};

/**
 * Function to play the beat upon a press of key
 * HINT: use the keyCode
 */
triggerBeat = (event) => {
  const keyCode = event.keyCode;
  if (keyCode in beats) {
    let keyPress = beats[keyCode];
    keyPress.beat.play();
    // we need to pass the button.select on this along side with the play sounds
    keyPress.button.select();
  }
};

/**
 * Keydown listener to fire triggerBeat function
 * HINT: Log the keyCode of the key
 */
// this is the code that record what keyboard key been typed
document.addEventListener("keydown", triggerBeat);
//   console.log(event);
//   console.log(event.keyCode);
