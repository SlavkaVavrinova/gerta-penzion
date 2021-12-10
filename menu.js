'use strict';

const menuOpenElm = document.querySelector('#menu__button');
const menu = document.querySelector('#menu__open');
const cross = document.querySelector('#cross');

const contactElm = document.querySelector('#contact');
const roomsElm = document.querySelector('#rooms');

menuOpenElm.addEventListener('click', () => {
  menu.classList.add('menu-opened');
  contactElm.classList.add('contact-menu-opened');
  roomsElm.classList.add('rooms-menu-opened');
});

cross.addEventListener('click', () => {
  menu.classList.remove('menu-opened');
  contactElm.classList.remove('contact-menu-opened');
  roomsElm.classList.remove('rooms-menu-opened');
});

const languageElm = document.querySelector('#language');
const languageSelectElm = document.querySelector('#language__select');

languageElm.addEventListener('click', () => {
  languageSelectElm.classList.add('language-select--display');
});

languageSelectElm.addEventListener('click', () => {
  languageSelectElm.classList.remove('language-select--display');
});
