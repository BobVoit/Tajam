(function () {
    const burger = document.querySelector('.burger');
    const burgerOpen = document.querySelector('.header__burger');
    const burgerClose = document.querySelector('.burger__close');
    burgerOpen.addEventListener('click', () => {
        document.body.classList.add('lock');
        document.body.classList.add('blackout');
        burger.classList.add('active');
    });

    burgerClose.addEventListener('click', () => {
        document.body.classList.remove('lock');
        document.body.classList.remove('blackout');
        burger.classList.remove('active');
    });

})();