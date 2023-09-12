import { closeNavMenu as closeMenu } from './closeNavMenu';

const navbar = document.querySelector('.js-navbar');

const scrollTo = event => {
  const mobileMenu = document.querySelector('.js-menu-container');

  if (event.target.nodeName !== 'A') {
    return;
  }

  const section = event.target.getAttribute('data-section');

  let scrollDiv = document.getElementById(`${section}`).offsetTop;
  window.scrollTo({ top: scrollDiv - 64, behavior: 'smooth' });

  if (mobileMenu.classList.contains('is-open')) {
    closeMenu();
  }
};

navbar.addEventListener('click', scrollTo);
