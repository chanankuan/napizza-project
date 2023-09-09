import { pizzaList } from '../data/pizzaAssort';

const list = document.querySelector('.menu-card-list');

// Create markup of our menu and render it in DOM.
(function renderMenu() {
  const markup = pizzaList
    .map(item => {
      const {
        id,
        name,
        price: { standard, large },
        imageURL,
        ingredients,
      } = item;
      let currentPrice = standard;

      return `
      <li class='card-item'>
        <div class="card-price"><span>${currentPrice}</span> UAH</div>
        <img class="card-image" src="${imageURL}" alt="${name}">
        <h3 class="card-title">${name}</h3>
        <p class="card-text">${ingredients.join(', ')}</p>
        <div class="card-btn-group btn-group-${id}">
          <button
            type="button"
            class="size-btn active"
            id="${id}-${standard}"
            data-size="standard"
            data-id="${id}"
          >
            Standard size
          </button>

          <button
            type="button"
            class="size-btn"
            id="${id}-${large}"
            data-size="large"
            data-id="${id}"
          >
            Large
          </button>
        </div>
        <input type="button" onclick="addToCart(${id})" value="add to cart" name="add_to_cart" class="add-to-cart-btn">
      </li>
    `;
    })
    .join('');

  list.insertAdjacentHTML('beforeend', markup);
})();

list.addEventListener('click', handleSizeChange);

function handleSizeChange(event) {
  const target = event.target;
  if (target.nodeName !== 'BUTTON') {
    return;
  }

  let targetObj = pizzaList.find(item => item.id === Number(target.dataset.id));
  let size = target.dataset.size;
  let price = targetObj.price[target.dataset.size];
  let cardItem = target.closest('li');
  const btns = cardItem.querySelectorAll('.size-btn');

  cardItem.querySelector('span').textContent = price;

  if (size === 'standard') {
    btns[0].classList.add('active');
    btns[1].classList.remove('active');
  } else if (size === 'large') {
    btns[0].classList.remove('active');
    btns[1].classList.add('active');
  }
}
