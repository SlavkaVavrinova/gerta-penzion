'use strict';

/*checkbox datum*/
const dateCheckboxElm = document.querySelector('#date__checkbox');
const dateTextElm = document.querySelector('#date__specification');

dateCheckboxElm.addEventListener('change', () => {
  if (dateCheckboxElm.checked) {
    dateTextElm.classList.add('date__checkbox--display');
  } else {
    dateTextElm.classList.remove('date__checkbox--display');
  }
});

/*select u pokojů*/
const roomElm = document.querySelector('#room');
const roomTextElm = document.querySelector('#room__info');

roomElm.addEventListener('change', (event) => {
  if (event.target.value !== 'vyber') {
    roomTextElm.classList.add('room__info--hidden');
  } else {
    roomTextElm.classList.remove('room__info--hidden');
  }
});

/*validace emailu*/
const emailElm = document.querySelector('#email');
const emailErrorElm = document.querySelector('#error-message');

emailElm.addEventListener('change', (event) => {
  if (validator.isEmail(event.target.value)) {
    emailElm.classList.add('email__valid');
    emailElm.classList.remove('email__invalid');
    emailErrorElm.textContent = '';
  } else {
    emailElm.classList.add('email__invalid');
    emailErrorElm.textContent = 'Neplatný email';
  }
});

/*validace jména*/
const nameElm = document.querySelector('#name');

nameElm.addEventListener('change', () => {
  if (nameElm.value.length > 3) {
    nameElm.classList.add('input__valid');
    nameElm.classList.remove('input__invalid');
    emailErrorElm.textContent = '';
  } else {
    nameElm.classList.add('input__invalid');
    emailErrorElm.textContent = 'Zadané jméno je krátké, neplatné';
  }
});

/*odeslání formuláře*/
const formElm = document.querySelector('#reservationForm');

if (formElm) {
  formElm.addEventListener('submit', (e) => {
    e.preventDefault();
    fetch('/rezervace.php', {
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

const formElmEn = document.querySelector('#reservationFormEn');

if (formElmEn) {
  formElmEn.addEventListener('submit', (e) => {
    e.preventDefault();
    fetch('/rezervaceEn.php', {
      method: 'POST',
      body: new FormData(formElmEn),
    })
      .then((response) => response.json())
      .then((json) => {
        formElmEn.style.display = 'none';
        const formMessage = document.createElement('div');
        formMessage.classList.add('form-message');
        formMessage.textContent = json.message;
        formElmEn.parentElement.appendChild(formMessage);
      });
  });
}
