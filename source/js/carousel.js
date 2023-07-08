const previewButton = document.querySelector('.carousel__button--left');
const nextButton = document.querySelector('.carousel__button--right')
const quoteContainer = document.querySelectorAll('.carousel__quote')

let active = 0;

nextButton.onclick = () => {
  quoteContainer[active].classList.remove('active');
  if (active + 1 == quoteContainer.length) {
    active = 0;
  }
  else {
    active++;
  }
  quoteContainer[active].classList.add('active');
}
