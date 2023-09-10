import { pizzaList } from '../data/pizzaAssort';

const ulElement = document.querySelector('.js-swiper');
let interval;

const renderSlider = () => {
  const ulElement = document.querySelector('.js-swiper');
  // Ми хочемо додати до слайдеру останні 3 позиції,
  // тобто з айдішкою 10, 11 та 12.
  const content = pizzaList.filter(item => {
    return item.id === 10 || item.id === 11 || item.id === 12;
  });

  const markup = content
    .map(item => {
      return `
        <li class="swiper-slide js-swiper-slide ${item.id === 10 ? 'active' : ''}">
          <div class="wrapper">
            <div class="swiper-slide-image-wrapper">
              <img src="${item.imageURL}" alt="${item.name}" />
            </div>
            <div class="swiper-slide-content">
              <h3 class="description">${item.name}</h3>
              <div class="button-wrapper">
                <button class="swiper-button-prev js-swiper-button-prev js-onclick">
                  <svg class="chevron-icon icon js-onclick" width="20" height="20">
                    <use class="js-onclick" href="./img/symbol-defs.svg#chevron-left"></use>
                  </svg>
                </button>
                <button class="swiper-button-next js-swiper-button-next js-onclick">
                  <svg class="chevron-icon icon js-onclick" width="20" height="20">
                    <use class="js-onclick" href="./img/symbol-defs.svg#chevron-right"></use>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </li>
      `;
    })
    .join('');

  ulElement.insertAdjacentHTML('beforeend', markup);
};

const changeSlide = event => {
  if (!event.target.classList.contains('js-onclick')) {
    return;
  }

  let button = event.target.closest('button');
  if (button.classList.contains('js-swiper-button-prev')) {
    prev();
    clearInterval(interval);
    interval = setInterval(next, 5000);
  } else if (button.classList.contains('js-swiper-button-next')) {
    next();
    clearInterval(interval);
    interval = setInterval(next, 5000);
  }
};

const prev = () => {
  const slides = document.querySelectorAll('.js-swiper-slide');
  let lastIndex = slides.length - 1;

  for (let i = 0; i < slides.length; i++) {
    if (slides[i].classList.contains('active')) {
      slides[i].classList.remove('active');
      if (i !== 0) {
        slides[i - 1].classList.add('active');
      } else {
        slides[lastIndex].classList.add('active');
      }

      return;
    }
  }
};

const next = () => {
  const slides = document.querySelectorAll('.js-swiper-slide');
  let lastIndex = slides.length - 1;

  for (let i = 0; i < slides.length; i++) {
    if (slides[i].classList.contains('active')) {
      slides[i].classList.remove('active');
      if (i !== lastIndex) {
        slides[i + 1].classList.add('active');
      } else {
        slides[0].classList.add('active');
      }

      return;
    }
  }
};

renderSlider();
interval = setInterval(next, 5000);
ulElement.addEventListener('click', changeSlide);
