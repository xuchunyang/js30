const addItems = document.querySelector('.add-items'),
      itemsList = document.querySelector('.plates'),
      items = JSON.parse(localStorage.getItem('dishes')) || [];

addItems.addEventListener('submit', addItem);

function addItem(e) {
  e.preventDefault();
  console.log(e);
  const text = e.target.querySelector('[name="item"]').value;
        item = {
          text,
          done: false
        };

  items.push(item);
  populateList(items, itemsList)
  localStorage.setItem('dishes', JSON.stringify(items));
  e.target.reset();
}

function populateList(items, itemsList) {
  if (!(items instanceof Array)) return false;

  itemsList.innerHTML = items.map((item, i) => {
    return `<li>
<input type="checkbox" data-index=${i} id="item${i}" ${item.done ? 'checked' : ''} />
<label for="item${i}">${item.text}</label>
</li>`
  }).join('');
}

document.onload = populateList(items, itemsList);

itemsList.addEventListener('click', toggleDone);

function toggleDone(e) {
  // ul > li
  if (!e.target.matches('input')) return;

  const element = e.target,
        idx = element.dataset.index;

  console.log(items, idx, items[idx]);
  
  items[idx].done = !items[idx].done;
  localStorage.setItem('dishes', JSON.stringify(items));
}
