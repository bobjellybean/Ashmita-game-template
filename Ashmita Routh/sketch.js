

var ground,ground_image,invisible_ground;
var player,player_running,player_collided,playerImage;
var obstaclesGroup,obstacle1,obstacle2,obstacle3,obstacle4;
var gameOver,restart,gameOverImage,restartImage;

function preload(){
ground_image=loadImage("scary.png");
  player_running=loadAnimation("Run (1).png","Run (2).png","Run (3).png","Run (4).png","Run (5).png","Run (6).png","Run (7).png","Run (8).png","Run (9).png","Run (10).png","Run (11).png","Run (12).png","Run (14).png","Run (15).png","Run (16).png","Run (17).png","Run (18).png","Run (19).png","Run (20).png");
  obstacle1=loadImage("obstacle1.png");
  obstacle2=loadImage("obstacle2.png");
  obstacle3=loadImage("obstacle3.png");
  obstacle4=loadImage("obstacle4.png");
  gameOverImage=loadImage("gameOver1.png");
  restartImage=loadImage("restart1.png");
  player_collided=loadImage("Dead (30).png");
  playerImage=loadImage("Idle (1).png");
}

function setup() {
 createCanvas(600,500);
 
  
}

function draw() {
 background("black");
  
 
  drawSprites();
  
}

