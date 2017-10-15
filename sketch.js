
   var S=1,
       I=0,
       R=0,
       S1=1;
       RAND1='#e86584',
       RAND2='#3c5979';
       click=false;
       first=true;
       T=0;
       
       
var colorList1 = ['#e86584',
                 '#3c5979',
                 '#018cb7',
                 '#fae093'];
                 
var colorList2 = ['#e86584',
                 '#3c5979',
                 '#018cb7',
                 '#fae093'];



function setup() {
  createCanvas(500, 500);
  angleMode(DEGREES);
  background(235);
}

function draw() {

 var L=2000,//lungezza lato Triangolo
     h=((sqrt(3))/2)*L; //Altezza Triangolo

 T++;
 S1=S1+(S1/100);

 fill("black")
 noStroke()
 
 translate(width/2,(height/2)/*+((2*h/3)-(h/2))*/)  //Centra il Triangolo;

 
 rotate(-T)
 scale(S1)

if (click==true) {
 
 if (T % 50 == 0) {RAND1=[random(255),random(255),random(255)];RAND2=[random(255),random(255),random(255)]}

 for (I,S,R;  I<100;  I++/*, R+=5, S=S+1*/ ) {
  
  if (I % 2 == 0) {fill(RAND1)} else {fill(RAND2)}
 
  scale(0.85)
  rotate(5)
  //scale(1-(R/33.3252))
  
  beginShape();
   vertex(0,0);
   vertex(0,h/3);
   vertex(L/2,h/3);
   vertex(0,-2*h/3);
   vertex(-L/2,h/3);
   vertex(0,h/3);
  endShape(CLOSE);
  
 }
}

else {

 for (I,S,R;  I<100;  I++/*, R+=5, S=S+1*/ ) {
  
  
 
  scale(0.85)
  rotate(5)
  //scale(1-(R/33.3252))

  if (I % 2 == 0) {fill("black")} else {fill("white")}
 
  beginShape();
   vertex(0,0);
   vertex(0,h/3);
   vertex(L/2,h/3);
   vertex(0,-2*h/3);
   vertex(-L/2,h/3);
   vertex(0,h/3);
  endShape(CLOSE);
 
 }
}

if (I==100) {I=0,R=0,S=1}
if (T==518) {S1=1,T=0}
//console.log(T);


/*if (first==true) {
fill("red")
 textBuffer.text("Click anywhere to toggle Psyicadelic mode", 50,250);
}
*/

}

function mouseClicked() {click=!click; /*first=false*/}