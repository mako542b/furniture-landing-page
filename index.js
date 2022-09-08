var menuButton = document.querySelector('.menu-btn');
var nav = document.querySelector('nav');
var closeButton = document.querySelector('.close-button');
var leftSlide = document.querySelectorAll('.left-arrow');
var rightSlide = document.querySelectorAll('.right-arrow');
var main = document.querySelector('.main');
var slideNumber = 0;
var toggleNav = function () {
    nav.toggleAttribute('aria-expanded');
};
var slideLeft = function () {
    slideNumber = slideNumber > 0 ? slideNumber - 1 : 2;
    main.style.transform = "translateX(-".concat(slideNumber * 100, "%)");
};
var slideRight = function () {
    slideNumber = slideNumber < 2 ? slideNumber + 1 : 0;
    main.style.transform = "translateX(-".concat(slideNumber * 100, "%)");
};
menuButton.addEventListener('click', toggleNav);
closeButton.addEventListener('click', toggleNav);
leftSlide.forEach(function (button) {
    button.addEventListener('click', slideLeft);
});
rightSlide.forEach(function (button) {
    button.addEventListener('click', slideRight);
});
