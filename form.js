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

const formElm = document.querySelector('#reservationForm');

if (formElm) {
  formElm.addEventListener('submit', (e) => {
    e.preventDefault();
    fetch('rezervace.php', {
      method: 'POST',
      body: new FormData(formElm),
    })
      .then((response) => response.json())
      .then((json) => {
        formElm.style.display = 'none';
        const formMessage = document.createElement('div');
        formMessage.classList.add('form-message');
        formMessage.textContent = json.message;
        formElm.parentElement.appendChild(formMessage);
      });
  });
}
