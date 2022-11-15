function setup() {
  createCanvas(800, 800);
}

function myTranslate(x, y, tx, ty) {
  newX = x + tx;
  newY = y + ty;
  return [newX, newY];
}

function myRotation(x, y, angle) {
  return myRotatePiv(x,y, width/2 ,height/2)
}

function myRotatePiv(x, y, angle, pivX, pivY) {
  angle = angle * (PI / 180);
  newX = pivX + ((x - pivX) * cos(angle)) - ((y - pivY) * sin(angle));
  newY = pivY + ((x - pivX) * sin(angle)) + ((y - pivY) * cos(angle));
  return [newX, newY];
}

function myScaling(x, y, factor) {
  let pivX = width/2;
  let pivY = height/2;
  let dx = x - pivX
  let dy = y - pivY;
  let newX = pivX + factor*dx;
  let newY = pivY + factor*dy;
  return [newX , newY];
}

function myScalingPiv(x, y, factor, pivX, pivY) {
  let dx = x - pivX
  let dy = y - pivY;
  let newX = pivX + factor*dx;
  let newY = pivY + factor*dy;
  return [newX , newY];
}

function myReflectionX(x, y) {
  let pivX = width/2;
  let dX = x-pivX;
  let newX = pivX-dX;
  let newY = y;
  return [newX , newY];
}

function myReflectionY(x, y) {
  let pivY = height/2;
  let dY = y-pivY;
  let newX = x;
  let newY =pivY-dY;
  return [newX , newY];
}

function myReflectionXPiv(x, y, PivX) {
  let dX = x-pivX;
  let newX = pivX-dX;
  let newY = y;
  return [newX , newY];
}

function myReflectionYPiv(x, y, PivY) {
  let dY = y-pivY;
  let newX = x;
  let newY =pivY-dY;
  return [newX , newY];
}

function myShearX(x, y, factor) {
  let piv = height/2;
  let d = y - piv;
  let newX = x + d*factor;
  return [newX, y];
}

function myShearY(x, y, factor) {
   let piv = width/2;
  let d = x - piv;
  let newY = y + d*factor;
  return [x, newY];
}

function myShearYPiv(x, y, factor, piv) {
  let d = x - piv;
  let newY = y + d*factor;
  return [x, newY];
}

function myShearXPiv(x, y, factor, piv) {
  let d = y - piv;
  let newX = x + d*factor;
  return [newX, y];
}

function draw() {
  background(102);
  fill(255);
  polygon(width/2, height/2, 100, 4, null);
  //fill(1);
  //polygon(width/2, height/2, 100, 6, myTranslate, 50, 50);
  //fill(255, 1, 1);
  //polygon(width/2, height/2, 100, 6, myRotation, 90);
  //fill(1, 1, 255);
  //polygon(width/2, height/2, 100, 6, myRotatePiv, 90, (width/2)+100,(height/2)+100);
  //fill(255, 1, 1);
  //polygon(width/3, height/3, 100, 6, myScaling, 2);
  //fill(1, 255, 1);
  //polygon(width/3, height/3, 100, 6, myScalingPiv, 2, width/3, height/3);
  fill(1, 255, 1);
  polygon(width/2, height/2, 100, 4, myShearXPiv, 1, height/2-100);
  //fill(1, 255, 1);
  //polygon(width/2, height/2, 100, 6, myShearX, 50, 50, 50);
  //fill(1, 255, 1);
  //polygon(width/2, height/2, 100, 6, myShearY, 50, 50, 50);
}

function polygon(x, y, radius, npoints, transform, ...params) {
  let angle = TWO_PI / npoints;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius;
    let sy = y + sin(a) * radius;
    if (transform != null) {
      [sx, sy] = transform(sx,sy, ...params);
    }
    vertex(sx, sy);
  }
  endShape(CLOSE);
} 
