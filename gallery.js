'use strict';

const buttonFotoElmDouble = document.querySelector('.foto__button--double');
const fotoElmDouble = document.querySelector('.foto__hidden--double');

buttonFotoElmDouble.addEventListener('click', () => {
  if (fotoElmDouble.classList.contains('foto__hidden--double')) {
    fotoElmDouble.classList.add('foto__display--double');
    fotoElmDouble.classList.remove('foto__hidden--double');
    buttonFotoElmDouble.textContent = 'Skrýt foky';
  } else {
    fotoElmDouble.classList.remove('foto__display--double');
    fotoElmDouble.classList.add('foto__hidden--double');
    buttonFotoElmDouble.textContent = 'Ukázat foky';
  }
});

const buttonFotoElmKitchen = document.querySelector('.foto__button--kitchen');
const fotoElmKitchen = document.querySelector('.foto__hidden--kitchen');

buttonFotoElmKitchen.addEventListener('click', () => {
  if (fotoElmKitchen.classList.contains('foto__hidden--kitchen')) {
    fotoElmKitchen.classList.add('foto__display--kitchen');
    fotoElmKitchen.classList.remove('foto__hidden--kitchen');
    buttonFotoElmKitchen.textContent = 'Skrýt foky';
  } else {
    fotoElmKitchen.classList.remove('foto__display--kitchen');
    fotoElmKitchen.classList.add('foto__hidden--kitchen');
    buttonFotoElmKitchen.textContent = 'Ukázat foky';
  }
});

const buttonFotoElmTripple = document.querySelector('.foto__button--tripple');
const fotoElmTripple = document.querySelector('.foto__hidden--tripple');

buttonFotoElmTripple.addEventListener('click', () => {
  if (fotoElmTripple.classList.contains('foto__hidden--tripple')) {
    fotoElmTripple.classList.add('foto__display--tripple');
    fotoElmTripple.classList.remove('foto__hidden--tripple');
    buttonFotoElmTripple.textContent = 'Skrýt foky';
  } else {
    fotoElmTripple.classList.remove('foto__display--tripple');
    fotoElmTripple.classList.add('foto__hidden--tripple');
    buttonFotoElmTripple.textContent = 'Ukázat foky';
  }
});

const buttonFotoElmFamily = document.querySelector('.foto__button--family');
const fotoElmFamily = document.querySelector('.foto__hidden--family');

buttonFotoElmFamily.addEventListener('click', () => {
  if (fotoElmFamily.classList.contains('foto__hidden--family')) {
    fotoElmFamily.classList.add('foto__display--family');
    fotoElmFamily.classList.remove('foto__hidden--family');
    buttonFotoElmFamily.textContent = 'Skrýt foky';
  } else {
    fotoElmFamily.classList.remove('foto__display--family');
    fotoElmFamily.classList.add('foto__hidden--family');
    buttonFotoElmFamily.textContent = 'Ukázat foky';
  }
});

const buttonFotoElmSmall = document.querySelector('.foto__button--small');
const fotoElmSmall = document.querySelector('.foto__hidden--small');

buttonFotoElmSmall.addEventListener('click', () => {
  if (fotoElmSmall.classList.contains('foto__hidden--small')) {
    fotoElmSmall.classList.add('foto__display--small');
    fotoElmSmall.classList.remove('foto__hidden--small');
    buttonFotoElmSmall.textContent = 'Skrýt foky';
  } else {
    fotoElmSmall.classList.remove('foto__display--small');
    fotoElmSmall.classList.add('foto__hidden--small');
    buttonFotoElmSmall.textContent = 'Ukázat foky';
  }
});
