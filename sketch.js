var score =0;
var gun,bluebubble,redbubble, bullet, backBoard;
var gunImg,bubbleImg, bulletImg, blastImg, backBoardImg;
var redBubbleGroup, redBubbleGroup, bulletGroup;

var life =3;
var score=0;
var gameState=1

function preload(){
  gunImg = loadImage("gun1.png")
  blastImg = loadImage("blast.png")
  bulletImg = loadImage("bullet1.png")
  blueBubbleImg = loadImage("waterBubble.png")
  redBubbleImg = loadImage("redbubble.png")
  backBoardImg= loadImage("back.jpg")
}
function setup() {
  createCanvas(800, 800);

  backBoard= createSprite(50, width/2, 100,height);
  backBoard.addImage(backBoardImg)
  
  gun= createSprite(100, height/2, 50,50);
  gun.addImage(gunImg)
  gun.scale=0.2
  
  bulletGroup = createGroup(); 
  heading=creatElement("h1");
  scoreboard=creatElement("h1");   
  blueBubbleGroup = createGroup();   
  redBubbleGroup = createGroup();   
  function handleBubbleCollision(bubbleGroup){
    if(life>0){
      score=score+1;
    }
    bulletGroup.destroyEach()
    bubbleGroup.destroyEach()
  }
  
}

function draw() {
  background("#BDA297");

  //display Score and number of lifes
  scoreboard.html("score: "+score)
  scoreboard.style('color:red');
  scoreboard.position(width-200,20)


  if(gameState===1){
    gun.y=mouseY  

    
    drawSprites();
  }
     
}

