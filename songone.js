let song;
let button;

function setup() {
//   createCanvas(100, 100);
  song = loadSound('./audio/song1.wav');
  button = createButton("Play");
  button.position(19, 19);
  button.mousePressed(togglePlaying)
}

function togglePlaying() {
    if (song.isPlaying()) {
        // .isPlaying() returns a boolean
        song.stop();
        button.html("Play")
        // background(255, 0, 0);
      } else {
        song.play();
        button.html("Pause")
        // background(0, 255, 0);
      }
}