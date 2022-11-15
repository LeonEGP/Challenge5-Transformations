//Programa que implementa las Transformaciones Fundamentales
//Programador: León Emiliano García Pérez (A00573074).
//Fecha de entrega: 16.11.2022.

//Forma de ejecutar: En Editor P5JS
//  1.- Ir a https://editor.p5js.org/
//  2.- Copiar el presente código
//  3.- Darle "play"

//Función que crea el Canvas donde se realiza el dibujado.
function setup() {
  createCanvas(800, 800);
}

//Función que de Traslación.
function myTranslate(x, y, tx, ty) {
  newX = x + tx;
  newY = y + ty;
  return [newX, newY];
}

//Función que de Rotación de Vértices.
function myVertexRotation(x, y, angle) {
  angle = angle * (PI / 180);
  newX = (x * cos(angle)) - (y * sin(angle));
  newY = (x * sin(angle)) + (y * cos(angle));
  return [newX, newY];
}

//Función que de Rotación.
function myRotation(x, y, angle) {
  return myRotationPiv(x,y,angle,width/2,height/2)
}

//Función que de Rotación con Pivote.
function myRotationPiv(x, y, angle, pivX, pivY) {
  angle = angle * (PI / 180);
  newX = pivX + ((x - pivX) * cos(angle)) - ((y - pivY) * sin(angle));
  newY = pivY + ((x - pivX) * sin(angle)) + ((y - pivY) * cos(angle));
  return [newX, newY];
}

//Función de Escalado dado un factor.
function myScaling(x, y, factor) {
  let pivX = width/2;
  let pivY = height/2;
  let dx = x - pivX
  let dy = y - pivY;
  let newX = pivX + factor*dx;
  let newY = pivY + factor*dy;
  return [newX , newY];
}

//Función de Escalado dado un factor, y dos pivotes.
function myScalingPiv(x, y, factor, pivX, pivY) {
  let dx = x - pivX
  let dy = y - pivY;
  let newX = pivX + factor*dx;
  let newY = pivY + factor*dy;
  return [newX , newY];
}

//Función de Reflexión en X.
function myReflectionX(x, y) {
  let pivX = width/2;
  let dX = x-pivX;
  let newX = pivX-dX;
  let newY = y;
  return [newX , newY];
}

//Función de Reflexión en Y.
function myReflectionY(x, y) {
  let pivY = height/2;
  let dY = y-pivY;
  let newX = x;
  let newY =pivY-dY;
  return [newX , newY];
}

//Función de Reflexión en X con Pivote.
function myReflectionXPiv(x, y, pivX) {
  let dX = x-pivX;
  let newX = pivX-dX;
  let newY = y;
  return [newX , newY];
}

//Función de Reflexión en Y con Pivote.
function myReflectionYPiv(x, y, pivY) {
  let dY = y-pivY;
  let newX = x;
  let newY =pivY-dY;
  return [newX , newY];
}

//Función de Corte en X dado un factor.
function myShearX(x, y, factor) {
  let piv = height/2;
  let d = y - piv;
  let newX = x + d*factor;
  return [newX, y];
}

//Función de Corte en Y dado un factor.
function myShearY(x, y, factor) {
   let piv = width/2;
  let d = x - piv;
  let newY = y + d*factor;
  return [x, newY];
}

//Función de Corte en X dado un factor y un pivote.
function myShearYPiv(x, y, factor, piv) {
  let d = x - piv;
  let newY = y + d*factor;
  return [x, newY];
}

//Función de Corte en Y dado un factor y un pivote.
function myShearXPiv(x, y, factor, piv) {
  let d = y - piv;
  let newX = x + d*factor;
  return [newX, y];
}

//Función que dibuja sobre el Canvas.
function draw() {
  
  background(100);
  
  //Polígono base
  fill(255);
  polygon(width/2, height/2, 100, 5, null);
  
  //Prueba de Translate
  //fill(1);
  //polygon(width/2, height/2, 100, 5, myTranslate, 50, 50);
  
  //Prueba de Rotate(Para los vértices)
  //fill(1);
  //polygon(width/2, height/2, 100, 5, myVertexRotation, 10);
  
  //Prueba de Rotation
  //fill(1);
  //polygon(width/2, height/2, 100, 5, myRotation,90);
  
  //Prueba de RotationPiv
  //fill(1);
  //polygon(width/2, height/2, 100, 5, myRotationPiv, 90, width/2,height/2);
  
  //Prueba de Scaling
  //fill(1);
  //polygon(width/2, height/2, 100, 5, myScaling,2);
  
  //Prueba de ScalingPiv
  //fill(1);
  //polygon(width/2, height/2, 100, 5, myScalingPiv,2,  width/2,height/2);
  
  //Prueba de ReflectionX
  //fill(1);
  //polygon(width/2, height/2, 100, 5, myReflectionX);
  
  //Prueba de ReflectionY
  //fill(1);
  //polygon(width/2, height/2, 100, 5, myReflectionY);
  
  //Prueba de ReflectionXPiv
  //fill(1);
  //polygon(width/2, height/2, 100, 5, myReflectionXPiv,width/2);
  
  //Prueba de ReflectionYPiv
  //fill(1);
  //polygon(width/2, height/2, 100, 5, myReflectionYPiv,height/2);
  
  //Prueba de ShearX
  //fill(1);
  //polygon(width/2, height/2, 100, 5, myShearX,2);
  
  //Prueba de ShearY
  //fill(1);
  //polygon(width/2, height/2, 100, 5, myShearY,2);
  
  //Prueba de ShearXPiv
  //fill(1);
  //polygon(width/2, height/2, 100, 5, myShearXPiv,2,height/2);
  
  //Prueba de ShearYPiv
  //fill(1);
  //polygon(width/2, height/2, 100, 5, myShearYPiv,2,width/2);
  
}

//Función de dibujado del polígono.
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
