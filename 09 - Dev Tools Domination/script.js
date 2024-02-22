'use script';

const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

/** makes p green */
function makeGreen() {
  const p = document.querySelector('p');
  p.style.color = '#BADA55';
  p.style.fontSize = '50px';
}

// Regular
console.log('hello');

// Interpolated
console.log('hello i am a %s string!', 'silly');
console.log(`Hello I am ${'a string'}`);

// Styled
console.log('%c I am some great text', 'font-size: 50px; background: red;');

// warning!
console.warn('OH NOOO');

// Error :|

// Info

// Testing

// clearing

// Viewing DOM Elements

// Grouping together

// counting

// timing