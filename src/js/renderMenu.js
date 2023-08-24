import { pizzas } from '../data/pizzaAssort'

// Render main menu
const products = pizzas
let path = "./img/";

products.forEach(item => {
  const menuBox = document.querySelector(".menu-card-list");
  const newLi = document.createElement("li");
  const { id, name, price, image, ingredients } = item;

  let standardSize = price.standard;
  let largeSize = price.large;
  let currentPrice = standardSize;
  let currentID = id + currentPrice;
  console.log();

  newLi.classList.add("card-item");
  newLi.innerHTML = `
      <div class="card-price"><span>${currentPrice}</span> UAH</div>
      <img class="card-image" src="${path + image}" alt="${name}">
      <h4 class="card-title">${name}</h4>
      <p class="card-text">${ingredients.join(", ")}</p>
      <div class="card-btn-group btn-group-${id}" role="group" aria-label="Basic example">
        <button type="button" class="size-btn btn-secondary active" value="standard" onclick="chooseSize('standard', ${id}, ${standardSize}, ${largeSize})" id="${id}-${standardSize}">Standard size</button>
        <button type="button" class="size-btn btn-secondary" value="large" onclick="chooseSize('large', ${id}, ${standardSize}, ${largeSize})" id="${id}-${largeSize}">Large</button>
      </div>
      <input type="button" onclick="addToCart(${id})" value="add to cart" name="add_to_cart" class="add-to-cart-btn">
    `;
  menuBox.appendChild(newLi);
});

function chooseSize(action, id, standardSize, largeSize) {
  const chooseSizeBtns = document.querySelectorAll(".btn-group");
  const priceElements = document.querySelectorAll(".price span");

  if (action === "standard" || action === "") {
    currentPrice = standardSize;
    chooseSizeBtns[id - 1].firstElementChild.classList.add("active");
    chooseSizeBtns[id - 1].lastElementChild.classList.remove("active");
    priceElements[id - 1].innerHTML = currentPrice;

    return currentPrice;
  }
  if (action === "large") {
    currentPrice = largeSize;
    chooseSizeBtns[id - 1].lastElementChild.classList.add("active");
    chooseSizeBtns[id - 1].firstElementChild.classList.remove("active");
    priceElements[id - 1].innerHTML = currentPrice;

    return currentPrice;
  }

  renderMenu();
}