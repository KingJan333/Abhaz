$(document).ready(function(){

    $('.nav__main_social-person').on('click', () => {
        $('body').addClass('noScroll');

        // document.body.style.position = '';
        // document.body.style.top = `-${window.scrollY}px`;
        
        $('.modal-loginAccount').addClass('active-js');
        
        // const scrollY = document.body.style.top;
        // document.body.style.position = '';
        // document.body.style.top = '';
    
        // window.scrollTo(0, parseInt(scrollY || '0') * -1);
    });

    // const scrollY = document.body.style.top;
    // document.body.style.position = '';
    // document.body.style.top = '';

    // window.scrollTo(0, parseInt(scrollY || '0') * -1);

    $('.modal__checkbox_losePass').on('click', () => {
        $('.modal-recoverPass').addClass('active-js');
    });

    $('.js-btn__header').on('click', () => {
        $('body').addClass('noScroll');
        $('.modal-call').addClass('active-js');
    });

    $('.js-btn__footer').on('click', () => {
        // $('body').addClass('noScroll');
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
    });

    $('.header__slider__wrapper').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        centerMode: true,
      });

    $('.whatSay__slider_wrapper').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
      });

});


