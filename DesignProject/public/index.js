/*
 * Add your JavaScript to this file to complete the assignment.
 */

var startGameButton = document.getElementById('start-game-button');
var modalBack = document.getElementById('modal-backdrop');

var startModal = document.getElementById('start-game-modal');
var storyModal1 = document.getElementById('story-modal-1');

//////////////////

startGameButton.addEventListener('click', function(){removeHiddenx(startModal)});

var beginButton = document.getElementsByClassName('modal-begin-button')[0];
beginButton.addEventListener('click', function(){addHiddenx(startModal);
					removeHiddenx(storyModal1)});
var firstBox = document.getElementById('name-text-input');

var cancelButton = document.getElementsByClassName('modal-cancel-button')[0];
var closeButton = document.getElementsByClassName('modal-close-button')[0];

cancelButton.addEventListener('click', function(){addHiddenx(startModal)});
closeButton.addEventListener('click', function(){addHiddenx(startModal)});

///////////////////

function removeHiddenx(x){
x.classList.remove('hidden');
}

function addHiddenx(x){
x.classList.add('hidden');
if(x==startModal){
firstBox.value = "";
}
}


var a1 = document.getElementById('a1');
var b1 = document.getElementById('b1');
var c1 = document.getElementById('c1');
var cb1= document.getElementById('cb1');

a1.addEventListener('click', function(){addHiddenx(storyModal1)});
b1.addEventListener('click', function(){addHiddenx(storyModal1)});
c1.addEventListener('click', function(){addHiddenx(storyModal1)});
cb1.addEventListener('click', function(){addHiddenx(storyModal1)});


var a2 = document.getElementById('a2');
var b2 = document.getElementById('b2');
var c2 = document.getElementById('c2');
var cb2= document.getElementById('cb2');

a2.addEventListener('click', function(){addHiddenx(storyModal2)});
b2.addEventListener('click', function(){addHiddenx(storyModal2)});
c2.addEventListener('click', function(){addHiddenx(storyModal2)});
cb2.addEventListener('click', function(){addHiddenx(storyModal2)});

var a3 = document.getElementById('a3');
var b3 = document.getElementById('b3');
var c3 = document.getElementById('c3');
var cb3= document.getElementById('cb3');

a3.addEventListener('click', function(){addHiddenx(storyModal3)});
b3.addEventListener('click', function(){addHiddenx(storyModal3)});
c3.addEventListener('click', function(){addHiddenx(storyModal3)});
cb3.addEventListener('click', function(){addHiddenx(storyModal3)});

var a4 = document.getElementById('a4');
var b4 = document.getElementById('b4');
var c4 = document.getElementById('c4');
var cb4= document.getElementById('cb4');

a4.addEventListener('click', function(){addHiddenx(storyModal4)});
b4.addEventListener('click', function(){addHiddenx(storyModal4)});
c4.addEventListener('click', function(){addHiddenx(storyModal4)});
cb4.addEventListener('click', function(){addHiddenx(storyModal4)});

var a5 = document.getElementById('a5');
var b5 = document.getElementById('b5');
var c5 = document.getElementById('c5');
var cb5= document.getElementById('cb5');

a5.addEventListener('click', function(){addHiddenx(storyModal5)});
b5.addEventListener('click', function(){addHiddenx(storyModal5)});
c5.addEventListener('click', function(){addHiddenx(storyModal5)});
cb5.addEventListener('click', function(){addHiddenx(storyModal5)});

var a6 = document.getElementById('a6');
var b6 = document.getElementById('b6');
var c6 = document.getElementById('c6');
var cb6= document.getElementById('cb6');

a6.addEventListener('click', function(){addHiddenx(storyModal6)});
b6.addEventListener('click', function(){addHiddenx(storyModal6)});
c6.addEventListener('click', function(){addHiddenx(storyModal6)});
cb6.addEventListener('click', function(){addHiddenx(storyModal6)});

var a7 = document.getElementById('a7');
var b7 = document.getElementById('b7');
var c7 = document.getElementById('c7');
var cb7= document.getElementById('cb7');

a7.addEventListener('click', function(){addHiddenx(storyModal7)});
b7.addEventListener('click', function(){addHiddenx(storyModal7)});
c7.addEventListener('click', function(){addHiddenx(storyModal7)});
cb7.addEventListener('click', function(){addHiddenx(storyModal7)});


