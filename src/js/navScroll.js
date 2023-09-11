const navbar = document.querySelector('.js-navbar');

const scrollTo = event => {
  if (event.target.nodeName !== 'A') {
    return;
  }

  const section = event.target.getAttribute('data-section');

  let scrollDiv = document.getElementById(`${section}`).offsetTop;
  window.scrollTo({ top: scrollDiv - 64, behavior: 'smooth' });
};

navbar.addEventListener('click', scrollTo);

function closeMenu() {
  const mobileMenu = document.querySelector('.js-menu-container');
  const toggleMenuBtn = document.querySelector('.js-toggle-menu');

  mobileMenu.classList.remove('is-open');
  toggleMenuBtn.classList.remove('is-open');
  toggleMenuBtn.setAttribute('aria-expanded', false);
  document.body.classList.remove('scroll-hidden');
}