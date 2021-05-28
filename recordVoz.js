var mic;
var micOn;
var recorder;
var recording;
var soundFile;

function setup() {
  // uncomment this line to make the canvas the full size of the window
   createCanvas(windowWidth, windowHeight);
   // the volume is a number between 0 and 1
   mic = new p5.AudioIn();
   micOn = false;
   //create a new recorder object
   recorder = new p5.SoundRecorder();
   //set the recorder to listen to the mic object
   recorder.setInput(mic);
   //create a new soundfile object to playback and save the recording
   soundFile = new p5.SoundFile();
}

function draw() {
  // draw stuff here
  background(255);
  soundFile.setVolume(1);
  if (micOn) {
    //it's a recording indicator :)
    noStroke();
    fill(255,0,0);
    ellipse(50, 50, 25, 25);

  }

}

function keyPressed() {
    soundFile.play();
    console.log("Playing Sound");
}

function mousePressed() {
	micOn = !micOn;
	if (micOn) {
		mic.start();
    recorder.record(soundFile);
	}
	else {
		mic.stop();
    recorder.stop();
	}
}

// let mic;
// let recorder;
// let soundFile;

// let state =0;

// document.getElementById("recordV").onclick= function(){recordV()};
// document.getElementById("stopV").onclick= function(){stopRecordVoice()};

// function recordVoice(){
//     // console.log("Record Voice");
//     state = 0;
//     recordV();
// }
// function stopRecordVoice(){
//     // console.log("Stop record Voice");
//     state = 1;
//     stopVoice ();
// }


// function setup() {
//     // crear una entrada de audio
//     mic = new p5.AudioIn();

//     // los usuarios deben manualmente permitir en su navegador que el micrófono funcione para que la grabación funcione de manera correcta
//     mic.start();

//     // crear un nuevo grabador de sonido
//     recorder = new p5.SoundRecorder();

//     // conectar el micrófono al grabador
//     recorder.setInput(mic);

//     // crear un archivo de audio vacío que será usado para la reproducción de la grabación
//     soundFile = new p5.SoundFile();
// }

// function recordV() {
    
// // usar el booleano '.enabled' (permitido) para asegurarse que el micrófono haya sido habilitado por el usuario (si no grabaríamos silencio)
// if (state === 0 && mic.enabled) {
//     // indicar al grabador que grabe en el objeto p5.SoundFile, que usaremos para la reproducción
//     recorder.record(soundFile);
//     console.log("Recording");
//     // background(255, 0, 0);
//     // text('Recording now! Click to stop.', 20, 20);
//     state++;
//   } else if (state === 1) {
//     recorder.stop(); // parar el grabador, y enviar el resultado al archivo de audio soundFile
//     console.log("Stop");
//     // background(0, 255, 0);
//     // text('Recording stopped. Click to play & save', 20, 20);
//     state++;
//   } else if (state === 2) {
//     //soundFile.play(); // reproduce el sonido
//     saveSound(soundFile, 'mySound.wav'); // almacena el archivo
//     console.log("Save");
//     state++;
//   }
// }
// /*
// function stopVoice () {
//     if (state === 1) {
//         console.log("StopVoice");
//         recorder.stop(); // parar el grabador, y enviar el resultado al archivo de audio soundFile

//         //background(0, 255, 0);
//         //text('Recording stopped. Click to play & save', 20, 20);
//         //state++;
//         soundFile.play(); // reproduce el sonido
//         saveSound(soundFile, 'mySound.wav'); // almacena el archivo
//         state++;
//     }
// }*/