const swiper1 = new Swiper('.swiper1', {
    slidesPerView: 1,
    speed: 400,
    pagination: {
        el: '.swiper-pagination1',
    },
});
const swiper2 = new Swiper('.swiper2', {
    slidesPerView: 2.75,
    speed: 900,
    spaceBetween: 136,
    centeredSlides: true,
    loop: true,
    loopAdditionalSlides: 0,
    pagination: {
        el: '.swiper-pagination2',
    },
    breakpoints: {
        1440: {
            slidesPerView: 2.75,
            spaceBetween: 136,
        },
        1200: {
            slidesPerView: 2.5,
            spaceBetween: 70,
        },
        993: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 1.75,
            spaceBetween: 70,
        },
        576: {
            slidesPerView: 1.5,
            spaceBetween: 30,
        },
        320: {
            slidesPerView: 1,
        }
    },
});
window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu__list'),
    menuItem = document.querySelectorAll('.menu__item'),
    hamburger = document.querySelector('.hamburger');
    login = document.querySelector('.header__link');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('menu__list_active');
        login.classList.toggle('header__link_active');
    });

    login.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('menu__list_active');
        login.classList.toggle('header__link_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('menu__list_active');
            login.classList.toggle('header__link_active');
        })
    });
});

const searchBtn1 = document.querySelector('.header__search_small')
const searchBtn2 = document.querySelector('.header__search_big')
const headerLogo = document.querySelector('.header__logo')
const header = document.querySelector('.header')
const searchForm1 = document.querySelector('.header__search-form_1')
const searchForm2 = document.querySelector('.header__search-form_2')
let windowWidth = document.documentElement.clientWidth

searchBtn1.addEventListener('mouseover', (event)=>{
    if(windowWidth <= 1200){
        headerLogo.classList.add('hidden')

    }
})
searchBtn2.addEventListener('mouseover', (event)=>{
    if(windowWidth <= 1200){
        headerLogo.classList.add('hidden')

    }
})

header.addEventListener('mouseout',({target})=>{
    if(windowWidth <= 1200 && target.classList.contains('header')){
        headerLogo.classList.remove('hidden')
    }
})

searchForm1.addEventListener('submit', (event)=>{
    event.preventDefault()
    const {target} = event
    
    if(target.elements[0].value.trim()){
        searchForm.reset()
    }
})
searchForm2.addEventListener('submit', (event)=>{
    event.preventDefault()
    const {target} = event
    
    if(target.elements[0].value.trim()){
        searchForm.reset()
    }
})
