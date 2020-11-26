var wall,wallimg,box,boximg,boxes,boxesimg,house,houseimg,player,playerFimg,playershootFimg,
enemyF,enemyFimg,enemyshootFimg,stone,stoneimg,tree,treeimg,bg,wallH,wallHimg
var form,game;
function preload(){
wallimg=loadImage("Images/Wall.png");
boximg=loadImage("Images/Box.png");
boxesimg=loadImage("Images/Boxes.png");
houseimg=loadImage("Images/House.png");
playerimg=loadImage("Images/PlayerF.png");
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
}
function draw(){
    // background("#839a00");\
}
function play(){
    background("green");
    player= createSprite(600,500,20,20);
    player.addImage(playerimg);
    player.rotateToDirection=true
    player.rotation=mouseX;

    wall1= createSprite(600,300,20,20);
    wall1.addImage(wallHimg);
drawSprites();
}