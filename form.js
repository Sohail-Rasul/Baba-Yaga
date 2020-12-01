class Form{
  constructor(){
      this.title=createElement('h1');
      this.nameInput=createInput("Enter Your Name");
      this.Map1Button=createButton("|Hostage Rescue|");
      // this.Map2Button=createButton("Map 2");
      // this.Map3Button=createButton("Map 3");  
  }
  display(){
      background("black");
      fill("white");
      this.title.html("Deus Mortis");
      this.title.position(width/2-100,50);
      this.title.style("color","white");
      this.nameInput.position(width/2-100,150);
      this.Map1Button.position(width/2-100,250);
      this.Map1Button.mousePressed(()=>{
      this.nameInput.hide();
      this.title.hide();
      name= this.nameInput.value();
      this.Map1Button.hide();
      gameState=2;
      })  
    }
}