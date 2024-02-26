'use strict';

// store in arr
// check every single time if keyup matches what you're looking for

const pressed = [];
const secretCode = 'wesbos';

window.addEventListener('keyup', (evt) => {
  pressed.push(evt.key);
  pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);

  if (pressed.join('').includes(secretCode)) {
    cornify_add();
  }
  console.log(pressed);
});