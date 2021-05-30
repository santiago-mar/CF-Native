let characterPP, characterP1, characterP2, scene, saltarPP, moversePP;

characterPP = document.getElementById('characterPP');
characterP1 = document.getElementById('characterP1');
characterP2 = document.getElementById('characterP2');
scene = document.getElementById('scene');
saltarPP = document.getElementById('saltarPP');
moversePP = document.getElementById('moversePP');

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