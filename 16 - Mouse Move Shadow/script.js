'use strict';

const hero = document.querySelector('.hero');
const text = document.querySelector('h1');

/** creates shadow */
function shadow(evt) {
  const { offsetWidth: width, offsetHeight: height } = hero;
  let { offsetX: x, offsetY: y } = evt;

  if (this !== evt.target) { // this is equal to hero since it's what's being listened
    x = x + evt.target.offsetLeft;
    y = y + evt.target.offsetTop;
  }


}

hero.addEventListener('mousemove', shadow);