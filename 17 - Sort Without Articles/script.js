'use strict';

const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil',
  'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans',
  'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

// removed for regex fn + didn't want to modify og arr
//
/** takes out article in word */
// function articleOut(word) {
//   const articles = ["The", "An", "A"];
//   const separateWord = word.split(' ');

//   for (let article of articles) {
//     if (article.includes(word[0])) {
//       word = separateWord.splice(1);
//     }
//   }

//   return word.join(' ');
// }

/** replaces article in word */
function strip(band) {
  return band.replace(/^(a |the |an )/i, '').trim();
}

const sortedBands = bands.sort((a, b) => strip(a) > strip(b) ? 1 : -1);

document.querySelector('#bands').innerHTML =
  sortedBands
    .map(band => `<li>${band}</li>`)
    .join('');
