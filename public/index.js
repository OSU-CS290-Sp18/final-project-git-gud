/*
 * Add your JavaScript to this file to complete the assignment.
 */

var startGameButton = document.getElementById('start-game-button');

var modalBack = document.getElementById('modal-backdrop');
var startModal = document.getElementById('start-game-modal');
var storyModal1 = document.getElementById('story-modal-1');

function removeHidden(){

modalBack.classList.remove('hidden');
//startModal.classList.remove('hidden');
storyModal1.classList.remove('hidden');
}
startGameButton.addEventListener('click', removeHidden);

////////////////

var cancelButton = document.getElementsByClassName('modal-cancel-button')[0];
var closeButton = document.getElementsByClassName('modal-close-button')[0];

cancelButton.addEventListener('click', addHidden);
closeButton.addEventListener('click', addHidden);

var firstBox = document.getElementById('name-text-input');


function addHidden(){
modalBack.classList.add('hidden');
//startModal.classList.add('hidden');
storyModal1.classList.add('hidden');
firstBox.value = "";
}

////////////////

var beginButton = document.getElementsByClassName('modal-begin-button')[0];
beginButton.addEventListener('click', startGame);

function startGame(){
addHidden();
}

