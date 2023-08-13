const burgerButton = document.querySelector('.page-header__toggle');
const pageHeader = document.querySelector('.page-header');

pageHeader.classList.remove('no-js');
burgerButton.addEventListener('click', () => pageHeader.classList.toggle('is-open'));
