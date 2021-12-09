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

const roomElm = document.querySelector('#room');
const roomTextElm = document.querySelector('#room__info');

roomElm.addEventListener('change', (event) => {
  if (event.target.value !== 'vyber') {
    roomTextElm.classList.add('room__info--hidden');
  } else {
    roomTextElm.classList.remove('room__info--hidden');
  }
});
