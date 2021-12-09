'use strict';

const dateCheckboxElm = document.querySelector('#checkbox--date');
const dateTextElm = document.querySelector('#checkbox__text--date');

dateCheckboxElm.addEventListener('change', () => {
  if (dateCheckboxElm.checked) {
    dateTextElm.classList.add('date__checkbox--display');
  } else {
    dateTextElm.classList.remove('date__checkbox--display');
  }
});
