// main page banner swiper
var swiper = new Swiper('.banner-swiper', {
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
    },
});

// main page popular items swiper
var swiper = new Swiper('.popular-swiper', {
    // autoHeight: true,
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        576: {
            slidesPerView: 2
        },
        768: {
            slidesPerView: 3
        },
        992: {
            slidesPerView: 3
        },
        1200: {
            slidesPerView: 3
        },
        1600: {
            slidesPerView: 4,
            spaceBetween: 30
        }
    }
});

// main page promotions swiper
var swiper = new Swiper('.promotions-swiper', {
    // autoHeight: true,
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        576: {
            slidesPerView: 2
        },
        768: {
            slidesPerView: 3
        },
        992: {
            slidesPerView: 3
        },
        1200: {
            slidesPerView: 3
        },
        1600: {
            slidesPerView: 3,
            spaceBetween: 30
        }
    }
});

// main page reviews swiper
var swiper = new Swiper('.reviews-swiper', {
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        576: {
            slidesPerView: 2
        },
        768: {
            slidesPerView: 3
        },
        992: {
            slidesPerView: 3
        },
        1200: {
            slidesPerView: 3
        },
        1600: {
            slidesPerView: 3,
            spaceBetween: 60
        }
    }
});