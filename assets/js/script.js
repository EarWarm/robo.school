const swiper = new Swiper('.teachers__swiper', {
    slidesPerView: 1,
    spaceBetween: 40,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    scrollbar: {
        el: '.swiper-scrollbar',
    },
    breakpoints: {
        767.98: {
            slidesPerView: 2
        },
        1199.98: {
            slidesPerView: 3
        },
        1599.98: {
            slidesPerView: 4
        }
    }
});