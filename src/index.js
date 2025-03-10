import './styles/font.css';
import './styles/global.css';
import Swiper from 'swiper';
import 'swiper/css';
import {Navigation, Pagination, Autoplay} from 'swiper/modules';

import './styles/index.css';
import './styles/animation.css'

const swiperProduct = new Swiper (".swiper__product", {
  modules: [Navigation, Autoplay],
  slidesPerView: "auto",
  spaceBetween: 30,
  loop: true,
  speed: 1000,
  navigation: {
    nextEl: ".b-next",
  },
  // autoplay: {
  //   delay: 4000,
  //   disableOnInteraction: false
  // }
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


// tablet
document.addEventListener("DOMContentLoaded", function () {
  const burgerMenu = document.querySelector(".burger-menu");
  const nav = document.querySelector(".header__row-right");
  const burgerIcon = document.querySelector(".burger-icon");
  const headerImg = document.querySelector(".header__img");
  const ImageMain = document.querySelector(".header");
  const navLinks = document.querySelectorAll(".nav__item-link"); // Все ссылки в меню

  // Функция закрытия меню с задержкой перед скроллом
  function closeMenu(callback) {
    document.body.classList.remove("blur");
    [nav, burgerIcon, headerImg, ImageMain].forEach(el => el.classList.remove("open"));

    // Ждем завершения анимации перед выполнением callback (скролл)
    setTimeout(() => {
      if (callback) callback();
    }, 300);
  }

  // Открытие/закрытие меню при клике на бургер-иконку
  burgerMenu.addEventListener("click", function () {
    document.body.classList.toggle("blur");
    [nav, burgerIcon, headerImg, ImageMain].forEach(el => el.classList.toggle("open"));
  });

  // Закрытие меню и скролл после задержки
  navLinks.forEach(link => {
    link.addEventListener("click", function (event) {
      event.preventDefault(); // Останавливаем мгновенный переход

      const targetId = this.getAttribute("href"); // Получаем ID секции
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        closeMenu(() => {
          targetSection.scrollIntoView({ behavior: "smooth", block: "start" }); // Плавный скролл
        });
      }
    });
  });

  // Закрытие меню при клике вне его области
  document.addEventListener("click", function (event) {
    if (!burgerMenu.contains(event.target) && !nav.contains(event.target)) {
      closeMenu();
    }
  });
});




