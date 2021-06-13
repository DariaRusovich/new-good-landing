var swiper2 = new Swiper(".mySwiper", {
    spaceBetween: 50,
    slidesPerView: 1,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    thumbs: {
        swiper: swiper,
    },
});
var swiper = new Swiper(".mySwiper2", {
    spaceBetween: 80,
    slidesPerView: 3,
    loop: true,
    freeMode: false,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
});



const paginationSlider = new Swiper(".pagination-slider", {
    slidesPerView: 1,
    spaceBetween: 55,

    pagination: {
        el: ".pagination-img",
        clickable: true,
    },
    speed: 800,
    preloadImages: false,
    // Enable lazy loading
    lazy: {
        loadPrevNext: true,
    },
});

