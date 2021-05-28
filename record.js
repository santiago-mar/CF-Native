/*
library used: https://github.com/TrevorSundberg/h264-mp4-encoder 
a simple example exporting mp4 with p5js.
record video while animation is being played.
*/
let cwidth = 960;
let cheight = 540;

let encoder;

const frate = 30; // frame rate- Max:9000Frames
const numFrames = 9000; // num of frames to record
let recording = false;
let recordedFrames = 0;

let count = 0;
let x =0;
let fTriangle = 0;
let figura;

// Record audio
let mic, recorder, soundFile, state;


document.getElementById("record").onclick = function() {clickRecording()};
document.getElementById("stop").onclick = function() {stopRecording()};

// Record audio
document.getElementById("recordV").onclick= function(){recordVoice()};
document.getElementById("stopV").onclick= function(){stopRecordVoice()};

// make sure encoder is ready before use
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
}

function setup() {
    
    var canvas = createCanvas(cwidth, cheight);
    canvas.parent('canvas');
    // background('rgba(0,255,0, 0.25)');
    frameRate(frate);
    //button = button = createButton('record')
    //button.mousePressed(() => recording = true);
    //loop();

    // Record audio
    mic = new p5.AudioIn();
    mic.start();
    recorder = new p5.SoundRecorder();
    recorder.setInput(mic);
    soundFile = new p5.SoundFile();
    //mic.start();

    // figura = triangle(30, 75, 58, 20, 86, 75);
}

function clickRecording(){
    recording = true;
}
function stopRecording(){
    recording = false;
}

// Record audio
function recordVoice(){
    // console.log("Record Voice");
    state = 0;
    recordV();
}
function stopRecordVoice(){
    // console.log("Stop record Voice");
    fTriangle = 1;
    console.log(fTriangle);
    // stopVoice();
}

function draw() {
    background(200,0,0);
    ellipse(150, 100, 100, 100);
    rectMode(CENTER);
    translate(width / 2, height / 2);
    translate(p5.Vector.fromAngle(millis() / 1000, 40));
    rect(0, 0, 20, 20);
    // figura = triangle(30, 75, 58, 20, 86, 75);
    // background('rgba(255,255,255,0.25)');
    
    if(fTriangle == 1){
        triangle(30, 75, 58, 20, 86, 75);
        // figura;
        // console.log("Entro");
    }
    //fTriangle++;
    
    /*
    x = x + 0.1;
    if (x >width) {
        x = 0;
    };
    line(x, 0, x, height);
    */
    // keep adding new frame
    
    if (recording) {
        console.log('recording');
        encoder.addFrameRgba(drawingContext.getImageData(0, 0, encoder.width, encoder.height).data);
        recordedFrames++;
    }
    
    // finalize encoding and export as mp4
    if (recordedFrames === numFrames || (recordedFrames > 0 && recording == false))  {
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

function recordV() {
    // usar el booleano '.enabled' (permitido) para asegurarse que el micrófono haya sido habilitado por el usuario (si no grabaríamos silencio)
    getAudioContext().resume();
    if (state === 0 && mic.enabled) {
        console.log("recordingVoice");
        // indicar al grabador que grabe en el objeto p5.SoundFile, que usaremos para la reproducción
        recorder.record(soundFile);

        //alert("Voice s recording");
        //text('Recording now! Click to stop.', 20, 20);
        //state++;

    } 
}

function stopVoice() {
    if (state === 1) {
        console.log("StopVoice");
        recorder.stop(); // parar el grabador, y enviar el resultado al archivo de audio soundFile

        //background(0, 255, 0);
        //text('Recording stopped. Click to play & save', 20, 20);
        //state++;
        //soundFile.play(); // reproduce el sonido
        saveSound(soundFile, 'mySound.wav'); // almacena el archivo
        state++;
    }
}