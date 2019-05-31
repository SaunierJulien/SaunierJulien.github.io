let bubbles = [];
let brick = 0;
let balls = [];

function setup() {
  createCanvas(700, 550);
    rectMode(CENTER);
    init()
}

function draw() {
  background(0);
  for (let i = 0; i < bubbles.length; i++) {
    fill(bubbles[i].color.r, bubbles[i].color.g, bubbles[i].color.b);
    circle(bubbles[i].x, bubbles[i].y, bubbles[i].r);
    bubbles[i].y += 0.8;
    if(bubbles[i].y > height + 10){
      //bubbles[i].y = -5;
      noLoop()
      text("GAME OVER", width/2, height/2)
      text("Press R to Restart", width/2, height/2 + 50)
    }
  }
  
  for (let j = balls.length - 1; j >= 0; j--){
    let ball = balls[j]
    fill(ball.color);
    circle(ball.x, ball.y, 10);
    ball.y -= 4.5;
    for(let i = bubbles.length -1; i >= 0; i--){
      let d = dist(bubbles[i].x, bubbles[i].y, ball.x, ball.y);
      if(d <= 40){
       
        balls.splice(j, 1);
        let bubble = {
           x: random(0, width),
           y: random(-900, -5),
           r: 30,
           color: {
              r: random(255),
              g: random(255),
              b: random(255)
               }
          }
          bubbles[i].r += 10; 
          if(bubbles[i].r > 40){
            bubbles.push(bubble); 
            bubbles.splice(i, 1);
          }
      }
    }
  }
   fill("grey");
   rect(mouseX, 524, 55, 55, 20);
}

function mouseDragged() {
  brick = brick + 5;
  if (brick > 255) {
  brick = 0;
  }
}

function mouseClicked() {
  let ball = {
    x: mouseX,
    y: height,
    color: "#0f0"
  };
  balls.push(ball);
  }

function init() {
    for (let i = 0; i < 100; i++) {
    bubbles[i] = {
      x: random(0, width),
      y: random(-900, -5),
      r: 30,
      color: {
        r: random(255),
        g: random(255),
        b: random(255)
      }
    };
  }
}

function keyPressed() {
  console.log("keyPressed")
  if (keyCode === 82) {
    init(); 
    loop()
  }
}