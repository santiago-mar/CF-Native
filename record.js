// SIZE OF CANVAS
let cwidth = 960;
let cheight = 540;

// RECORD VIDEO
let encoder;
const frate = 30; // frame rate- Max:9000Frames
const numFrames = 9000; // num of frames to record
let recording = false;
let recordedFrames = 0;
//-----------------------------------------------
let fTriangle = 0;

// Variables para los personajes y los escenarios
let imgCharacterP1, imgCharacterP2, imgCharacter1, imgCharacter2, imgCharacter3, imgCharacter1Move, imgCharacter2Move, imgCharacter3Move, imgScene, imgScene1, imgScene2, imgScene3;

// Cargar personajes
var vid;

//Variables para animación
let xMove;
let yMove;
vjump = false;
const limit = 170;
const suelo = 200;
let saltar = suelo;
let up = true;
const scale = 4;
let mov = false;

//Complemento de los botones para la funcion de grabar.
document.getElementById("record").onclick = function () { clickRecording() };
document.getElementById("stop").onclick = function () { stopRecording() };

// Toma los datos de los botones character P1
document.getElementById("character1P1").onclick = function () { selectedCharacterP1(document.getElementById("character1P1").value) };
document.getElementById("character2P1").onclick = function () { selectedCharacterP1(document.getElementById("character2P1").value) };
document.getElementById("character3P1").onclick = function () { selectedCharacterP1(document.getElementById("character3P1").value) };

// Toma los datos de los botones character P2
document.getElementById("character1P2").onclick = function () { selectedCharacterP2(document.getElementById("character1P2").value) };
document.getElementById("character2P2").onclick = function () { selectedCharacterP2(document.getElementById("character2P2").value) };
document.getElementById("character3P2").onclick = function () { selectedCharacterP2(document.getElementById("character3P2").value) };

// Toma los datos de los botones scene
document.getElementById("scene1").onclick = function () { selectedScene(document.getElementById("scene1").value) };
document.getElementById("scene2").onclick = function () { selectedScene(document.getElementById("scene2").value) };
document.getElementById("scene3").onclick = function () { selectedScene(document.getElementById("scene3").value) };

// Saltar
document.getElementById("jump").onclick = function () { jump() };

// Caminar
document.getElementById("walk").onclick = function () { walk() };
//-----------------------------------------------------

// Carga todos los elementos de la grabación de video.
function preload() {
    HME.createH264MP4Encoder().then(enc => {
        encoder = enc;
        encoder.outputFilename = 'test';
        encoder.width = cwidth;
        encoder.height = cheight;
        encoder.frameRate = frate;
        encoder.kbps = 50000; // video quality
        encoder.groupOfPictures = 10; // lower if you have fast actions.
        encoder.initialize();
    })

    imgCharacter1 = loadImage("./img/personaje1.gif");
    imgCharacter2 = loadImage("./img/personaje3.gif");
    imgCharacter3 = loadImage("./img/personaje4.gif");
    imgCharacter1Move = loadImage("./img/personaje1-caminando.gif");
    imgCharacter2Move = loadImage("./img/personaje3-caminando.gif");
    imgCharacter3Move = loadImage("./img/personaje4-caminando.gif");
    imgScene1 = loadImage("./img/Escenario1.jpg");
    imgScene2 = loadImage("./img/Escenario2.jpg");
    imgScene3 = loadImage("./img/Escenario3.jpg");

    
}

function clickRecording() {
    recording = true;
}
function stopRecording() {
    recording = false;
}

function selectedCharacterP1(value) {
    imgCharacterP1 = value;
}

function selectedCharacterP2(value) {
    imgCharacter = value;
}

function selectedScene(value) {
    imgScene = value;
}

function jump() {
    vjump = true;
}

function walk() {
    if(mov == true){
        mov = false;
    }else if (mov == false){
        mov = true;
    }
}

function caminar(){

    if(mov == true){
        if (imgCharacterP1 == 1) {
            image(imgCharacter1Move, xMove, yMove, (imgCharacter1Move.width / scale), (imgCharacter1Move.height / scale));
        } else if (imgCharacterP1 == 2) {
            image(imgCharacter2Move, xMove, yMove, (imgCharacter2Move.width / scale), (imgCharacter2Move.height / scale));
        } else if (imgCharacterP1 == 3) {
            image(imgCharacter3Move, xMove, yMove, (imgCharacter3Move.width / scale), (imgCharacter3Move.height / scale));
        }

        if (xMove < cwidth){
            xMove++
        }else if (xMove == cwidth) {
            xMove = 0;
        }
    }
}

function setup() {
    var canvas = createCanvas(cwidth, cheight);
    canvas.parent('canvas');
    frameRate(frate);

    xMove = 0;
    // yMove = cheight;
    yMove = suelo;

    // vid = createVideo("./img/personaje1a.mp4");
    //vid.loop();
}
function draw() {
    background(200);

    if (imgScene == 1) {
        image(imgScene1, 0, 0, cwidth, cheight);
    } else if (imgScene == 2) {
        image(imgScene2, 0, 0, cwidth, cheight);
    } else if (imgScene == 3) {
        image(imgScene3, 0, 0, cwidth, cheight);
    }

    if (mov == false){
        if (imgCharacterP1 == 11) {
            image(imgCharacter1, xMove, yMove, (imgCharacter1.width / scale), (imgCharacter1.height / scale));
        } else if (imgCharacterP1 == 12) {
            image(imgCharacter2, xMove,  yMove, (imgCharacter2.width / scale), (imgCharacter2.height / scale));
        } else if (imgCharacterP1 == 13) {
            image(imgCharacter3, xMove,  yMove, (imgCharacter3.width / scale), (imgCharacter3.height / scale));
        }
    }

    caminar();
    // Caminar
    // if(mov == true){
    //     if (xMove < cwidth){
    //         xMove++
    //     }else if (xMove == cwidth) {
    //         xMove = 0;
    //     }
    // }

    //Saltar
    if (vjump == true) {
        if (saltar > limit && up == true) {
            yMove--;
            saltar--;
        } else if (saltar == limit) {
            up = false;
            yMove++;
            saltar++;
        } else if (saltar < suelo) {
            yMove++;
            saltar++;
        }
        else if (saltar == suelo) {
            up = true;
            vjump = false;
        }
    }

    //rectMode(CENTER);
    //translate(width / 2, height / 2);
    //translate(p5.Vector.fromAngle(millis() / 1000, 40));
    //rect(0, 0, 20, 20);

    if (fTriangle == 1) {
        triangle(30, 75, 58, 20, 86, 75);
    }
    //--------------------------------------------------------------
    //Grabación y guardado de video.
    // keep adding new frame
    if (recording) {
        console.log('recording');
        encoder.addFrameRgba(drawingContext.getImageData(0, 0, encoder.width, encoder.height).data);
        recordedFrames++;
    }
    // finalize encoding and export as mp4
    if (recordedFrames === numFrames || (recordedFrames > 0 && recording == false)) {
        recording = false;
        recordedFrames = 0;
        console.log('recording stopped');

        encoder.finalize();
        const uint8Array = encoder.FS.readFile(encoder.outputFilename);
        const anchor = document.createElement('a');
        anchor.href = URL.createObjectURL(new Blob([uint8Array], { type: 'video/mp4' }));
        anchor.download = encoder.outputFilename;
        anchor.click();
        encoder.delete();
        preload();
    }
}