const checkBoxes = document.querySelectorAll('.inbox input[type="checkbox"]');

let lastSelected;

checkBoxes.forEach(checkbox => checkbox.addEventListener('click', multiChecker));

function multiChecker(e) {
  if (lastSelected && e.shiftKey) {
    this.checked = lastSelected.checked;

    let startIdx, endIdx;
    if (this.id > lastSelected.id) {
      [startIdx, endIdx] = [lastSelected.id, this.id];
    } else {
      [startIdx, endIdx] = [this.id, lastSelected.id];
    }

    const middleInputs = Array.from(checkBoxes).slice(startIdx + 1, endIdx);
    middleInputs.forEach(checkbox => checkbox.checked = this.checked);
  }

  lastSelected = this;
}
