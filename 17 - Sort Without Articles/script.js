'use strict';

const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil',
  'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans',
  'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

// iterate through bands and check if there's an article
// if there is one, take it out

/** takes out article in word */
function articleOut(word) {
  const articles = ["The", "An", "A"];
  const separateWord = word.split(' ');

  for (let article of articles) {
    if (article.includes(word[0])) {
      word = separateWord.splice(1);
    }
  }

  return word.join(' ');
}

function strip(band) {
  return band.replace(/^(a |the |an )/i, '').trim();
}

/** sorts bands in alphabetical order */
function sortBands(bands) {
  const sortedBands = bands.sort((a, b) => a - b);
}