

// function setup() {

//   serial = new p5.SerialPort();       // make a new instance of the serialport library
//   serial.on('list', printList);  // set a callback function for the serialport list event
//   serial.on('connected', serverConnected); // callback for connecting to the server
//   serial.on('open', portOpen);        // callback for the port opening
//   serial.on('data', serialEvent);     // callback for when new data arrives
//   serial.on('error', serialError);    // callback for errors
//   serial.on('close', portClose);      // callback for the port closing
 
//   serial.list();                      // list the serial ports
//   serial.open(portName);              // open a serial port
// }
 
// get the list of ports:
function printList(portList) {
  // portList is an array of serial port names
  for (var i = 0; i < portList.length; i++) {
    // Display the list the console:
    console.log(i + portList[i]);
  }
}

function draw() {
  // if(data==1){
  //   console.log(data);
  //   // characterOM();
  // }
  console.log("data " + data);
  
  // data = Number(serial.read());
  // if(data == -1){
  //     data = 0;
  // }else{        
  //     console.log("data " + data);  
  // }
}

function serverConnected() {
  console.log('connected to server.');
}
 
function portOpen() {
  console.log('the serial port opened.')
}
 
// function serialEvent() {
// data = Number(serial.read());
// console.log(data);
//   // check to see that there's actually a string there:
  
  
// }
 
function serialError(err) {
  console.log('Something went wrong with the serial port. ' + err);
}
 
function portClose() {
  console.log('The serial port closed.');
}
function characterOM() {

  characterPP.style.display = "none";
  characterP1.style.display = "none";
  characterP2.style.display = "none";
  scene.style.display = "none";
  saltarPP.style.display = "none";
  moversePP.style.display = "none";

  if (characterPP.style.display == "none") {
      characterPP.style.display = "block";
  } else {
      characterPP.style.display = "none";
  }
}

function saltarOM() {

  characterPP.style.display = "none";
  characterP1.style.display = "none";
  characterP2.style.display = "none";
  scene.style.display = "none";
  moversePP.style.display = "none";

  if (saltarPP.style.display == "none") {
      saltarPP.style.display = "block";
  } else {
      saltarPP.style.display = "none";
  }
}

function moverseOM() {

  characterPP.style.display = "none";
  characterP1.style.display = "none";
  characterP2.style.display = "none";
  scene.style.display = "none";
  saltarPP.style.display = "none";

  if (moversePP.style.display == "none") {
      moversePP.style.display = "block";
  } else {
      moversePP.style.display = "none";
  }
}

function characterOMP1() {

  characterPP.style.display = "none";
  characterP1.style.display = "none";
  characterP2.style.display = "none";
  scene.style.display = "none";
  saltarPP.style.display = "none";
  moversePP.style.display = "none";

  if (characterP1.style.display == "none") {
      characterP1.style.display = "block";
  } else {
      characterP1.style.display = "none";
  }
}

function characterOMP2() {

  characterPP.style.display = "none";
  characterP1.style.display = "none";
  scene.style.display = "none";
  saltarPP.style.display = "none";
  moversePP.style.display = "none";

  if (characterP2.style.display == "none") {
      characterP2.style.display = "block";
  } else {
      characterP2.style.display = "none";
  }
}

function sceneOM() {

  characterPP.style.display = "none";
  characterP1.style.display = "none";
  characterP2.style.display = "none";
  saltarPP.style.display = "none";
  moversePP.style.display = "none";

  if (scene.style.display == "none") {
      scene.style.display = "block";
  } else {
      scene.style.display = "none";
  }
}