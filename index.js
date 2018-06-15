/*
 * Add your JavaScript to this file to complete the assignment.
 */

var startGameButton = document.getElementById('start-game-button');
var modalBack = document.getElementById('modal-backdrop');

var startModal = document.getElementById('start-game-modal');
var storyModal1 = document.getElementById('story-modal-1');
var storyModal2 = document.getElementById('story-modal-2');  
var storyModal3 = document.getElementById('story-modal-3');  
var storyModal4 = document.getElementById('story-modal-4');  
var storyModal5 = document.getElementById('story-modal-5');  
var storyModal6 = document.getElementById('story-modal-6');  
var storyModal7 = document.getElementById('story-modal-7');  
var storyModal8 = document.getElementById('story-modal-8');  
var storyModal9 = document.getElementById('story-modal-9');  
var storyModal10 = document.getElementById('story-modal-10');  
var storyModal11 = document.getElementById('story-modal-11');  
var storyModal12 = document.getElementById('story-modal-12');
var storyModal13 = document.getElementById('story-modal-13');
var storyModal14 = document.getElementById('story-modal-14');      
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
var cb1= document.getElementById('cb1');

a1.addEventListener('click', function(){addHiddenx(storyModal1); removeHiddenx(storyModal2)});
b1.addEventListener('click', function(){addHiddenx(storyModal1); removeHiddenx(storyModal3)});
cb1.addEventListener('click', function(){addHiddenx(storyModal1)});


var a2 = document.getElementById('a2');
var b2 = document.getElementById('b2');
var c2 = document.getElementById('c2');
var cb2= document.getElementById('cb2');

a2.addEventListener('click', function(){addHiddenx(storyModal2); removeHiddenx(storyModal4)});
b2.addEventListener('click', function(){addHiddenx(storyModal2); removeHiddenx(storyModal4)});
c2.addEventListener('click', function(){addHiddenx(storyModal2); removeHiddenx(storyModal7)});
cb2.addEventListener('click', function(){addHiddenx(storyModal2)});

var a3 = document.getElementById('a3');
var cb3= document.getElementById('cb3');

a3.addEventListener('click', function(){addHiddenx(storyModal3)});
cb3.addEventListener('click', function(){addHiddenx(storyModal3)});

var a4 = document.getElementById('a4');
var b4 = document.getElementById('b4');
var c4 = document.getElementById('c4');
var cb4= document.getElementById('cb4');

a4.addEventListener('click', function(){addHiddenx(storyModal4); removeHiddenx(storyModal6)});
b4.addEventListener('click', function(){addHiddenx(storyModal4); removeHiddenx(storyModal5)});
c4.addEventListener('click', function(){addHiddenx(storyModal4); removeHiddenx(storyModal3)});
cb4.addEventListener('click', function(){addHiddenx(storyModal4)});

var a5 = document.getElementById('a5');
var cb5= document.getElementById('cb5');

a5.addEventListener('click', function(){addHiddenx(storyModal5)});
cb5.addEventListener('click', function(){addHiddenx(storyModal5)});

var a6 = document.getElementById('a6');
var b6 = document.getElementById('b6');
var cb6= document.getElementById('cb6');

a6.addEventListener('click', function(){addHiddenx(storyModal6); removeHiddenx(storyModal14)});
b6.addEventListener('click', function(){addHiddenx(storyModal6); removeHiddenx(storyModal8)});
cb6.addEventListener('click', function(){addHiddenx(storyModal6)});


var a7 = document.getElementById('a7');
var cb7= document.getElementById('cb7');

a7.addEventListener('click', function(){addHiddenx(storyModal7)});
cb7.addEventListener('click', function(){addHiddenx(storyModal7)});

var a8 = document.getElementById('a8');
var b8 = document.getElementById('b8');
var cb8= document.getElementById('cb8');

a8.addEventListener('click', function(){addHiddenx(storyModal8); removeHiddenx(storyModal9)});
b8.addEventListener('click', function(){addHiddenx(storyModal8); removeHiddenx(storyModal10)});
cb8.addEventListener('click', function(){addHiddenx(storyModal8)});

var a9 = document.getElementById('a9');
var cb9= document.getElementById('cb9');

a9.addEventListener('click', function(){addHiddenx(storyModal9)});
cb9.addEventListener('click', function(){addHiddenx(storyModal9)});

var a10 = document.getElementById('a10');
var b10 = document.getElementById('b10');
var c10 = document.getElementById('c10');
var cb10= document.getElementById('cb10');

a10.addEventListener('click', function(){addHiddenx(storyModal10); removeHiddenx(storyModal11)});
b10.addEventListener('click', function(){addHiddenx(storyModal10); removeHiddenx(storyModal12)});
c10.addEventListener('click', function(){addHiddenx(storyModal10); removeHiddenx(storyModal13)});
cb10.addEventListener('click', function(){addHiddenx(storyModal10)});

var a11 = document.getElementById('a11');
var cb11= document.getElementById('cb11');

a11.addEventListener('click', function(){addHiddenx(storyModal11)});
cb11.addEventListener('click', function(){addHiddenx(storyModal11)});

var a12 = document.getElementById('a12');
var cb12= document.getElementById('cb12');

a12.addEventListener('click', function(){addHiddenx(storyModal12)});
cb12.addEventListener('click', function(){addHiddenx(storyModal12)});

var a13 = document.getElementById('a13');
var cb13= document.getElementById('cb13');

a13.addEventListener('click', function(){addHiddenx(storyModal13)});
cb13.addEventListener('click', function(){addHiddenx(storyModal13)});

var a14 = document.getElementById('a14');
var cb14 = document.getElementById('cb14');

a14.addEventListener('click', function(){addHiddenx(storyModal14)});
cb14.addEventListener('click', function(){addHiddenx(storyModal14)});
