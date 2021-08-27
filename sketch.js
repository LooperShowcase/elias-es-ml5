let imgb;
let pl;
let obslava;
let obstnt;
let obswitherboss;
let piglen;
let wordClassiFier;
let obsticles = [];

function preload() {
  imgb = loadImage("background.jpg");
  pl = loadImage("1.gif");
  obslava = loadImage("lava.jpg");
  obstnt = loadImage("tnt.jpg");
  obswitherboss = loadImage("witherboss.jpg");
  obspiglen = loadImage("piglen.jpg");
  gameover = loadImage("gameover.jpg");
  gameover1 = loadImage("gameover1.jpg");
  let options = {
    probabilityThreshold: 0.85,
  };
  wordClassiFier = ml5.soundClassifier("SpeechCommands18w", options);
}

let player;
let obss;
function setup() {
  createCanvas(800, 400);
  player = new Player();
  wordClassiFier.classify(hearWord);
}

function hearWord(error, results) {
  console.log(results[0].label + " " + results[0].confidence);
  if (results[0].label == "up") {
    player.jump();
  }
}

function draw() {
  background(imgb);

  if (random(1) < 0.01) {
    obsticles.push(new Obstacle());
  }

  for (let obs of obsticles) {
    obs.show();
    obs.move();
    if (player.collided(obs) === true) {
      image(gameover1, 0, 0, width, height);
      noLoop();
    }
  }

  player.show();
  player.move();
}
function keyPressed() {
  if (player.y == height - 50) {
    if (key === " ") {
      player.jump();
    }
  }
}
