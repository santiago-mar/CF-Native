let character,scene;

function characterOM() {

    scene = document.getElementById('scene');
    scene.style.display = "none";

    character = document.getElementById('character');

    if (character.style.display == "none") {
        character.style.display = "block";
    } else {
        character.style.display = "none";
    }
}

function sceneOM() {
    
    character = document.getElementById('character');
    character.style.display = "none";

    scene = document.getElementById('scene');

    if (scene.style.display == "none") {
        scene.style.display = "block";
    } else {
        scene.style.display = "none";
    }
}