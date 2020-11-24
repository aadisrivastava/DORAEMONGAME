var doraemon,doraemon_running,doraemon_zombie;
var zombie,zombie_running,zombie_dead;
var T1,T2;
var firstPage;
var story;
var rules;
var Themeimg;
var Theme;
var gameState="first";
var invisibleGround;
var PLAY=1;
var END=0;
var skeleton;
var gadget;
var changePage;
var bg;
var backgroundImg;
var tile,tileImg;
var tileGroup;
var zombieGroup;
var dbush;
var tree,tomb1,tomb2;
var counter =0 
var score=0;
function preload(){
  dTalking=loadImage("dtalking.jpg");
  nSitting=loadImage("nsitting.png");
doraemon_running=loadAnimation("d1.png","d2.png","d3.png","d4.png");
doraemon_zombie=loadImage("zombied1.png");
backgroundImg=loadImage("BG.png");
zombie_running=loadAnimation("Walk (1).png","Walk (2).png","Walk (3).png","Walk (4).png");
zombie_dead=loadAnimation("Dead (1).png","Dead (2).png","Dead (3).png","Dead (10).png");
zombie_attack=loadAnimation("Attack (1).png","Attack (2).png","Attack (3).png",
"Attack (4).png","Attack (5).png");
T1=loadImage("nD1.png");
T2=loadImage("dd.png");
story=loadImage("story.jpg");
fPage=loadImage("1stpage.jpg");
Gadget=loadImage("gadget.png");
tileImg=loadImage("Tile.jpg");
restartImg=loadImage("restart.png");
gameOverImg=loadImage("gameover.png")
room=loadImage("doraemonRoom.jpg");
mainGround=loadImage("GROUND.png");
rule=loadImage("Rules.jpg");
Themeimg=loadImage("themeimg.jpg");
skeletonImg=loadImage("Skeleton.png");
dbimg=loadImage("DeadBush.png");
treeImg=loadImage("Tree.png");
tombImg=loadImage("TombStone (1).png");
tombImg2=loadImage("TombStone (2).png");
}

function setup(){
    createCanvas(1200,800);
    bg=createSprite(600,600);
    
    dora=createSprite(900,600);
    dora.addImage(dTalking);
    dora.scale=1;
    dora.visible=false;
    Ns=createSprite(200,600);
    Ns.addImage(nSitting);
    Ns.scale=0.6;
    Ns.visible=false;
    doraemon=createSprite(140,600);
    doraemon.addAnimation("d",doraemon_running);
    doraemon.scale=0.4;
    doraemon.visible=false;
    text1=createSprite(570,400);
    text1.addImage("t1",T1);
    text1.visible=false;
    text1.scale=0.8;
    text2=createSprite(600,400);
    text2.addImage("t2",T2)
    text2.visible=false;
    text2.scale=0.8;
    invisibleGround=createSprite(400,670,1000,20);
    invisibleGround.visible=false;
    changePage=createButton("NEXT");
    changePage.position(1000,100);
    
   
    skeleton=createSprite(600,640);
    skeleton.addImage(skeletonImg);
    skeleton.visible=false;
    dbush=createSprite(930,640);
    dbush.addImage(dbimg);
    dbush.visible=false;

    tree=createSprite(800,630);
   tree.addImage(treeImg);
    tree.visible=false;
   tomb1=createSprite(330,640);
   tomb1.addImage(tombImg);
   tomb1.visible=false;
  tomb2=createSprite(230,640);
   tomb2.addImage(tombImg2);
   tomb2.visible=false;
   
   restart=createSprite(650,350,10,10);
    restart.addImage(restartImg);
    restart.visible=false;
    restart.scale=0.7;

     gameOver=createSprite(650,250,10,10);
     gameOver.addImage(gameOverImg);
     gameOver.visible=false;
     gameOver.scale=0.3;
      
    
    tileGroup = new Group();
   zombieGroup = new Group();
   gadgetGroup=new Group();
   story1=createSprite(600,400);
   story1.visible=false;
   story1.scale=0.9;
   story1.addImage("story",story)
   
   firstPage=createSprite(600,400);
   firstPage.addImage(fPage);
   
   firstPage.visible=false;
   rules=createSprite(600,400);
   rules.addImage(rule);
   rules.visible=false;
   rules.scale=0.8;
  Theme=createSprite(600,400);
  Theme.addImage(Themeimg);
  Theme.visible=false;
   
   score=0;
   score.visible=false;
}
function draw() {
background("white");

if(gameState==="first"){
  bg.addImage(room);
  bg.scale=1.7;
 changePage.mouseClicked(()=>{
   counter +=1
   switch(counter){
    case 1 :  firstPage.visible=true;
    firstPage.scale=1.1;
    break;
   case 2 :  
   Theme.visible=true;
   firstPage.visible=false;
  
    break;
    case 3 : 
    rules.visible=true;
     firstPage.visible=false;
     Theme.visible=false;
    break;

case 4 : 
rules.visible=false;
firstPage.visible=false;
Theme.visible=false;
Ns.visible=true;
dora.visible=true;
text1.visible=true;
 text2.visible=false;
    break;
case 5 : 
text1.visible=false;
text2.visible = true;
break;
case 6: 
text1.visible=false;
text2.visible =false;
story1.visible=true;
break;
case 7 : gameState = "second"
story1.visible=false;
text1.visible=false;
text2.visible=false;
Ns.visible=false;
dora.visible=false;
changePage.hide();
bg.addImage(backgroundImg);
bg.scale=1.4;
bg.velocityX=-3;


console.log(score);


default : console.log("error")

   }
 })

}
if(gameState === "second"){
  ground=createSprite(600,760);
    
  ground.addImage(mainGround);
  ground.scale=1.2;
 score = score + Math.round(getFrameRate()/60);

 
 
  if(keyDown("space")&&doraemon.y>=590){
  doraemon.velocityY=-15;

  }
    if(gadgetGroup.isTouching(zombieGroup)){
    zombieGroup.destroyEach();
    gadgetGroup.destroyEach();
    
      }
      if(tileGroup.isTouching(doraemon)){
       score=score+50;
       tileGroup.destroyEach();



      }
      if(bg.x<0){
        bg.x=bg.width/4;
      }
  doraemon.velocityY=doraemon.velocityY+0.6;
  doraemon.collide(invisibleGround);
  doraemon.visible=true;
  skeleton.visible=true;
  dbush.visible=true;
  tree.visible=true;
  tomb1.visible=true;
  tomb2.visible=true;
  spawnZombies();
  spawnBullet();
  spawnTiles();
  doraemon.debug=false;
 if(zombieGroup.isTouching(doraemon)){
 
   gameState="third";

 }
  console.log(gameState)

  
}

else if(gameState === "third"){
 
  gameOver.visible = true;
  restart.visible = true;

  doraemon.addImage(doraemon_zombie);
  
  
  bg.velocityX = 0;
  doraemon.velocityY = 0;
  zombieGroup.setVelocityXEach(0);
  tileGroup.setVelocityXEach(0);
  
 
 
 
  zombieGroup.setLifetimeEach(-1);
  tileGroup.setLifetimeEach(-1);
  
  if(mousePressedOver(restart)) {
    reset();
  }
 


  }
  
  
  
 
  drawSprites();
  
  stroke("red");
  fill("red");
  textSize(18);
  text("Score :"+score,800,200);
  }
  
  function spawnZombies(){
    if(frameCount%120===0){
      zombie=createSprite(1200,600);
      zombie.addAnimation("zr",zombie_running);
      zombie.velocityX=-9;
      zombie.scale=0.2;
      zombie.lifetime=133;
    zombieGroup.add(zombie);
    }


  }
  function spawnTiles(){

  if(frameCount%100===0){
    tile = createSprite(1200,440,40,10);
    tile.y = Math.round(random(400,440));
    tile.addImage(tileImg);
    tile.scale = 0.3;
    tile.velocityX = -6;
    tileGroup.setLifetimeEach(200);
    tileGroup.add(tile);
    
  }


  }


  function spawnBullet(){
  if(keyDown("k")){
  gadget=createSprite(doraemon.x,doraemon.y);
  gadget.addImage(Gadget);
  gadget.velocityX=9;
  gadget.scale=0.1;
  gadgetGroup.setLifetimeEach(133);
  gadgetGroup.add(gadget);
  }



  }
  function reset(){
    gameState = "second";
    gameOver.visible = false;
    restart.visible = false;
    if(bg.x<0){
      bg.x=bg.width/4;
    }
    bg.velocityX=-4;
   zombieGroup.destroyEach();
    tileGroup.destroyEach();
    
    doraemon.changeAnimation("running",doraemon_running);
    
    if(localStorage["HighestScore"]<score){
     localStorage["HighestScore"] = score;
    }
    console.log(localStorage["HighestScore"]);
    
    score = 0;
    
  }