var snake = {
  x:0,
  y:0,
  xspeed: 0,
  yspeed: 0,
 
}
function setup() {
  createCanvas(600,400);
  frameRate(8);
}

function draw() {
  snake.x= snake.x + snake.xspeed;
  snake.y= snake.y + snake.yspeed;
  background(51);
  fill(255)
  rect(snake.x,snake.y,15,15)
  wallBounce();
}
function keyPressed() {
  if (keyCode === UP_ARROW) {
    snake.yspeed = snake.yspeed = -20;
    snake.xspeed=0;
  } else if (keyCode === DOWN_ARROW) {
    snake.yspeed = snake.yspeed = 20;
    snake.xspeed=0;
  } else if (keyCode === RIGHT_ARROW) {
    snake.xspeed = snake.xspeed =20;
    snake.yspeed=0;
  } else if (keyCode === LEFT_ARROW) {
    snake.xspeed = snake.xspeed =-20;
    snake.yspeed=0;
  } else if (keyCode === ESCAPE) {
    snake.xspeed = snake.xspeed =0;
    snake.yspeed=0;
  }
}
function wallBounce(){
  if (snake.x > 600){
    snake.x = -20;
  } else if (snake.x < 0){
    snake.x = 615;
  } else if (snake.y > 400){
    snake.y = -20;
  } else if (snake.y < 0){
    snake.y = 415
  }
  
}
