let array = [];
let backgroundColor = 200;

function setup() {
  createCanvas(400, 400);
  background(backgroundColor);


  drawGrid();
  noFill();
}

function draw() {
  colorMode(HSB);
  if (mouseIsPressed) {
    backgroundColor -= 5;
    background(backgroundColor);
    // line(mouseX, mouseY, pmouseX, pmouseY);
    array.push([mouseX, mouseY]);


    beginShape();
    for (let i = 0; i < array.length; i++) {
      //line(array[i] [0], array[i] [1], array[i + 1][0], array[i + 1] [1]);
      curveVertex(array[i][0], array[i][1])

      noStroke();
      stroke((4 * frameCount) % 360, 40, 100);
      fill((4 * frameCount) % 360, 100, 100);

      strokeWeight(20);
      line(mouseX, mouseY, pmouseX, pmouseY);
    }
    colorMode(RGB);
    endShape();

  }

}

function keyTyped() {

  if (key == 's') {
    //save this image
    saveCanvas('fileName', 'png');
  } else if (key == 'd') {
    //display image
    background(224, 251, 255);

    beginShape();
    for (let i = 0; i < array.length; i++) {
      //line(array[i] [0], array[i] [1], array[i + 1][0], array[i + 1] [1]);
      curveVertex(array[i][0], array[i][1])
    }
    endShape();


  }

  return false;

}

function mousePressed() {
  array = [];
  backgroundColor = 255;
}

function drawGrid() {
  numCells = 20;
  fillColor = 255;
  //noStroke();
  strokeWeight(0);

  for (let i = 0; i <= width; i += width / numCells) {
    for (let j = 0; j <= height; j += height / numCells) {
      if (fillColor === 255) {
        fillColor = 200;
      } else {
        fillColor = 255;
      }
      fill(fillColor);
      rect(i, j, width / numCells, height / numCells);
    }
  }

  strokeWeight(5);
}
