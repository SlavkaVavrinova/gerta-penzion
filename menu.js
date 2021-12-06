'use strict';

const menuOpenElm = document.querySelector('#menu__button');
const menu = document.querySelector('#menu__open');

menuOpenElm.addEventListener('click', () => {
  menu.classList.add('menu-opened');
});
