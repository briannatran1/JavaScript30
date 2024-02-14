'use strict';

window.addEventListener('keydown', function (evt) {
  const audio = document.querySelector(`audio[data-key="${evt.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${evt.keyCode}"]`);

  // stops fn from running if no key w/ audio found
  if (!audio) {
    return;
  }

  audio.currentTime = 0; // rewind to start
  audio.play();
  key.classList.add('playing');

});

function removeTransition(evt) {
  // skip if not transform
  if (evt.propertyName !== 'transform') {
    return;
  }
  // this is the key since addEventListener is getting called on the key
  this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));