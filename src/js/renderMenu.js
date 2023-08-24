import { pizzaList } from '../data/pizzaAssort'

const pickSize = (id, size, price) => {
  const pickSizeBtns = document.querySelectorAll(".card-btn-group");
  const priceElements = document.querySelectorAll(".card-price span");

  if (size === "standard") {
    pickSizeBtns[id].firstElementChild.classList.add("active");
    pickSizeBtns[id].lastElementChild.classList.remove("active");
    priceElements[id].innerHTML = price;
  }

  if (size === "large") {
    pickSizeBtns[id].lastElementChild.classList.add("active");
    pickSizeBtns[id].firstElementChild.classList.remove("active");
    priceElements[id].innerHTML = price;
  }

  renderMenu();
}

// Render main menu
const renderMenu = () => {
  const path = "./img/";

  pizzas.forEach(pizza => {
    const menuBox = document.querySelector(".menu-card-list");
    const newLi = document.createElement("li");
    const { id, name, price: { standard, large }, image, ingredients } = pizza;
    let currentPrice = standard;

    newLi.classList.add("card-item");
    newLi.innerHTML = `
        <div class="card-price"><span>${currentPrice}</span> UAH</div>
        <img class="card-image" src="${path + image}" alt="${name}">
        <h3 class="card-title">${name}</h3>
        <p class="card-text">${ingredients.join(", ")}</p>
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
}

const pizzas = [...pizzaList];

renderMenu();

(() => {
  const buttons = document.querySelectorAll('.menu .size-btn');
  buttons.forEach(button => {
    const size = button.dataset.size;
    const price = button.dataset.price;
    const id = button.dataset.id;

    button.addEventListener('click', () => pickSize(id - 1, size, price))
  })
})();
