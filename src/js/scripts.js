(function () {
  const showHideLastRow = function () {
    const containerGrid = document.querySelector('.cards__list');
    const items = document.querySelectorAll('.cards-item');
    const conatainerStyles = window.getComputedStyle(containerGrid);

    const columns = conatainerStyles.gridTemplateColumns.split(' ').length;
    const cardsItemsCount = items.length;

    const rows = Math.floor(cardsItemsCount / columns);

    containerGrid.style.gridAutoRows = 0;
    containerGrid.style.gridTemplateRows = 'repeat(' + rows + ', 1fr)';
  };

  window.addEventListener('resize', () => {
    showHideLastRow();
  });
  window.addEventListener('DOMContentLoaded', () => {
    showHideLastRow();
  });

  const burger = document.querySelector('.burger');

  const closeOpenMenu = function () {
    const menu = document.querySelector('.nav');
    burger.classList.toggle('burger--active');
    menu.classList.toggle('nav--active');
  }

  burger.addEventListener('click', (e) => {
    e.preventDefault();
    closeOpenMenu();
  });

})()
