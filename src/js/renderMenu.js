import { pizzaList } from '../data/pizzaAssort';
import pizza1 from '../img/pizza-1.png';
import pizza2 from '../img/pizza-2.png';
import pizza3 from '../img/pizza-3.png';
import pizza4 from '../img/pizza-4.png';
import pizza5 from '../img/pizza-5.png';
import pizza6 from '../img/pizza-6.png';
import pizza7 from '../img/pizza-7.png';
import pizza8 from '../img/pizza-8.png';
import pizza9 from '../img/pizza-9.png';
import pizza10 from '../img/pizza-10.png';
import pizza11 from '../img/pizza-11.png';
import pizza12 from '../img/pizza-12.png';

const images = [
  pizza1,
  pizza2,
  pizza3,
  pizza4,
  pizza5,
  pizza6,
  pizza7,
  pizza8,
  pizza9,
  pizza10,
  pizza11,
  pizza12,
];

const pickSize = (id, size, price) => {
  const pickSizeBtns = document.querySelectorAll('.card-btn-group');
  const priceElements = document.querySelectorAll('.card-price span');

  if (size === 'standard') {
    pickSizeBtns[id].firstElementChild.classList.add('active');
    pickSizeBtns[id].lastElementChild.classList.remove('active');
    priceElements[id].innerHTML = price;
  }

  if (size === 'large') {
    pickSizeBtns[id].lastElementChild.classList.add('active');
    pickSizeBtns[id].firstElementChild.classList.remove('active');
    priceElements[id].innerHTML = price;
  }

  renderMenu();
};

// Render main menu
const renderMenu = () => {
  pizzas.forEach(pizza => {
    const menuBox = document.querySelector('.menu-card-list');
    const newLi = document.createElement('li');
    const {
      id,
      name,
      price: { standard, large },
      ingredients,
    } = pizza;
    let currentPrice = standard;

    newLi.classList.add('card-item');
    newLi.innerHTML = `
      <div class="card-price"><span>${currentPrice}</span> UAH</div>
        <img class="card-image" src="${images[id - 1]}" alt="${name}">
        <h3 class="card-title">${name}</h3>
        <p class="card-text">${ingredients.join(', ')}</p>
        <div class="card-btn-group btn-group-${id}">
          <button
            type="button"
            class="size-btn active"
            data-size="standard"
            data-price="${standard}"
            data-id="${id}"
            id="${id}-${standard}"
          >
            Standard size
          </button>

          <button
            type="button"
            class="size-btn"
            data-size="large"
            data-price="${large}"
            data-id="${id}"
            id="${id}-${large}"
          >
            Large
          </button>
        </div>
        <input type="button" onclick="addToCart(${id})" value="add to cart" name="add_to_cart" class="add-to-cart-btn">
      `;

    menuBox.appendChild(newLi);
  });
};

const pizzas = [...pizzaList];

renderMenu();

(() => {
  const buttons = document.querySelectorAll('.menu .size-btn');
  buttons.forEach(button => {
    const size = button.dataset.size;
    const price = button.dataset.price;
    const id = button.dataset.id;

    button.addEventListener('click', () => pickSize(id - 1, size, price));
  });
})();
