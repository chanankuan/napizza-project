// Open and close shopping cart
const openCartBtn = document.querySelector('[data-cart-open]');
const closeCartBtn = document.querySelector('[data-cart-close]');
const cart = document.querySelector('[data-cart]');

const toggleCart = () => {
  cart.classList.toggle('active');
};

openCartBtn.addEventListener('click', toggleCart);
closeCartBtn.addEventListener('click', toggleCart);
