function setup() {

    var canvas = createCanvas(cwidth, cheight);
    canvas.parent('canvas');
    background('rgba(0,255,0, 0.25)');
    frameRate(frate);
    //button = button = createButton('record')
    //button.mousePressed(() => recording = true);
    loop();

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