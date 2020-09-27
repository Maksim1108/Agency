$('.header__burger-menu').on('click', function() {
    $(this).toggleClass('active');
    $('.burger__menu-line').toggleClass('active')
    $('.header__row-copy').toggleClass('active')
})