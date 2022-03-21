$(document).ready(function(){

    $('.nav__main_social-person').on('click', () => {
        $('body').addClass('noScroll');      
        $('.modal-loginAccount').addClass('active-js');
        $('.burgerMenu__wrapper').removeClass('active-js');
    });

    $('.modal__checkbox_losePass').on('click', () => {
        $('.modal-recoverPass').addClass('active-js');
    });

    $('.js-btn__header').on('click', () => {
        $('body').addClass('noScroll');
        $('.modal-call').addClass('active-js');
    });

    $('.js-btn__footer').on('click', () => {
        $('body').addClass('noScroll');
        $('.modal-footerCall').addClass('active-js');
    });

    $('.modal__btn-registration').on('click', () => {
        $('.modal-registration').addClass('active-js');
        $('.modal-loginAccount').removeClass('active-js');
    });

    $('.burgeMenu__iconWrapper').on('click', () => {
        $('body').addClass('noScroll');
        $('.burgerMenu__wrapper').addClass('active-js');
    })

    $('.js-close__iconModal').on('click', () => {
        $('body').removeClass('noScroll');
        $('.modal-call').removeClass('active-js');
        $('.modal-registration').removeClass('active-js');
        $('.modal-footerCall').removeClass('active-js');
        $('.burgerMenu__wrapper').removeClass('active-js');
        $('.modal').removeClass('active-js');
    });

    $('.headerBg__wrapper').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 900,
        arrows: false,
        dots: true
    });

    $('.header__slider__wrapper').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        variableWidth: true,
        infinite: false,
        centerPadding: '0px',
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    arrows: false,
                }
            },            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 3,
                    arrows: false,
                }
            },
            {
                breakpoint: 321,
                settings: {
                    slidesToShow: 2,
                    arrows: false,
                }
            }
        ],
      });

    $('.popular__excursions_cards').slick({
        infinite: false,
        responsive: [
            {
                breakpoint: 2560,
                settings: 'unslick'
            },
            {
                breakpoint: 416,
                settings: {
                    arrows: false,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    variableWidth: true,
                }
            }
        ],
    });

    $('.whatSay__slider_wrapper').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: false,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    arrows: false,
                }
            },
            {
                breakpoint: 822,
                settings: {
                    slidesToShow: 2,
                    arrows: false,
                }
            },
            {
                breakpoint: 580,
                settings: {
                    variableWidth:true,
                    slidesToShow: 2,
                    arrows: false,
                }
            }
        ],
    });
    
    $('.certificates__items').slick({
        infinite: false,
        responsive: [
            {
                breakpoint: 2560,
                settings: 'unslick'
            },
            {
                breakpoint: 580,
                settings: {
                    arrows: false,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    variableWidth: true,
                }
            }
        ]
    });

    $('.favoriteExcursion__cards').slick({
        infinite: false,
        slidesToShow: 4,
    });

    $('.booking__cards-slider').slick({
        infinite: false,
        slidesToShow: 4,
    });

    $('.certificatesPage__sliderWrapper').slick({
        centerMode: true,
        slidesToShow: 3,
    });

    $('.accordion__title').on('click', function() {
        $(this).toggleClass('activeAccordionText').next().slideToggle();
        return false;
    });

});


