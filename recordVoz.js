let mic;
let recorder;
let soundFile;

let state;

document.getElementById("recordV").onclick= function(){recordVoice};
document.getElementById("stopV").onclick= function(){recordVoice};

function recordVoice(){
    state = 0;
}
function stopRecordVoice(){
    state = 1;
}


function setup() {
    // crear una entrada de audio
    mic = new p5.AudioIn();

    // los usuarios deben manualmente permitir en su navegador que el micrófono funcione para que la grabación funcione de manera correcta
    mic.start();

    // crear un nuevo grabador de sonido
    recorder = new p5.SoundRecorder();

    // conectar el micrófono al grabador
    recorder.setInput(mic);

    // crear un archivo de audio vacío que será usado para la reproducción de la grabación
    soundFile = new p5.SoundFile();
}

function recordV() {
    // usar el booleano '.enabled' (permitido) para asegurarse que el micrófono haya sido habilitado por el usuario (si no grabaríamos silencio)
    if (state === 0 && mic.enabled) {
        console.log("recordingVoice");
        // indicar al grabador que grabe en el objeto p5.SoundFile, que usaremos para la reproducción
        recorder.record(soundFile);

        alert("Voice s recording");
        //text('Recording now! Click to stop.', 20, 20);
        state++;

    } 
}

function stopVoice () {
    if (state === 1) {
        console.log("StopVoice");
        recorder.stop(); // parar el grabador, y enviar el resultado al archivo de audio soundFile

        //background(0, 255, 0);
        //text('Recording stopped. Click to play & save', 20, 20);
        //state++;
        soundFile.play(); // reproduce el sonido
        saveSound(soundFile, 'mySound.wav'); // almacena el archivo
        state++;
    }
}