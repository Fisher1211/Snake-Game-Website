var snake = {
  x:0,
  y:0,
  xspeed: 0,
  yspeed: 0,
  w: 15
}
function setup() {
  createCanvas(800,400);
  frameRate(8);

} 

function draw() {
  snake.x= snake.x + snake.xspeed;
  snake.y= snake.y + snake.yspeed;
  background(51);
  fill(255)
  rect(snake.x,snake.y,snake.w,15)
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
  }
}
function wallBounce(){
  if (snake.x > 780){
    snake.x = -20;
  } else if (snake.x < 0){
    snake.x = 800;
  } else if (snake.y > 400){
    snake.y = -20;
  } else if (snake.y < 0){
    snake.y = 415
  }
}


