const swiperEl = document.querySelector('swiper-container');
Object.assign(swiperEl, {
    slidesPerView: 1,
    spaceBetween: 10,
    breakpoints: {
        '@0.00': {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        '@0.75': {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        '@1.00': {
            slidesPerView: 3,
            spaceBetween: 40,
        },
        '@1.50': {
            slidesPerView: 4,
            spaceBetween: 50,
        },
        '@2': {
            slidesPerView: 5,
            spaceBetween: 60,
        },
    },
});

swiperEl.initialize();

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const question_mores = $$('.question__top');
question_mores.forEach((element) => {
    element.addEventListener('click', () => {
        $('.question-active').classList.remove('question-active');
        element.parentElement.classList.toggle('question-active');
    });
});

const category_mobile_item = $$('.category-mobile-top');

category_mobile_item.forEach((element) => {
    element.addEventListener('click', () => {
        if (!element.nextElementSibling) return;
        if ($('.category-mobile-active')) $('.category-mobile-active').classList.remove('category-mobile-active');
        element.nextElementSibling.classList.add('category-mobile-active');
    });
});

const menu_icon = $('.menu-icon');
const menu = $('.menu');

menu_icon.addEventListener('click', () => {
    menu.classList.toggle('menu-active');
});
