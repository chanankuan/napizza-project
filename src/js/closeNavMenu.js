export const closeNavMenu = () => {
  const mobileMenu = document.querySelector('.js-menu-container');
  const toggleMenuBtn = document.querySelector('.js-toggle-menu');

  mobileMenu.classList.remove('is-open');
  toggleMenuBtn.classList.remove('is-open');
  toggleMenuBtn.setAttribute('aria-expanded', false);
  document.body.classList.remove('scroll-hidden');
};
