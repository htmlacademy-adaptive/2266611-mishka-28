// Элементы карусели

const carouselContainer = document.querySelector('.carousel__wrapper');
const prevButton = document.querySelector('.carousel__button--previous');
const nextButton = document.querySelector('.carousel__button--next');
const quotes = Array.from(carouselContainer.querySelectorAll('.carousel__quote'));
const quoteCount = quotes.length;
let quoteIndex = 0;

// Обработчики событий для кнопок

prevButton.addEventListener('click', showPreviousQuote);
nextButton.addEventListener('click', showNextQuote);

// Функция для показа предыдущего отзыва

function showPreviousQuote() {
  quoteIndex = (quoteIndex - 1 + quoteCount) % quoteCount;
  updateCarousel();
}

// Функция для показа следующего отзыва

function showNextQuote() {
  quoteIndex = (quoteIndex + 1) % quoteCount;
  updateCarousel();
}

// Функция для обновления отображения карусели

function updateCarousel() {
  quotes.forEach((quote, index) => {
    if (index === quoteIndex) {
      quote.style.display = 'flex';
    } else {
      quote.style.display = 'none';
    }
  });
}

// Инициализация карусели

updateCarousel();
