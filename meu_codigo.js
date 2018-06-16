var contobs = 0
var contvida = 0 , xv, yv, vidabonus = false 
var tela = 1 //inicio do jogo 
var vida = 5, pontos = 0, nivel = 1
var xp, yp //posição do personagem
var obsX = [], obsY = [], obsVel = [], obsTam = 60, qtobs = 5//obstaculos 
var xtiro = [] , ytiro = [] , tiroativo = [] , qtiro = 7, ttiro = -1, tamtiro = 10 // tiros 
var estrelasX = [], estrelasY = [], estrelasVel = [], estrelasTam = [], qtEstrelas = 50 //fundo
function setup() {
createCanvas(1366, 662);
frameRate(30)
xp = 680
yp = 591
xv = random(333,1033) 
yv = -random(331,622)
for(i=0; i < qtiro; i++){
	xtiro[i] = 2000
	tiroativo[i] = false
	ytiro[i] = 2000
}
for (i = 0; i < qtEstrelas; i++) {
		estrelasX[i] = random(330,1030);
		estrelasY[i] = random(0,height); 
		estrelasVel[i] = 2+random(0,10)/10; 
		estrelasTam[i] = random(2,4); 
}
for (i = 0; i < qtobs; i++) {
		obsX[i] = random(330,1030);
		obsY[i] = -random(0,height); 
		obsVel[i] = 2+random(0,10)/10; 
}
}

function draw() {
  background(0);
  if ( tela == 1 ) { // tela inicial 
		textSize(28); 
		fill(200);
		text("PRESSIONE ENTER PARA COMEÇAR", 455, 331);
		if ( keyIsDown(13) ){ 
		tela = 2; }
  }
  if(tela == 3){ // tela game over
	textSize(28); 
		fill(200);
		text("GAME OVER", 595, 331);
	textSize(18); 
	fill(200);
	    text("Pressione enter para recomeçar", 560, 650);
		if ( keyIsDown(13) ){ 
		tela = 2
		vida = 5; }
}
if(tela == 4){ // tela de pausa 
	textSize(28); 
		fill(200);
		text("PAUSE", 632, 331);
	textSize(18); 
		fill(200);
		text("Pressione enter para retornar", 570, 650);
		if ( keyIsDown(13) ){ 
		tela = 2
		}
}
if(tela == 5){ // nivel 2
textSize(28); 
		fill(200);
		text("level 2", 595, 331);
		textSize(18); 
	fill(200);
	    text("Pressione enter para recomeçar", 560, 650);
		if ( keyIsDown(13) ){ 
		tela = 2
		}
}
if(tela == 6){ // nivel 3
textSize(28); 
		fill(200);
		text("level 3", 595, 331);
		textSize(18); 
	fill(200);
	    text("Pressione enter para recomeçar", 560, 650);
		if ( keyIsDown(13) ){ 
		tela = 2
		}
}
if(tela == 7){ // nivel 4
textSize(28); 
		fill(200);
		text("level 4", 595, 331);
		textSize(18); 
	fill(200);
	    text("Pressione enter para recomeçar", 560, 650);
		if ( keyIsDown(13) ){ 
		tela = 2
		}
}
if(tela == 8){ // nivel 5
textSize(28); 
		fill(200);
		text("level 5", 595, 331);
		textSize(18); 
	fill(200);
	    text("Pressione enter para recomeçar", 560, 650);
		if ( keyIsDown(13) ){ 
		tela = 2
		}
}
if(tela == 2){ // tela de jogo 
textSize(14);
  fill(255); 
  text("PONTOS = "+ pontos+" "+" \n VIDAS = "+ vida+" "+"\n NÍVEL = "+nivel, 1100, 35)
  

 if (keyIsDown(LEFT_ARROW)){
    xp -=12;
 }
  if (keyIsDown(RIGHT_ARROW)){
    xp +=12;
  }
  if (keyIsDown(UP_ARROW)){
    yp -=12;
  }
  if (keyIsDown(DOWN_ARROW)){
    yp +=12;
  }
  if ( keyIsDown(32) && ttiro < 0 ) {
	ttiro = 5; 
  for(i=0; i<qtiro; i++){
	  if(tiroativo[i] == false){
		  tiroativo[i] = true
		  ytiro[i] = yp
		  xtiro[i] = xp
		  break
	  }
  }
  }
  ttiro--
  for(i=0; i<qtiro; i++){ // colisão entre tiro e obstaculo 
	  for(j = 0; j < qtobs; j++){
		  if(dist(xtiro[i], ytiro[i], obsX[j], obsY[j]) < (10 + 60)/2){
				  obsX[j] = random(350,1030)
				  obsY[j] = -random(0,height)
				  xtiro[i] = 2000
				  ytiro[i] = 2000
				  pontos += 10
				  contvida += 1
			tiroativo[i] = false
			}
		}
	}
if(contvida == 30){
	vidabonus = true
	contvida = 0
}
if(vidabonus == true){
	yv+=5
	if(dist(xv,yv,xp,yp)<(40 + 50)/2){
		vida+=1
		vidabonus = false
		xv = random(333,1033) 
        yv = -random(331,622)
	}
	for(i=0; i<qtiro; i++){
		if(dist(xtiro[i], ytiro[i], xv, yv)< (10 + 50)/2 || yv >= 631){
			vidabonus = false 
			xv = random(333,1033) 
            yv = -random(331,622)
		}
	}
}	
 for(i = 0; i < qtobs; i++){ // colisão entre personagem e obstaculo 
 if(dist(obsX[i], obsY[i], xp, yp) < (40 + 60)/2){
   vida -= 1
   obsX[i] = random(350,1030)
   obsY[i] = -random(0,height)
 }
 }
  
  if(xp -20<350){
	  xp = 350+20
  };
  if(xp +20> 1030){
	  xp = 1030-20
  };
  if(yp -20<0){
	  yp = 0+20
  };
  if(yp +20 > height){
	  yp = height-20
  };
   for(i = 0; i < qtEstrelas; i++) { // criando o fundo
	  ellipse(estrelasX[i],estrelasY[i],estrelasTam[i],estrelasTam[i])
  }
  for(i = 0; i < qtEstrelas; i++) { // movimento do fundo 
	  estrelasY[i] = estrelasY[i] + estrelasVel[i]; 
	  if (estrelasY[i] > 631) {
		estrelasX[i] = random(350,1030);
		estrelasY[i] = -random(0,height); 
	  }
}
for(i = 0; i < qtobs; i++) {// criando obstaculo 
	  fill('rgba(0,255,0, 0.25)')
	  ellipse(obsX[i],obsY[i],obsTam,obsTam)
  };
  for(i = 0; i < qtobs; i++) { //movimento obstaculo
	  obsY[i] += obsVel[i]; 
	  if (obsY[i] > 631) {
		contobs+=1
		obsX[i] = random(350,1030);
		obsY[i] = -random(0,331); 
		if(contobs == 2){
			  contobs=0
			  vida-=1
		}
	  };
}
  for(i=0; i<qtiro; i++){// movimento tiro 
	  if(tiroativo[i]){
		  fill(255,0,0)
		  ellipse(xtiro[i], ytiro[i],tamtiro,tamtiro)
		  ytiro[i] -=10
		  if(ytiro[i] < 0){
			  xtiro[i]= 2000
			  ytiro[i] = 2000
			  tiroativo[i] = false 
		  };
	  };
  };
  if(vida == 0){
	  tela = 3
	  nivel = 1
	  pontos = 0
	  xp = 680
	  yp = 591
	  qtobs = 5
	  for (i = 0; i < qtobs; i++) {
		obsX[i] = random(350,1030);
		obsY[i] = -random(31,631); 
		obsVel[i] = 2+random(0,10)/10; 
        }
      for(i=0; i<qtiro; i++){
		  xtiro[i]= 2000
		  ytiro[i] = 2000
		  tiroativo[i] = false 
	  }
  }
  if(keyIsDown(16)){
	  tela = 4
  }
  while(pontos==500){// nivel 2
	  pontos+=10
	  tela=5
	  nivel = 2
	  qtobs +=3
	  xp = 680
	  yp = 591
	  for (i = 0; i < qtobs; i++) {
		obsX[i] = random(350,1030);
		obsY[i] = -random(31,631); 
		obsVel[i] = 2+random(0,15)/10;
  }
  for(i=0; i<qtiro; i++){
		  xtiro[i]= 2000
		  ytiro[i] = 2000
		  tiroativo[i] = false 
	  }
  }
   while(pontos==1500){// nivel 3
	  pontos+=10
	  tela=6
	  nivel = 3
	  qtobs +=5
	  xp = 680
	  yp = 591
	  for (i = 0; i < qtobs; i++) {
		obsX[i] = random(350,1030);
		obsY[i] = -random(31,631); 
		obsVel[i] = 2+random(0,20)/10;
  }
  for(i=0; i<qtiro; i++){
		  xtiro[i]= 2000
		  ytiro[i] = 2000
		  tiroativo[i] = false 
	  }
  }
     while(pontos==3000){// nivel 4
	  pontos+=10
	  tela=7
	  nivel = 4
	  qtobs +=3
	  xp = 680
	  yp = 591
	  for (i = 0; i < qtobs; i++) {
		obsX[i] = random(350,1030);
		obsY[i] = -random(31,631); 
		obsVel[i] = 2+random(0,22)/10;
  }
  for(i=0; i<qtiro; i++){
		  xtiro[i]= 2000
		  ytiro[i] = 2000
		  tiroativo[i] = false 
	  }
  }
      while(pontos==4200){// nivel 5
	  pontos+=10
	  tela=8
	  nivel = 5
	  qtobs +=1
	  xp = 680
	  yp = 591
	  for (i = 0; i < qtobs; i++) {
		obsX[i] = random(350,1030);
		obsY[i] = -random(31,631); 
		obsVel[i] = 2+random(0,24)/10;
  }
  for(i=0; i<qtiro; i++){
		  xtiro[i]= 2000
		  ytiro[i] = 2000
		  tiroativo[i] = false 
	  }
  }
  fill(255,0,0)
  ellipse(xp, yp, 40, 40);
  ellipse(xv,yv,50,50)

}
}
