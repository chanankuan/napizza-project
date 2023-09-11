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

export const closeMenu = () => {
  const mobileMenu = document.querySelector('.js-menu-container');
  const toggleMenuBtn = document.querySelector('.js-toggle-menu');

  mobileMenu.classList.remove('is-open');
  toggleMenuBtn.classList.remove('is-open');
  toggleMenuBtn.setAttribute('aria-expanded', false);
  document.body.classList.remove('scroll-hidden');
};

navbar.addEventListener('click', scrollTo);
