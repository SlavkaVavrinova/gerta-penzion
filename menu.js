'use strict';

const menuOpenElm = document.querySelector('#menu__button');
const menu = document.querySelector('#menu__open');
const cross = document.querySelector('#cross');
const contactElm = document.querySelector('#contact-nav');

menuOpenElm.addEventListener('click', () => {
  menu.classList.add('menu-opened');
  contactElm.classList.add('contact-menu-opened');
});

cross.addEventListener('click', () => {
  menu.classList.remove('menu-opened');
  contactElm.classList.remove('contact-menu-opened');
});
