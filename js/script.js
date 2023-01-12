document.querySelector('.header__bottom-btn-archive .pause').addEventListener('click', function() {
    document.querySelector('.header__bottom-btn-archive .pause').classList.toggle('pause-active')
});
document.querySelector('.header__bottom-btn-ether .pause').addEventListener('click', function() {
    document.querySelector('.header__bottom-btn-ether .pause').classList.toggle('pause-active')
});

const buttons = document.querySelectorAll('.podcasts__dscr-btn')

for (let button of buttons) {
    button.addEventListener("click", e => {
        button.classList.toggle('podcasts__btn--active')
    })
};



const element = document.querySelector('select');
const choices = new Choices(element, {
    searchEnabled: false,
    itemSelectText: '',
    shouldSort: false,
});

$(function() {
    $('.guests__accordion-list').accordion({
        heightStyle: "content",

        collapsible: true,
        icons: false
    })
});
document.querySelectorAll('.guests__nav-btn').forEach(function(tabsBtn) {
    tabsBtn.addEventListener('click', function(e) {
        const path = e.currentTarget.dataset.path;
        document.querySelectorAll('.tabs-nav__btn').forEach(function(btn) {
            btn.classList.remove('tabs-nav__btn--active')
        });
        e.currentTarget.classList.add('tabs-nav__btn--active');
        document.querySelectorAll('.tabs-item').forEach(function(tabsBtn) {
            tabsBtn.classList.remove('tabs-item--active')
        });
        document.querySelector(`[data-target="${path}"]`).classList.add('tabs-item--active');
    });
});

document.querySelector('.podcasts__btn').addEventListener('click', function() {
    var elements = document.getElementsByClassName('podcasts__item');
    for (var i = 0; i < elements.length; i++) {
        elements[i].classList.toggle("podcasts__item--active");
    }
});
document.querySelector('.podcasts__btn').addEventListener('click', function() {
    document.querySelector('.podcasts__btn').classList.toggle('podcasts__btn-more--active');
});
const validation = new JustValidate('.about__form', {
    errorFieldCssClass: 'is-invalid',
    errorLabelCssClass: 'is-label-invalid',
    errorLabelStyle: {
        color: '#D52B1E',
        textDecoration: 'underlined',
        position: top,
    },
});

validation
    .addField('#name', [{
        rule: 'required',
        required: true,
        errorMessage: 'Введите имя'
    }, {
        rule: 'maxLength',
        value: 30,
    }, {
        rule: 'minLength',
        value: 2,
    }, ])
    .addField('#email', [{
        rule: 'required',
        errorMessage: 'Введите e-mail',
    }, {
        rule: 'email',
        errorMessage: 'Неккоректный e-mail',
    }, ]);
let closed = document.querySelector('.header__burger-closed');
let burger = document.querySelector('.header__burger-top');
let menuLinks = document.querySelectorAll('.header__nav-link');
let menu = document.querySelector('.header__nav');
let down = document.querySelector('.header__bottom-nav');
burger.addEventListener('click',
    function() {


        down.classList.toggle('header__bottom-nav--active')
        menu.classList.toggle('nav--active');

        document.querySelector('.header__burger-closed').classList.toggle('is-active');

        document.body.classList.toggle('stop-scroll');


    });
closed.addEventListener('click', function() {

    document.querySelector('.header__nav').classList.toggle('nav--active');
    document.querySelector('.header__bottom-nav').classList.toggle('header__bottom-nav--active')
    document.querySelector('.header__burger-closed').classList.toggle('is-active');
});
menuLinks.forEach(function(el) {
    el.addEventListener('click', function() {
        burger.classList.remove('burger--active');

        menu.classList.remove('nav--active');

        down.classList.remove('header__nav-second--active');

        document.body.classList.remove('stop-scroll');

    })

});
let ephir = document.querySelector('.header__bottom-btn');
ephir.addEventListener('click', function() {
    document.querySelector('.header__bottom-btn').classList.toggle('header__bottom-btn--active');
    document.querySelector('.header__bottom-btns').classList.toggle('header__bottom-btns--active');
    document.querySelector('.header__bottom').classList.toggle('header__bottom--active');


});
const swiper1 = new Swiper('.playlists__swiper', {
    slidesPerView: 'auto',
    spaceBetween: 20,
    loop: true,
});
const swiper = new Swiper('.swiper-container', {
    slidesPerView: 4,
    spaceBetween: 20,
    loop: true,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },



    breakpoints: {
        1300: {
            slidesPerView: 4,
            spaceBetween: 20,
        },


        1024: {
            slidesPerView: 2,
            spaceBetween: 40,

        },
        768: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        320: {
            slidesPerView: 2,
            spaceBetween: 15
        },

    },


});
const modal = new GraphModal();