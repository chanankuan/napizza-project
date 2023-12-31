import { closeNavMenu as closeMenu } from './closeNavMenu';

const mobileMenu = document.querySelector('.js-menu-container');
const toggleMenuBtn = document.querySelector('.js-toggle-menu');
const body = document.body;

const toggleMenu = () => {
  const isMenuOpen = toggleMenuBtn.getAttribute('aria-expanded') === 'true' || false;
  toggleMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
  mobileMenu.classList.toggle('is-open');
  toggleMenuBtn.classList.toggle('is-open');
  body.classList.toggle('scroll-hidden');

  if (!isMenuOpen) {
    window.addEventListener('keydown', handleClose);
  }
};

toggleMenuBtn.addEventListener('click', toggleMenu);

// Close the mobile menu on wider screens if the device orientation changes
window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
  if (!e.matches || !mobileMenu.classList.contains('is-open')) return;

  closeMenu();
});

const handleClose = event => {
  if (event.key === 'Escape') {
    closeMenu();
    window.removeEventListener('keydown', handleClose);
  }
};
