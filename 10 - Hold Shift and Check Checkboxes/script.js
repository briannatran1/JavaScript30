'use strict';

const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');
let lastChecked;

/** handles checking the checkboxes */
function handleCheck(evt) {
  let inBetween = false;
  // check if shift key is down
  // and check if they are checking the box
  if (evt.shiftKey && this.checked) {
    checkboxes.forEach(checkbox => {
      if (checkbox === this || checkbox === lastChecked) {
        inBetween = !inBetween;
      }

      if (inBetween) {
        checkbox.checked = true;
      }
    });
  }

  lastChecked = this;
}

checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));
