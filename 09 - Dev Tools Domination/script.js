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
console.error('Shit!');

// Info
console.info('Crocodiles eat 3-4 people per year');

// Testing
const p = document.querySelector('p');
console.assert(p.classList.contains('ouch'), 'That is wrong');

console.assert(1 === 2, 'That is wrong');

// clearing
console.clear();

// Viewing DOM Elements
console.log(p);
console.dir(p);

// Grouping together
dogs.forEach(dog => {
  // console.group(`${dog.name}`);
  console.groupCollapsed(`${dog.name}`);
  console.log(`This is ${dog.name}`);
  console.log(`${dog.name} is ${dog.age} years old`);
  console.groupEnd(`${dog.name}`);
});

// counting
console.count('Wes');
console.count('Steve');
console.count('Wes');
console.count('Steve');
console.count('Wes');

// timing
console.time('fetching data');

const endpoint = 'https://api.github.com/users/briannatran1';

/** fetches data from github api */
async function fetchData() {
  const resp = await fetch(endpoint);
  const data = await resp.json();

  console.timeEnd('fetching data');
  console.log(data);
}

fetchData();

// table
console.table(dogs);