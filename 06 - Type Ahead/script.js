'use strict';

const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
const cities = [];
const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

/** fetches data from API */
async function fetchData(endpoint) {
  const response = await fetch(endpoint);
  const data = await response.json();
  cities.push(...data);
}

/** finds matching cities or states */
function findMatches(wordToMatch, cities) {
  return cities.filter(place => {
    //g = global, i = insensitive
    const regex = new RegExp(wordToMatch, 'gi');
    return place.city.match(regex) || place.state.match(regex);
  });
}

/** displays matches based on search */
function displayMatches() {
  const matches = findMatches(this.value, cities);
  const html = matches.map(place => {
    return `
      <li>
        <span class="name">${place.city}, ${place.state}</span>
        <span class="population">${place.population}</span>
      </li>
    `;
  }).join('');

  suggestions.innerHTML = html;
}

searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);

fetchData(endpoint);


