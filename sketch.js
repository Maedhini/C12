var runner,runner_Img;
var path,path_img;
var bomb,bomb_img,coin_img,coin,energydrink_img,energydrink,power_img;
var invisibleground1,invisibleground2;

function preload(){
  //pre-load images
  path_img=loadImage("path.png");
  //acsesories_img=loadImage("coin.png","bomb.png","energyDrink.png","power.png");
  runner_Img=loadAnimation("Runner-1.png","Runner-2.png");
  bomb_img=loadImage("bomb.png");
  coin_img=loadImage("coin.png");
  energydrink_img=loadImage("energyDrink.png");
  power_img=loadImage("power.png")

}

function setup(){
  createCanvas(600,400);
  //create sprites here
  path=createSprite(300,200,50,50);
  path.addImage("p1",path_img);
  path.scale=1.8;
  path.velocityY=4;
  runner=createSprite(300,200,40,40);
  runner.addAnimation("r1",runner_Img);
  runner.scale=0.05;
  invisibleground1=createSprite(570,200,10,400);
  invisibleground1.visible=false
  invisibleground2=createSprite(30,200,10,400)
  invisibleground2.visible=false
  

}

function draw() {
  background("black");

  if(path.y > 600){
    path.y = path.height/2;
  }
  
  if(keyDown("right")){
    runner.x=runner.x+5
  }

  if(keyDown("left")){
    runner.x=runner.x-5
  }

  console.log(runner.x)

  runner.collide(invisibleground1);
  runner.collide(invisibleground2);

 
  coinR();
  bombR();
  energyDrinkR();
  powerBoster();


  drawSprites();
}


function coinR(){
  if(frameCount % 190 == 0){
    coin=createSprite(300,0,20,20);
    coin.addImage("c1",coin_img);
    coin.scale=0.2;
    coin.velocityY=2;
    coin.x=Math.round(random(75,520));
   }
}

function bombR(){
  if(frameCount % 160 == 0){
    bomb=createSprite(250,0,10,10);
    bomb.addImage("b1",bomb_img);
    bomb.scale=0.09;
    bomb.velocityY=3;
    bomb.x=Math.round(random(75,520));
   }
}

function energyDrinkR(){
  if(frameCount % 170 == 0){
    energydrink=createSprite(370,0,10,10);
    energydrink.addImage("e1",energydrink_img)
    energydrink.scale=0.1;
    energydrink.velocityY=4;
    energydrink.x=Math.round(random(75,520));
   }
}

function powerBoster(){
  if(frameCount % 250==0){
    power=createSprite(170,0,10,10);
    power.addImage("po1",power_img);
    power.scale=0.1
    power.velocityY=5
    power.x=Math.round(random(75,520))
   }
}
