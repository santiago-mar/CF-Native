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
let imgCharacter, imgCharacter1, imgCharacter2, imgCharacter3, imgScene, imgScene1, imgScene2, imgScene3;

//Variables para animación
let xMove;
let yMove;
vjump = false;
const limit = 300;
const suelo = 450;
let saltar = suelo;
let up = true;

//Complemento de los botones para la funcion de grabar.
document.getElementById("record").onclick = function () { clickRecording() };
document.getElementById("stop").onclick = function () { stopRecording() };

// Toma los datos de los botones character
document.getElementById("character1").onclick = function () { selectedCharacter(document.getElementById("character1").value) };
document.getElementById("character2").onclick = function () { selectedCharacter(document.getElementById("character2").value) };
document.getElementById("character3").onclick = function () { selectedCharacter(document.getElementById("character3").value) };

// Toma los datos de los botones scene
document.getElementById("scene1").onclick = function () { selectedScene(document.getElementById("scene1").value) };
document.getElementById("scene2").onclick = function () { selectedScene(document.getElementById("scene2").value) };
document.getElementById("scene3").onclick = function () { selectedScene(document.getElementById("scene3").value) };

// Saltar
document.getElementById("jump").onclick = function () { jump() };
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

    imgCharacter1 = loadImage("./img/hombre.svg");
    imgCharacter2 = loadImage("./img/hombre1.svg");
    imgCharacter3 = loadImage("./img/mujer.svg");
    imgScene1 = loadImage("./img/paisaje1.jpg");
    imgScene2 = loadImage("./img/paisaje2.jpg");
    imgScene3 = loadImage("./img/paisaje3.jpg");
}

function clickRecording() {
    recording = true;
}
function stopRecording() {
    recording = false;
}

function selectedCharacter(value) {
    imgCharacter = value;
    console.log("The character is " + value);
}

function selectedScene(value) {
    imgScene = value;
    console.log("The Scene is " + value);
}

function jump(){
    vjump = true;    
    // let limit = 100;
    // for (let i = 0; i < limit; i++) {
    //     // const element = array[i];
    //     console.log("entró");
    //     yMove++;        
    // }
    // for (let j = limit; j > 0; j--) {
    //     // const element = array[j];
    //     yMove--;         
    // }

}

function setup() {
    var canvas = createCanvas(cwidth, cheight);
    canvas.parent('canvas');
    frameRate(frate);

    // xMove = width / 2;
    // yMove = cheight;
    yMove = suelo;
}
function draw() {
    background(200);
    //background(image(imgScene1, 0, 0, cwidth, cheight));
    ellipse(200, yMove, 24, 24);
    //console.log(yMove);
    // moverse aleatoriamente en el eje x
    //xMove = xMove + random(-1, 1);
    // mover hacia arriba a velocidad constante
    
    // if (xMove > cwidth) {
    //     xMove = 0;
    // }
    // xMove++

    // //yMove = yMove - 5;
    // // reset al fondo
    // if (yMove == 0) {
    //     yMove = cheight;
    // }
    // yMove--;

    if (imgScene == 1) {
        image(imgScene1, 0, 0, cwidth, cheight);
    } else if (imgScene == 2) {
        image(imgScene2, 0, 0, cwidth, cheight);
    } else if (imgScene == 3) {
        image(imgScene3, 0, 0, cwidth, cheight);
    }

    if (imgCharacter == 1) {
        image(imgCharacter1, 0, 0, 200, 200);
    } else if (imgCharacter == 2) {
        image(imgCharacter2, 0, 0, 200, 200);
    } else if (imgCharacter == 3) {
        image(imgCharacter3, 0, 0, 200, 200);
    }

    // Saltar
    if(vjump == true){
        if(saltar > limit && up == true){
            yMove--;
            saltar--;
        } else if (saltar == limit){
            up = false;
            yMove++;
            saltar++;
        }else if (saltar < suelo) {
            yMove++;
            saltar++;
        }
        else if (saltar == suelo){
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