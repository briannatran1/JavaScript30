'use strict';

const panels = document.querySelectorAll('.panel'); //NodeList

/** adds class open to elem */
function toggleOpen() {
  this.classList.toggle('open');
}

/** adds class open-active if elem is clicked and adds top and bottom text */
function toggleActive(evt) {
  if (evt.propertyName.includes('flex')) {
    this.classList.toggle('open-active');
  }
}

panels.forEach(panel => panel.addEventListener('click', toggleOpen));
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));
