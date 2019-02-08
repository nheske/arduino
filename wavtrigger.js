/* **Wav Trigger - Arduino tie-in **
* http://blog.sparkfuneducation.com/use-sketchup-like-an-arcade-game-diy-hot-key-buttons
* For the sound effects, we are using a WAV Trigger Board. This is one of the easiest ways to add sound to a project. Load up an SD card with audio files in WAV format. Name the files starting with "001", "002", "003"... to connect these audio files to the trigger pins on the board. When these pins are grounded, the respective file will play. The WAV Trigger Board can play up to 14 tracks simultaneously. It's a pretty neat board. When wiring this up, make sure that you have a common ground across all circuits. 
* https://github.com/SketchThis/SketchUpArcadeMachine/blob/master/SketchUpArcade.ino
//https://learn.sparkfun.com/tutorials/wav-trigger-hookup-guide-v11
byte startUpWAVPin = 6;
byte bombWAVPin = 7;
byte volumeLEDPin = 5;
pinMode(startUpWAVPin, OUTPUT);
pinMode(bombWAVPin, OUTPUT);
//trigger start-up sound.
digitalWrite(startUpWAVPin, LOW);
delay(100);
sleep(500).then(() => {
  digitalWrite(startUpWAVPin, HIGH);
})



var startUpWAVPin = new five.Pin(6);
// This will set pin 13 high (on)
startUpWAVPin.high();
