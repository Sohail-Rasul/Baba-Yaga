var wall,wallimg
var box,boximg,boxes,boxesimg
var house,houseimg;
var player,playerRimg,playershootRimg;
var enemyF,enemyFimg,enemyshootFimg;
var stone,stoneimg;
var tree,treeimg;
var bg;;
var wallH,wallHimg;
var grass,grassimg;
var ground,groundimg;
var bench,benchimg,benchHimg;
var pond,pondimg
var form,game;
var gameState=0;
var name='';
function preload(){
wallimg=loadImage("Images/Wall.png");
boximg=loadImage("Images/Box.png");
boxesimg=loadImage("Images/Boxes.png");
houseimg=loadImage("Images/Hostages.png");
playerimg=loadImage("Images/PlayerR.png");
playershootimg=loadImage("Images/PlayerShootR.png");
enemyimg=loadImage("Images/EnemyF.png");
enemyshootimg=loadImage("Images/EnemyShootF.png");
stoneimg=loadImage("Images/Stone.png");
treeimg=loadImage("Images/Tree.png");
bg=loadImage("Images/Map1.png");
wallHimg=loadImage("Images/WallH.png");
grassimg=loadImage("Images/grass.png");
groundimg=loadImage("Images/ground.png");
benchimg=loadImage("Images/bench.png");
benchHimg=loadImage("Images/benchH.png")
pondimg=loadImage("Images/Pond.png");
}
function setup(){
createCanvas(1366,653);
form= new Form();

form.display();
edges=createEdgeSprites();
player= createSprite(600,500,20,20);
    player.addImage("p",playerimg);
    player.addImage("ps",playershootimg);
    player.scale=0.5;
    // WALLS
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

    //left= x dist- 26, y dist- 32.5
    // right =x dist+20 y dist -32.5
    wall23=createSprite(570,100,20,20);
    wall23.addImage(wallHimg);
    wall24=createSprite(544,67.5,20,20);
    wall24.addImage(wallimg);
    wall25=createSprite(350,200,20,20);
    wall25.addImage(wallHimg);
    wall26=createSprite(370,167.5,20,20);
    wall26.addImage(wallimg);
    //stones
    stone1=createSprite(170,320,20,20);
    stone1.addImage(stoneimg);
    stone2=createSprite(400,70,20,20)
    stone2.addImage(stoneimg);
    // trees
    tree1=createSprite(200,120,20,20);
    tree1.addImage(treeimg);
    tree2=createSprite(460,230,20,20);
    tree2.addImage(treeimg);
    tree3=createSprite(200,520,20,20);
    tree3.addImage(treeimg);
    tree4=createSprite(240,590,20,20);
    tree4.addImage(treeimg);
    tree5=createSprite(500,480,20,20);
    tree5.addImage(treeimg);
    tree6=createSprite(830,320,20,20);
    tree6.addImage(treeimg);
    tree7=createSprite(650,560,20,20);
    tree7.addImage(treeimg);
    tree8=createSprite(780,530,20,20);
    tree8.addImage(treeimg);
    

    // boxes
    box1=createSprite(680,250,20,20);
    box1.addImage(boxesimg);
    box2=createSprite(160,190,20,20);
    box2.addImage(boxesimg);
    box3=createSprite(750,50,20,20);
    box3.addImage(boxesimg);
    // grass
    grass1=createSprite(500,350,20,20);
    grass1.addImage(grassimg);
    grass1.scale=0.5
    grass2=createSprite(300,300,20,20);
    grass2.addImage(grassimg);
    grass2.scale=0.5
    grass3=createSprite(270,130,20,20);
    grass3.addImage(grassimg);
    grass3.scale=0.5
    grass4=createSprite(700,170,20,20);
    grass4.addImage(grassimg);
    grass4.scale=0.5
    grass5=createSprite(80,270,20,20);
    grass5.addImage(grassimg);
    grass5.scale=0.5
    grass6=createSprite(500,550,20,20);
    grass6.addImage(grassimg);
    grass6.scale=0.5
    grass7=createSprite(690,490,20,20);
    grass7.addImage(grassimg);
    grass7.scale=0.5
    grass8=createSprite(880,250,20,20);
    grass8.addImage(grassimg);
    grass8.scale=0.5
    grass9=createSprite(50,600,20,20);
    grass9.addImage(grassimg);
    grass9.scale=0.5
    grass10=createSprite(500,350,20,20);
    grass10.addImage(grassimg);
    grass10.scale=0.5
    // Dirt
    dirt1=createSprite(230,200,20,20);
    dirt1.addImage(groundimg);  
    dirt4=createSprite(630,160,20,20);
    dirt4.addImage(groundimg);
    dirt6=createSprite(600,340,20,20);
    dirt6.addImage(groundimg);
    dirt7=createSprite(400,500,20,20);
    dirt7.addImage(groundimg);
    dirt9=createSprite(840,500,20,20);
    dirt9.addImage(groundimg);
    dirt10=createSprite(100,600,20,20);
    dirt10.addImage(groundimg);
    dirt11=createSprite(100,70,20,20);
    dirt11.addImage(groundimg)
    // Pond
    pond1=createSprite(50,500,20,20);
    pond1.addImage(pondimg);
    pond1.scale=1.5
    // bench
    bench1=createSprite(400,340,20,20);
    bench1.addImage(benchimg);
    bench2=createSprite(500,180,20,20);
    bench2.addImage(benchHimg);
    bench3=createSprite(880,200,20,20);
    bench3.addImage(benchimg);
    bench4=createSprite(50,150,20,20);
    bench4.addImage(benchHimg);
    // Hostages
    house1=createSprite(50,50,20,20);
    house1.addImage(houseimg);
    // SET COLLIDERS
    wall1.setCollider("rectangle",0,0,100,20);
    wall2.setCollider("rectangle",0,0,100,20);
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
    wall23.setCollider("rectangle",-10,0,70,20);
    wall24.setCollider("rectangle",0,0,20,70);
    wall25.setCollider("rectangle",-10,0,70,20);
    wall26.setCollider("rectangle",0,0,20,70);;
    box1.setCollider("circle",0,0,40);
    box2.setCollider("circle",0,10,30);
    box3.setCollider("circle",0,0,40);
    stone1.setCollider("circle",-7,7,20);
    stone2.setCollider("circle",-7,7,20);
    tree1.setCollider("circle",-4,0,15);
    tree2.setCollider("circle",-4,0,15);
    tree3.setCollider("circle",-4,0,15);
    tree4.setCollider("circle",-4,0,15);
    tree5.setCollider("circle",-4,0,15);
    tree6.setCollider("circle",-4,0,15);
    tree7.setCollider("circle",-4,0,15);
    tree8.setCollider("circle",-4,0,15);
    pond1.setCollider("circle",-25,-10,50);
   


    player.setCollider("circle",0,-20,20)
}
function draw(){
    // background("#839a00");\
    if(gameState===2){
        background("green");
        fill("grey");
    rect(945,0,10,653);
        player.pointTo(mouseX,mouseY);
        text(name,player.x-20,player.y+33);
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

if(keyWentDown("space")){
    player.changeImage("ps",playershootimg);
}
if(keyWentUp("space")){
    player.changeImage("p",playerimg);
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
    player.collide(wall23);
    player.collide(wall24);
    player.collide(wall25);
    player.collide(wall26);
    player.collide(box1);
    player.collide(box2);
    player.collide(box3);
    player.collide(tree1);
    player.collide(tree2);
    player.collide(tree3);
    player.collide(tree4);
    player.collide(tree5);
    player.collide(tree6);
    player.collide(tree7);
    player.collide(tree8);
    player.collide(pond1);

    player.collide(stone1);
    player.collide(stone2);

    player.collide(edges);
    fill("black");
    rect(950,0,431,653);

    
    player.depth=dirt1.depth+50;
    
}
function play(){
    background("green");

   
    drawSprites();
}