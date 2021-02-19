var tom , jerry , tomimage , jerryimage , background , backgroundimage;
function preload() {
    //load the images here
    tomimage = loadImage("cat1.png");
    jerryimage = loadImage("mouse1.png");
    backgroundimage = loadImage("garden.png");
}

function setup(){
    createCanvas(600,600);
    //create tom and jerry sprites here
    tom = createSprite(30,300,20,20);
    tom.addImage("jjklkl",tomimage);
    jerry = createSprite(200,300,20,20);
    jerry.addImage("jjkkdj",jerryimage);
    background = createSprite(600,600.20,20);
    background.addImage("huhi",backgroundimage);

}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
     
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here


}
