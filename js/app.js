$(document).ready(function(){

    $('.nav__main_social-person').on('click', () => {
        $('body').addClass('noScroll');      
        $('.modal-loginAccount').addClass('active-js');
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

    $('.js-close__iconModal').on('click', () => {
        $('body').removeClass('noScroll');
        $('.modal-call').removeClass('active-js');
        $('.modal-registration').removeClass('active-js');
        $('.modal-footerCall').removeClass('active-js');
    });

    $('.header__slider__wrapper').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        variableWidth: true,
        centerPadding: '0px',
      });

    $('.whatSay__slider_wrapper').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
      });

});


