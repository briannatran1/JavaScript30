'use strict';

const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const items = JSON.parse(localStorage.getItem('items')) || []; // on page load

/** adds item to list */
function addItem(evt) {
  evt.preventDefault();
  const text = (this.querySelector('[name=item]')).value;
  const item = {
    text: text,
    done: false
  };

  items.push(item);
  populateList(items, itemsList);
  localStorage.setItem('items', JSON.stringify(items)); // can only put strs in local storage
  this.reset(); // this = form element
}

/** creates list item with a label and adds to HTML */
function populateList(plates = [], platesList) {
  platesList.innerHTML = plates.map((plate, idx) => {
    return `
      <li>
        <input type="checkbox" data-index=${idx} id="item${idx}" ${plate.done ? 'checked' : ''} />
        <label for="item${idx}">${plate.text}</label>
      </li>
    `;
  }).join('');
}

addItems.addEventListener('submit', addItem);

populateList(items, itemsList);