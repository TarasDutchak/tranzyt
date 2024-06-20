$(document).ready(function () {
    var swiper = new Swiper(".mainslider", {
        slidesPerView: 1,
        spaceBetween: 20,
        effect: "fade",
        loop: true,
        initialSlide: 3,

        pagination: {
            el: ".swiper-pagination",
            clickable: true,
            dynamicBullets: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },

    });

    $(window).on('scroll load', function () {
        if ($(this).scrollTop() > 10) {
            $('.header').addClass('scroll');
        } else {
            $('.header').removeClass('scroll');
        }
    });












    // if ($(window).width() < 992) {

    // }


});