
   var S=1,
       I=0,
       R=0,
       S1=1;
       RAND1='#e86584',
       RAND2='#3c5979';
       click=false;
       first=true;
       keys=false;
       quadr=true;
       T=0;

function setup() {
  createCanvas(850, 850);
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

 
if (keys==false) {rotate(-T); scale(S1)}
 
if (click==true) {
 
 if (T % 50 == 0) {RAND1=[random(255),random(255),random(255)];RAND2=[random(255),random(255),random(255)]}

 for (I,S,R;  I<120;  I++/*, R+=5, S=S+1*/ ) {
  
  if (I % 2 == 0) {fill(RAND1)} else {fill(RAND2)}
 

  
  if (quadr==true)
  {
  scale(0.916)
  rotate(5)
  //scale(1-(R/33.3252))
  beginShape();
   vertex(0,0);
   vertex(0,L/2);
   vertex(L/2,L/2);
   vertex(L/2,-L/2);
   vertex(-L/2,-L/2);
   vertex(-L/2,L/2);
   vertex(0,L/2);
  endShape(CLOSE);
  }
  
  else {
  scale(0.85)
  rotate(5)
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
}

else {

 for (I,S,R;  I<120;  I++/*, R+=5, S=S+1*/ )  {
  
  if (I % 2 == 0) {fill("black")} else {fill("white")}
 

  
  if (quadr==true)
  {
  scale(0.916)
  rotate(5)
  //scale(1-(R/33.3252))
  beginShape();
   vertex(0,0);
   vertex(0,L/2);
   vertex(L/2,L/2);
   vertex(L/2,-L/2);
   vertex(-L/2,-L/2);
   vertex(-L/2,L/2);
   vertex(0,L/2);
  endShape(CLOSE);
  }
  
  else {
  scale(0.85)
  rotate(5)
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
}

if (I==120) {I=0,R=0,S=1}

if (quadr==true && T==212) {S1=1,T=0}

if (quadr==true && T==518) {S1=1,T=0} 

//console.log(T);


/*if (first==true) {
fill("red")
 textBuffer.text("Click anywhere to toggle Psyicadelic mode", 50,250);
}
*/

}

function mouseClicked() {click=!click; /*first=false*/}

function keyTyped() {
  if (key === 't') {quadr=false;S1=1,T=0} 
  else if (key === 'q') {quadr=true;S1=1,T=0}
  else {keys=!keys;}
}
