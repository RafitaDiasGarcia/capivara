var gameOver = false
var capivara, capivaraImg
var obstaculo, obstaculo2, obstaculo3, obstaculo4, obstaculo5, obstaculo6, obstaculo7, obstaculo8, obstaculo9, obstaculo10, obstaculo11, obstaculo12, obstaculo13, obstaculo14, obstaculo15, obstaculo16, obstaculo17, obstaculo18, obstaculo19, obstaculo20, obstaculo21, obstaculo22, obstaculo23, obstaculo24
function preload(){
capivaraImg = loadImage("capivara.png")
}
function setup() {
    createCanvas(1000,600);
    capivara = createSprite(70, 300, 50, 50)
    capivara.addImage(capivaraImg)
    capivara.scale = 0.4
    obstaculo = createSprite(200, 550, 20, 150)
    obstaculo2 = createSprite(200, 50, 20, 150)
    obstaculo3 = createSprite(300, 540, 20, 170)
    obstaculo4 = createSprite(300, 60, 20, 170)
    obstaculo5 = createSprite(400, 530, 20, 190)
    obstaculo6 = createSprite(400, 70, 20, 190)
    obstaculo7 = createSprite(500, 520, 20, 210)
    obstaculo8 = createSprite(500, 90, 20, 210)
    obstaculo9 = createSprite(600, 510, 20, 230)
    obstaculo10 = createSprite(600, 100, 20, 230)
    obstaculo11 = createSprite(700, 500, 20, 250)
    obstaculo12 = createSprite(700, 110, 20, 250)
    obstaculo13 = createSprite(800, 510, 20, 230)
    obstaculo14 = createSprite(800, 100, 20, 230)
    obstaculo15 = createSprite(900, 90, 20, 210)
    obstaculo16 = createSprite(900, 520, 20, 210)
    obstaculo17 = createSprite(1000, 530, 20, 190)
    obstaculo18 = createSprite(1000, 70, 20, 190)
    obstaculo19 = createSprite(1100, 90, 20, 210)
    obstaculo20 = createSprite(1100, 520, 20, 210)
    obstaculo21 = createSprite(1200, 510, 20, 230)
    obstaculo22 = createSprite(1200, 90, 20, 230)
    obstaculo23 = createSprite(1300, 70, 20, 190)
    obstaculo24 = createSprite(1300, 530, 20, 190)

    obstaculos = new Group ()
    obstaculos.add (obstaculo)
    obstaculos.add (obstaculo2)
    obstaculos.add (obstaculo3)
    obstaculos.add (obstaculo4)
    obstaculos.add (obstaculo5)
    obstaculos.add (obstaculo6)
    obstaculos.add (obstaculo7)
    obstaculos.add (obstaculo8)
    obstaculos.add (obstaculo9)
    obstaculos.add (obstaculo10)
    obstaculos.add (obstaculo11)
    obstaculos.add (obstaculo12)
    obstaculos.add (obstaculo13)
    obstaculos.add (obstaculo14)
    obstaculos.add (obstaculo15)
    obstaculos.add (obstaculo16)
    obstaculos.add (obstaculo17)
    obstaculos.add (obstaculo18)
    obstaculos.add (obstaculo19)
    obstaculos.add (obstaculo20)
    obstaculos.add (obstaculo21)
    obstaculos.add (obstaculo22)
    obstaculos.add (obstaculo23)
    obstaculos.add (obstaculo24)
    capivara.debug = false
    capivara.setCollider("rectangle", 0, 0, 260, 170)
    
    
}

function draw() {
    background("skyblue");
    //códigos que serão executados ao longo de todo o jogo
    if(keyDown("space")){
        obstaculos.setVelocityXEach(-4)
        obstaculos.setLifetimeEach(500)
        capivara.velocityY = 3
    }
    if(keyDown(UP_ARROW)){
        capivara.velocityY = -3
    }
    if(keyDown(DOWN_ARROW)){
        capivara.velocityY = 3
    }

    if(capivara.collide(obstaculos)){
      gameOver = true

    }
    if(gameOver){
        fill ("black")
        textSize(50)
        textAlign("center")
        text("Você perdeu, reinicie a página", 500, 300)

        capivara.velocityY = 0
        capivara.velocityX = 0
        obstaculos.setVelocityXEach(0) 
    }

    if(obstaculo24.x <= capivara.x){

        textSize(20)
    textAlign("center")
    fill("lightgreen")
    stroke("black")
    strokeWeight(5)
    text("Você ganhou, reinicie a página para jogar novamente", 500, 300)

    }

    drawSprites();
//    textSize(30)
//    textAlign("center")
//    stroke("black")
//    strokeWeight(5)
//    fill("white")
//    text("x: "+ mouseX+"y: "+mouseY, mouseX, mouseY)


console.log(capivara.x)

}

