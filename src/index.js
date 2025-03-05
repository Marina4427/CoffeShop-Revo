import './styles/font.css';
import './styles/global.css';
import Swiper from 'swiper';
import 'swiper/css';
import {Navigation, Pagination} from 'swiper/modules';

import './styles/index.css';
import './styles/animation.css'

const swiperProduct = new Swiper (".swiper__product", {
  modules: [Navigation],
  slidesPerView: 2.3,
  spaceBetween: 30,
  loop: true,
  speed: 1000,
  navigation: {
    nextEl: ".b-next",
  },  
});


const swiper = new Swiper(".swiperGift", {
  modules: [Pagination],
  slidesPerView: 1,
  loop: false,
  speed: 0,
});

// Получаем кнопки пагинации
const paginationButtons = document.querySelectorAll('.pagination-button');
// Добавляем обработчики событий для кнопок
paginationButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    swiper.slideTo(index); // Переключаемся на соответствующий слайд
    setActiveButton(index); // Делаем кнопку активной
  });
});
// Функция для установки активной кнопки
function setActiveButton(index) {
  paginationButtons.forEach((button) => button.classList.remove('active'));
  paginationButtons[index].classList.add('active');
}
// Обновляем активную кнопку при переключении слайдов
swiper.on('slideChange', () => {
  setActiveButton(swiper.activeIndex);
});
// Инициализация активной кнопки
setActiveButton(0);

const swiperCombo = new Swiper (".swiper__combo", {
  modules: [Navigation],
  slidesPerView: 3.5,
  spaceBetween: 35,
  loop: true,
  speed: 1000,
  navigation: {
    nextEl: ".b-next",
  },  
});


document.addEventListener("DOMContentLoaded", function () {
  const animatedElements = document.querySelectorAll(".animated");

  animatedElements.forEach((el, index) => {
        // Проверяем, является ли элемент тем, у которого уже есть класс "active"
      if (el.classList.contains("active")) {
          el.addEventListener("animationend", () => {
              el.classList.add("background");
          });
      }
  });
});


document.addEventListener('DOMContentLoaded', function () {
  const sections = document.querySelectorAll('section');

  const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
          if (entry.isIntersecting) {
              entry.target.classList.add('visible'); // Добавляем класс, который включает анимацию
              observer.unobserve(entry.target); // Отключаем наблюдение после анимации
          }
      });
  }, {
      threshold: 0.2 // % секции должно быть видно, чтобы запустить анимацию
  });

  sections.forEach((section) => {
      observer.observe(section); // Начинаем следить за каждой секцией
  });
});

