'use strict';

const dateCheckboxElm = document.querySelector('#tlacitkoCheckbox');
const dateTextElm = document.querySelector('#skrytyText');

dateCheckboxElm.addEventListener('change', () => {
  if (this.checked) {
    dateTextElm.classList.add('date__checkbox--display');
  } else {
    dateTextElm.classList.remove('date__checkbox--display');
  }
});
