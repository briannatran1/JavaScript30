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

/** creates list item with a label and adds to HTML on page load */
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

/** toggles done property */
function toggleDone(evt) {
  const el = evt.target;
  const index = el.dataset.index;

  if (!el.matches('input')) {
    return; // skip this unless it's and input
  }

  items[index].done = !items[index].done;
  localStorage.setItem('items', JSON.stringify(items)); // updates local storage
  populateList(items, itemsList);
}

addItems.addEventListener('submit', addItem);
itemsList.addEventListener('click', toggleDone); // event delegation -- listens to parent
populateList(items, itemsList);