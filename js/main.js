$(document).ready(function () {
    AOS.init({
        duration: 1400,
        disable: 'mobile',
		once: true,
    });

    var swiper = new Swiper(".mainslider", {
        slidesPerView: 1,
        spaceBetween: 20,
        effect: "fade",
        loop: true,
        // initialSlide: 3,
        speed: 1000,
        autoplay: {
            delay: 3500,
            disableOnInteraction: false,
        },

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

    var swiper = new Swiper(".testimsl", {
        slidesPerView: 1,
        spaceBetween: 20,
        speed: 1000,
        loop: true,
        autoplay: {
            delay: 3500,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },

        breakpoints: {
            640: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            992: {
                slidesPerView: 3,
                spaceBetween: 27,
            },
        },
    });

    // brands slider
    var swiper = new Swiper(".brandsslider.v1", {
        slidesPerView: "auto",
        spaceBetween: 20,
        loop: true,
        speed: 6000,
        
        autoplay: {
            delay: 1,
            disableOnInteraction: false,
        },
    });

    var swiper = new Swiper(".brandsslider.v2", {
        slidesPerView: "auto",
        spaceBetween: 20,
        loop: true,
        speed: 6000,
        
        autoplay: {
            delay: 1,
            disableOnInteraction: false,
            reverseDirection: true
        },
    });

    $('.menubtn').click(function () {
        $('.headernavcolumn').addClass('active');
        $('.mobshadowbox').addClass('show');
    });

    $('.closemenu').click(function () {
        $('.headernavcolumn').removeClass('active');
        $('.mobshadowbox').removeClass('show');
    });

    $('.mobshadowbox').click(function () {
        $('.headernavcolumn').removeClass('active');
        $('.mobshadowbox').removeClass('show');
    });

    $("header.header nav ul, footer.footer nav ul").on("click", "a:not(.normallink)", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top - 80;
        $('body,html').animate({ scrollTop: top }, 800);
    });

    if ($(window).width() < 1200) {
        $('.headernavcolumn ul li a').click(function () {
            $('.headernavcolumn').removeClass('active');
            $('.mobshadowbox').removeClass('show');
        })
    }

    $(".totop").click(function () {
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });



    $(".scrlcont").on("click", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top - 80;
        $('body,html').animate({ scrollTop: top }, 800);
    });

});