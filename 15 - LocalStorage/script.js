'use strict';

const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const items = [];

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
  // this = form element
  this.reset();
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