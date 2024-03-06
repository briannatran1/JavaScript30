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
  // this = form element
  this.reset();
}

/** adds item to list page */
function populateList() {

}

addItems.addEventListener('submit', addItem);