var track;
var car1, car2;
var wall1, wall2, wall3, wall4, wall5, wall6, wall7,wall8, wall9, wall10;

function preload() {
  track = loadImage("racetrack.jpg");
  car1 = loadImage("Car 1.png");
  car2 = loadImage("Car 2.PNG");
}

function setup() {
  canvas =  createCanvas(2000,3000);
  
  
  track1 = createSprite(1000,600, 100,100); 
  track1.addImage(track);
 
  car_1 = createSprite(1000,900, 10,20);
  car_1.scale = 0.15;
  car_1.addImage(car1);
  car_1.rotation = 180;
  
  
  car_2 = createSprite(1000,930, 10,20);
  car_2.scale = 0.08;
  car_2.addImage(car2);
  car_2.rotation = 180;


  wall1 = createSprite(800,1000,1000,10);
  wall1.rotation = 0;
  wall1.visible = false;

  wall2 = createSprite(800,860,500,10);
  wall2.rotation = 0;
  wall2.visible = false;

  wall3 = createSprite(300,700,600,10);
  wall3.rotation = 90;
  wall3.visible = false;

  wall4 = createSprite(590,400,600,10);
  wall4.rotation = 0;
  wall4.visible = false;

  wall5 = createSprite(890,200,400,10);
  wall5.rotation = 90;
  wall5.visible = false;

  wall6 = createSprite(1300,100,800,10);
  wall6.rotation = 0;
  wall6.visible = false;

  wall7 = createSprite(1700,300,700,10);
  wall7.rotation = 90;
  wall7.visible = false;

  wall8 = createSprite(1550,650,370,10);
  wall8.rotation = 0;
  wall8.visible = false;

  wall9 = createSprite(1310,890,500,10);
  wall9.rotation = 100;
  wall9.visible = false;

  wall10 = createSprite(550,720,290,10);
  wall10.rotation = 90;
  wall10.visible = false;

  wall11 = createSprite(800,580,600,10);
  wall11.rotation = 0;
  wall11.visible = false;

  wall12 = createSprite(1100,420,300,10);
  wall12.rotation = 90;
  wall12.visible = false;

  wall13 = createSprite(1300,260,400,10);
  wall13.rotation = 0;
  wall13.visible = false;

  wall14 = createSprite(1500,400,200,10);
  wall14.rotation = 90;
  wall14.visible = false;

  wall15 = createSprite(1160,600,400,10);
  wall15.rotation = 90;
  wall15.visible = false;

  wall16 = createSprite(1350,500,300,10);
  wall16.rotation = 0;
  wall16.visible = false;

  

}

function draw() {
  
  if (car_1.collide(wall3)) {
    car1.velocityX = 0;
  }
  
  if (keyIsDown("W")) {
    car_1.velocityX = -3;
  }

  if (keyIsDown("S")) {
    car_1.velocityX = 3;
  }

  drawSprites();
}

/*function keyPressed(){
  if(keyCode === 38){
    car_1.velocityX = -3;
  }
}

function keyPressed(){
  if(keyCode === 40){
    car_1.velocityX = 3;
  }
}

//function keyPressed(){
  //if(keyCode === 37){
    //car_1.roation = 15;
  //}
//}

//function keyPressed(){
  //if(keyCode === 39){
    //car_1.rotation = -15;
  //}
//}




function keyPressed(){
  if(keyCode === 87){
    car_2.velocityX =  -3;
    
  }
}

function keyPressed(){
  if(KeyIsDown === 83){
    car_2.velocityX = 3;

  }
}

//function keyPressed(){
  //if(keyCode === 65){
    //car_2.rotation = 15;
  //}
//}

//function keyPressed(){
  //if(keyCode === 68){
    //car_2.roation = -15;
  //}
//}
*/
