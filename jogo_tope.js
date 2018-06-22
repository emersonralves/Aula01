
var personagem;
var inicio
var tecla1, tecla2, tecla3, logo
var a, b
var globulo 
var virus = [], contvirus = 1
var fundo = []
var tela = 1 //inicio do jogo 
var vida = 5, pontos = 0, bonus = 0, nivel = 1, contvida = 0 , xv, yv, vidabonus = false
var xp, yp //posição do personagem
var obsX = [], obsY = [], obsVel = [], obsTam = 80, qtobs = 5, contobs = 0 //obstaculos 
var xtiro = [] , ytiro = [] , tiroativo = [] , qtiro = 7, ttiro = -1, tamtiro = 10 // tiros 
var estrelasX = [], estrelasY = [], estrelasVel = [], estrelasTam = 30, qtEstrelas = 50 //fundo
function setup() {
createCanvas(windowWidth, windowHeight);
frameRate(30)
personagem = loadImage("branc.png");
globulo = loadImage("globulo.png")
inicio = loadImage("inicio.png")
tecla1 = loadImage("tecla1.png")
tecla2 = loadImage("tecla2.png")
tecla3 = loadImage("tecla3.png")
logo = loadImage("logo.png")
xp = 680
yp = 591
xv = random(358,1008) 
yv = -random(331,622)
for(i=0; i < qtiro; i++){
  xtiro[i] = 2000
  tiroativo[i] = false
  ytiro[i] = 2000
}
for (i = 0; i < qtEstrelas; i++) {
    estrelasX[i] = random(333,1003);
    estrelasY[i] = random(0,height); 
    estrelasVel[i] = 5+random(0,10)/10; 
}
for (i = 0; i < qtobs; i++) {
    obsX[i] = random(373,993);
    obsY[i] = -random(0,height); 
    obsVel[i] = 2+random(0,10)/10; 
}
for(i=0; i<50;i++){
  fundo[i] = loadImage("fundo.png")
  virus[i]= loadImage("virus"+contvirus+".png")
  contvirus++
  if(contvirus>5){
    contvirus=1
  }
}
}

function draw() {
  background(232,126,163);
  if ( tela == 1 ) { // tela inicial 
    background(48,178,216);
    fill(232,126,163)
rect(0,0, 333, windowHeight);
rect(1033,0, 333, windowHeight);
  image(inicio,530, 50,313,400)
  image(tecla1,5, 50 ,261,120)
   image(tecla2,15, 225 ,250,70)
   image(tecla3,36, 350 ,204,100)
   image(personagem,1045,70,60,60)
   image(globulo,1045,180,60,60)
   image(virus[0],1025,280,100,100)
   image(logo,1080,500,240,116)
      textSize(15); 
    fill(256);
    noStroke();
    text("USE PARA MOVIMENTAÇÃO \n DO PERSONAGEM", 35, 190);
    text("USE PARA DISPARAR", 60, 320);
    text("USE PARA PAUSAR O JOGO", 45, 470);
    text("LEUCÓCITO - PERSONAGEM \nOs leucócitos formam verdadeiros \nexércitos contra os \nmicro-organismos causadores de \ndoenças e qualquer partícula \nestranha que penetre no organismo", 1120,50);
    text("HEMÁCIAS - MAIS 1 VIDA \nFunção: realizar a respiração \ncelular, ao transportar oxigênio.", 1120,200);
    text("VÍRUS, BACTÉRIAS, PARASITAS \nNão deixe-os atravessarem a \ncorrente sanguínea", 1120,320);
  textSize(25); 
    fill(256);
    noStroke();
    text("Pressione ENTER para iniciar o jogo", 470, 632);
    textSize(45); 
    fill(232,126,163);
    noStroke();
    text("BLOODSTREAM BATTLE", 420, 550);
    fill(256);
    noStroke();
    text("BLOODSTREAM BATTLE", 425, 545);
    if ( keyIsDown(13) ){ 
    tela = 2; }
  }
  if(tela == 3){ // tela de game over
  textSize(100); 
    fill(200);
    noStroke();
    text("GAME OVER", 380, 331);
    fill(48,178,216);
    noStroke();
    text("GAME OVER", 385, 326);
    textSize(40); 
    fill(200);
    noStroke();
    text("PONTUAÇÃO:", 520, 380);
    textSize(20); 
    fill(200);
    noStroke();
    text("PONTOS: "+a+"\nBÔNUS: "+b+"\nTOTAL: "+(a+b), 500, 430);
  textSize(18); 
  fill(200);
  noStroke();
      text("Pressione ENTER para recomeçar", 560, 650);
    if ( keyIsDown(13) ){ 
    tela = 2
    vida = 5; }
}
if(tela == 4){ // tela de pausa 
  background(48,178,216);
  textSize(100); 
    fill(200);
    noStroke();
    text("PAUSE", 480, 331);
    fill(232,126,163);
    noStroke();
    text("PAUSE", 485, 326);
  textSize(18); 
    fill(200);
    noStroke();
    text("Pressione ENTER para retornar", 530, 650);
    if ( keyIsDown(13) ){ 
    tela = 2
    }
}
if(tela == 5){ // nivel 2
textSize(100); 
    fill(200);
    noStroke();
    text("NÍVEL 2", 480, 250);
    fill(48,178,216);
    noStroke();
    text("NÍVEL 2", 485, 245);
    textSize(40); 
    fill(200);
    noStroke();
    text("PONTUAÇÃO:", 520, 350);
    textSize(20); 
    fill(200);
    noStroke();
    text("PONTOS: "+(pontos-10)+" + 10"+"\nBÔNUS: "+bonus+"\nTOTAL: "+(pontos+bonus), 500, 400);
    textSize(18); 
  fill(200);
  noStroke();
      text("Pressione ENTER para continuar", 530, 650);
    if ( keyIsDown(13) ){ 
    tela = 2
    }
}
if(tela == 6){ // nivel 3
textSize(100); 
    fill(200);
    noStroke();
    text("NÍVEL 3", 480, 250);
    fill(48,178,216);
    noStroke();
    text("NÍVEL 3", 485, 245);
    textSize(40); 
    fill(200);
    noStroke();
    text("PONTUAÇÃO:", 520, 350);
    textSize(20); 
    fill(200);
    noStroke();
    text("PONTOS: "+(pontos-10)+" + 10"+"\nBÔNUS: "+bonus+"\nTOTAL: "+(pontos+bonus), 500, 400);
    textSize(18); 
  fill(200);
  noStroke();
      text("Pressione ENTER para continuar", 560, 650);
    if ( keyIsDown(13) ){ 
    tela = 2
    }
}
if(tela == 7){ // nivel 4
textSize(100); 
    fill(200);
    noStroke();
    text("NÍVEL 4", 480, 250);
    fill(48,178,216);
    noStroke();
    text("NÍVEL 4", 485, 245);
    textSize(40); 
    fill(200);
    noStroke();
    text("PONTUAÇÃO:", 520, 350);
    textSize(20); 
    fill(200);
    noStroke();
    text("PONTOS: "+(pontos-10)+" + 10"+"\nBÔNUS: "+bonus+"\nTOTAL: "+(pontos+bonus), 500, 400);
    textSize(18); 
  fill(200);
  noStroke();
      text("Pressione ENTER para continuar", 560, 650);
    if ( keyIsDown(13) ){ 
    tela = 2
    }
}
if(tela == 8){ // nivel 5
textSize(100); 
    fill(200);
    noStroke();
    text("NÍVEL 5", 480, 250);
    fill(48,178,216);
    noStroke();
    text("NÍVEL 5", 485, 245);
    textSize(40); 
    fill(200);
    noStroke();
    text("PONTUAÇÃO:", 520, 350);
    textSize(20); 
    fill(200);
    noStroke();
    text("PONTOS: "+(pontos-10)+" + 10"+"\nBÔNUS: "+bonus+"\nTOTAL: "+(pontos+bonus), 500, 400);
    textSize(18); 
  fill(200);
  noStroke();
      text("Pressione ENTER para continuar", 560, 650);
    if ( keyIsDown(13) ){ 
    tela = 2
    }
}
if(tela == 2){ // tela de jogo/nivel 1
fill(48,178,216)
rect(0,0, 333, windowHeight);
rect(1033,0, 333, windowHeight);
  textSize(14);
  fill(255); 
  noStroke();
  text("PONTOS = "+pontos+"\nPONTOS BÔNUS = "+bonus+"\nVIDAS = "+vida+"\nNÍVEL = "+nivel, 1100, 35)
  

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
  if ( keyIsDown(32) && ttiro < 0 ) {//comando do tiro 
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
          obsX[j] = random(373,993)
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
  if(dist(xv,yv,xp,yp)<(60 + 50)/2){
    vida+=1
    vidabonus = false
    xv = random(358,1008) 
    yv = -random(331,622)
  }
  for(i=0; i<qtiro; i++){
    if(dist(xtiro[i], ytiro[i], xv, yv)< (10 + 50)/2){
      vidabonus = false 
      bonus-=5
      xv = random(358,1008) 
      yv = -random(331,622)
    }
  }
  if(yv >= 631){
    vidabonus = false 
    xv = random(358,1008) 
    yv = -random(331,622)
  }
}  
 for(i = 0; i < qtobs; i++){ // colisão entre personagem e obstaculo 
 if(dist(obsX[i], obsY[i], xp, yp) < (40 + 60)/2){
   vida -= 1
   obsX[i] = random(373,993)
   obsY[i] = -random(0,height)
 }
 }
  
  if(xp -30<333){
    xp = 333+30
  };
  if(xp +30> 1033){
    xp = 1033-30
  };
  if(yp -30<0){
    yp = 0+30
  };
  if(yp +30 > 632){
    yp = 632-30
  };
   for(i = 0; i < qtEstrelas; i++) { // criando o fundo
    image(fundo[i],estrelasX[i],estrelasY[i],estrelasTam,estrelasTam)
  }
  for(i = 0; i < qtEstrelas; i++) { // movimento do fundo 
    estrelasY[i] = estrelasY[i] + estrelasVel[i]; 
    if (estrelasY[i] > windowHeight) {
    estrelasX[i] = random(333,1003);
    estrelasY[i] = -random(0,height); 
    }
}
for(i = 0; i < qtobs; i++) {// criando obstaculo 
    image(virus[i],obsX[i]-40,obsY[i]-40,obsTam,obsTam )
  };
  for(i = 0; i < qtobs; i++) { //movimento obstaculo
    obsY[i] += obsVel[i]; 
    if (obsY[i] > 631) {
    contobs+=1
    obsX[i] = random(373,993);
    obsY[i] = -random(0,331); 
    if(contobs == 2){
        contobs=0
        vida-=1
    }
    };
}
  for(i=0; i<qtiro; i++){// movimento tiro 
    if(tiroativo[i]){
      fill(256)
      noStroke();
      ellipse(xtiro[i], ytiro[i],tamtiro,tamtiro)
      ytiro[i] -=10
      if(ytiro[i] < 0){
        xtiro[i]= 2000
        ytiro[i] = 2000
        tiroativo[i] = false 
      };
    };
  };
   a = pontos
   b = bonus 
  if(vida == 0){//game over
    tela = 3
    nivel = 1
    pontos = 0
    bonus = 0
    contvida = 0
    xp = 680
    yp = 591
    qtobs = 5
    for (i = 0; i < qtobs; i++) {
    obsX[i] = random(373,993);
    obsY[i] = -random(0,height); 
    obsVel[i] = 2+random(0,10)/10; 
        }
      for(i=0; i<qtiro; i++){
      xtiro[i]= 2000
      ytiro[i] = 2000
      tiroativo[i] = false 
    }
  }
  if(keyIsDown(16)){//pausa
    tela = 4
  }
  if(bonus<0){
    bonus = 0
  }
  while(pontos==500){// nivel 2
    pontos+=10
    bonus+= vida*5
    tela=5
    nivel = 2
    qtobs +=3
    xp = 680
    yp = 591
    for (i = 0; i < qtobs; i++) {
    obsX[i] = random(373,993);
    obsY[i] = -random(0,height); 
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
    bonus+= vida*5
    tela=6
    nivel = 3
    qtobs +=5
    xp = 680
    yp = 591
    for (i = 0; i < qtobs; i++) {
    obsX[i] = random(373,993);
    obsY[i] = -random(0,height); 
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
    bonus+= vida*5
    tela=7
    nivel = 4
    qtobs +=3
    xp = 680
    yp = 591
    for (i = 0; i < qtobs; i++) {
    obsX[i] = random(373,993);
    obsY[i] = -random(0,height); 
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
    bonus+= vida*5
    tela=8
    nivel = 5
    qtobs +=1
    xp = 680
    yp = 591
    for (i = 0; i < qtobs; i++) {
    obsX[i] = random(373,993);
    obsY[i] = -random(0,height); 
    obsVel[i] = 2+random(0,24)/10;
  }
  for(i=0; i<qtiro; i++){
      xtiro[i]= 2000
      ytiro[i] = 2000
      tiroativo[i] = false 
    }
  }
  if(pontos>=6600){// fim de jogo
    qtobs=0
    textSize(40); 
    fill(200);
    noStroke();
    textSize(30); 
    fill(200);
    noStroke();
    text("PONTUAÇÃO:", 600, 380);
    text("                         PARABÉNS, \nVOCÊ DESTRUIU TODOS OS INIMIGOS", 400, 220);
    textSize(20); 
    fill(200);
    noStroke();
    text("PONTOS: "+pontos+"\nBÔNUS: "+bonus+" + 1000"+"\nTOTAL: "+(pontos+bonus+1000), 500, 430);
    textSize(18); 
  fill(200);
  noStroke();
      text("Pressione 'R' para recomeçar ou 'I' para voltar à tela de início", 450, 650);
    textSize(60); 
    fill(200);
    noStroke();
    text("BLOODSTREAM BATTLE", 333, 180);
    fill(48,178,216);
    noStroke();
    text("BLOODSTREAM BATTLE", 338, 175);
    if ( keyIsDown(82) ){ 
    nivel = 1
    pontos = 0
    bonus = 0
    contvida = 0
    xp = 680
    yp = 591
    qtobs = 5
    for (i = 0; i < qtobs; i++) {
    obsX[i] = random(373,993);
    obsY[i] = -random(0,height); 
    obsVel[i] = 2+random(0,10)/10; 
        }
      for(i=0; i<qtiro; i++){
      xtiro[i]= 2000
      ytiro[i] = 2000
      tiroativo[i] = false
      }
    tela = 2; }
    if ( keyIsDown(73) ){ 
    nivel = 1
    pontos = 0
    bonus = 0
    contvida = 0
    xp = 680
    yp = 591
    qtobs = 5
    for (i = 0; i < qtobs; i++) {
    obsX[i] = random(373,993);
    obsY[i] = -random(0,height); 
    obsVel[i] = 2+random(0,10)/10; 
        }
      for(i=0; i<qtiro; i++){
      xtiro[i]= 2000
      ytiro[i] = 2000
      tiroativo[i] = false
      }
    tela = 1; }
  }
  image(globulo,xv-25,yv-25,50,50)
  image(personagem,xp-30,yp-30,60,60)

}
}
