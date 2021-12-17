'use strict';

/*hamburger*/
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

/*jazyky rozbalení*/
const languageElm = document.querySelector('#language');
const languageSelectElm = document.querySelector('#language__select');

languageElm.addEventListener('click', () => {
  languageSelectElm.classList.add('language-select--display');
});

languageSelectElm.addEventListener('click', () => {
  languageSelectElm.classList.remove('language-select--display');
});

/*posun stránky nahoru + z toho zakomentovaného vytvořím animaci na zmenšení loga a skrytí horní řádky. Naruší to ale celou navigaci*/
const scrollTopElm = document.querySelector('.scroll-top');
const logoElm = document.querySelector('#logo');
const menuDownElm = document.querySelector('.menu__down');

window.addEventListener('scroll', () => {
  if (
    document.body.scrollTop > 800 ||
    document.documentElement.scrollTop > 800
  ) {
    scrollTopElm.style.display = 'block';
    /*    logoElm.classList.add('logo--small');
    menuDownElm.classList.add('menu__down--up');*/
  } else {
    scrollTopElm.style.display = 'none';
    /*   logoElm.classList.remove('logo--small');
    menuDownElm.classList.remove('menu__down--up');*/
  }
});

scrollTopElm.addEventListener('click', () => {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
});
