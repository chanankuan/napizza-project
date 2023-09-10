const accordionContent = document.querySelectorAll('.accordion-content');

const removeOpen = index => {
  accordionContent.forEach((item, i) => {
    if (index !== i) {
      const list = item.querySelector('.accordion-list');

      item.classList.remove('open');
      list.style.height = '0px';
    }
  });
};

accordionContent.forEach((item, index) => {
  const header = item.querySelector('.accordion-title');

  header.addEventListener('click', () => {
    const list = item.querySelector('.accordion-list');

    item.classList.toggle('open');

    if (item.classList.contains('open')) {
      list.style.height = `${list.scrollHeight}px`;
    } else {
      list.style.height = '0px';
    }

    removeOpen(index);
  });
});
