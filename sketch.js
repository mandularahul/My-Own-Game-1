var kid,kid_img;
var bg,bg_img;
var gameState="play"
var gameLevel="level1"
var coin,coin_Img,coin_gif;
var monster,monster_Img;
function preload(){
  kid_img=loadAnimation("images/kid1.png","images/kid2.png","images/kid3.png");
  bg_img=loadImage("images/bgImg.jpg");
  coin_Img=loadAnimation("images/coin1.png","images/coin2.png","images/coin3.png","images/coin4.png","images/coin5.png","images/coin6.png","images/coin7.png","images/coin8.png","images/coin9.png");
  monster_Img=loadImage("monster1.jpg");
}
function setup() {
  createCanvas(windowWidth,windowHeight);
  bg=createSprite(0, 0, width, height);
  bg.addImage(bg_img);
  bg.scale=2.5;
  kid=createSprite(100,height-220);
  kid.addAnimation("kid",kid_img);
  kid.scale=1.5;
}

function draw() {
  background(255,255,255); 
  if(gameState=="play"){
    //GAMELEVEL STAGE 1
    if(gameLevel=="level1"){
    bg.velocityX=-10;
    if(bg.x<0){
      bg.x=bg.width/2
    }
    coins();
    monsters();
  }
  //GAMELEVEL STAGE 2
  }
  drawSprites();
}
function coins(){
  if(frameCount%200==0){
    coin=createSprite(width,height-500);
    coin.addAnimation("coin",coin_Img);
    coin.velocityX=-7;
    //coin.scale=0.5;
  }
}
function monsters(){
  if(frameCount%350==0){
    monster=createSprite(width,height-200);
    monster.addImage(monster_Img);
    monster.velocityX=-7;
    monster.scale=1.8;
  }
}
