var database;
var gameState,playerCount = 0;
gameState = 0; 
var formObj,playerObj,gameObj;
var canvas;
var car1, car2, car3, car4;
var cars = [];
var allPlayerInfo;
var car1img, car2img, car3img, car4img
var ground
var track

function preload(){
  car1img = loadImage("images/car1.png");
  car2img = loadImage("images/car2.png");
  car3img = loadImage("images/car3.png");
  car4img = loadImage("images/car4.png");
  track = loadImage("images/track.jpg");
  ground = loadImage("images/ground.png");
}

function setup(){
  database = firebase.database();
  console.log(database);
    canvas = createCanvas(displayWidth, displayHeight);
gameObj = new Game();
gameObj.getState();
gameObj.start();
}

function draw(){
  if(playerCount === 4){
    gameObj.updateState(1);
  }
  if(gameState === 1){
    clear();
    gameObj.play();
  }
  
}
