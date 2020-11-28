var wall,wallimg,box,boximg,boxes,boxesimg,house,houseimg,player,playerFimg,playershootFimg,
enemyF,enemyFimg,enemyshootFimg,stone,stoneimg,tree,treeimg,bg,wallH,wallHimg
var form,game;
var gameState=0;
function preload(){
wallimg=loadImage("Images/Wall.png");
boximg=loadImage("Images/Box.png");
boxesimg=loadImage("Images/Boxes.png");
houseimg=loadImage("Images/House.png");
playerimg=loadImage("Images/PlayerR.png");
playershootimg=loadImage("Images/PlayerShootF.png");
enemyimg=loadImage("Images/EnemyF.png");
enemyshootimg=loadImage("Images/EnemyShootF.png");
stoneimg=loadImage("Images/Stone.png");
treeimg=loadImage("Images/Tree.png");
bg=loadImage("Images/Map1.png");
wallHimg=loadImage("Images/WallH.png");
}
function setup(){
createCanvas(1366,653);
form= new Form();

form.display();
edges=createEdgeSprites();
player= createSprite(600,500,20,20);
    player.addImage(playerimg);
    player.scale=0.5;
    wall1= createSprite(150,400,20,20);
    wall1.addImage(wallHimg);
    wall2=createSprite(210,400,20,20);
    wall2.addImage(wallHimg);
    wall3=createSprite(270,400,20,20);
    wall3.addImage(wallHimg);
    wall4=createSprite(330,400,20,20);
    wall4.addImage(wallHimg);
    wall5=createSprite(390,400,20,20);
    wall5.addImage(wallHimg);
    wall19=createSprite(90,400,20,20);
    wall19.addImage(wallHimg);
    wall20=createSprite(30,400,20,20);
    wall20.addImage(wallHimg);

    wall6=createSprite(510,400,20,20);
    wall6.addImage(wallHimg);
    wall7=createSprite(570,400,20,20);
    wall7.addImage(wallHimg);
    wall8=createSprite(630,400,20,20);
    wall8.addImage(wallHimg);
    wall9=createSprite(690,400,20,20);
    wall9.addImage(wallHimg);
    wall10=createSprite(750,400,20,20);
    wall10.addImage(wallHimg);

    wall11=createSprite(770,350,20,20);
    wall11.addImage(wallimg)
    wall12=createSprite(770,300,20,20)
    wall12.addImage(wallimg);
    wall13=createSprite(770,250,20,20);
    wall13.addImage(wallimg);
    wall14=createSprite(770,200,20,20);
    wall14.addImage(wallimg);
    wall15=createSprite(770,150,20,20);
    wall15.addImage(wallimg);

    wall16=createSprite(795,120,20,20);
    wall16.addImage(wallHimg)
    wall17=createSprite(855,120,20,20);
    wall17.addImage(wallHimg);
    wall18=createSprite(915,120,20,20);
    wall18.addImage(wallHimg);

    wall21=createSprite(935,70,20,20);
    wall21.addImage(wallimg);
    wall22=createSprite(935,20,20,20);
    wall22.addImage(wallimg)
    wallinv=createSprite(935,-30,20,20);
    
    wall1.setCollider("rectangle",0,0,100,20);
    wall12.setCollider("rectangle",0,0,100,20);
    wall3.setCollider("rectangle",0,0,100,20);
    wall4.setCollider("rectangle",0,0,100,20);
    wall5.setCollider("rectangle",0,0,60,20);
    wall6.setCollider("rectangle",0,0,60,20);
    wall7.setCollider("rectangle",0,0,100,20);
    wall8.setCollider("rectangle",0,0,100,20);
    wall9.setCollider("rectangle",0,0,100,20);
    wall10.setCollider("rectangle",0,0,100,20);
    wall11.setCollider("rectangle",0,0,20,100);
    wall12.setCollider("rectangle",0,0,20,100);
    wall13.setCollider("rectangle",0,0,20,100);
    wall14.setCollider("rectangle",0,0,20,100);
    wall15.setCollider("rectangle",0,0,20,100);
    wall16.setCollider("rectangle",0,0,100,20);
    wall17.setCollider("rectangle",0,0,100,20);
    wall18.setCollider("rectangle",0,0,100,20);
    wall19.setCollider("rectangle",0,0,100,20);
    wall20.setCollider("rectangle",0,0,100,20);
    wall21.setCollider("rectangle",0,0,20,100);
    wall22.setCollider("rectangle",0,0,20,100);
    wallinv.setCollider("rectangle",0,0,20,2000);
    
    player.setCollider("circle",0,-20,20)
}
function draw(){
    // background("#839a00");\
    if(gameState===2){
        background("green");
        player.pointTo(mouseX,mouseY);
        drawSprites();
    }
    if(keyDown("w")){
        player.y=player.y-3;
    }
    if(keyDown("s")){
        player.y=player.y+3;
    }
    if(keyDown("a")){
        player.x=player.x-3;
    }
    if(keyDown("d")){
        player.x=player.x+3
    }

    player.collide(wall1);
    player.collide(wall2);
    player.collide(wall3);
    player.collide(wall4);
    player.collide(wall5);
    player.collide(wall6);
    player.collide(wall7);
    player.collide(wall8);
    player.collide(wall9);
    player.collide(wall10);
    player.collide(wall11);
    player.collide(wall12);
    player.collide(wall13);
    player.collide(wall14);
    player.collide(wall15);
    player.collide(wall16);
    player.collide(wall17);
    player.collide(wall18);
    player.collide(wall19);
    player.collide(wall20);
    player.collide(wall21);
    player.collide(wall22);
    player.collide(wallinv);

    player.collide(edges);
}
function play(){
    background("green");

   
    drawSprites();
}