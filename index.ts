const menuButton = document.querySelector('.menu-btn') as HTMLButtonElement
const nav = document.querySelector('nav')!
const closeButton = document.querySelector('.close-button') as HTMLButtonElement
const leftSlide = document.querySelectorAll('.left-arrow')!
const rightSlide = document.querySelectorAll('.right-arrow')!
const main = document.querySelector('.main') as HTMLDivElement
let slideNumber = 0


const toggleNav = () : void => {
    nav.toggleAttribute('aria-expanded')
}

const slideLeft = () : void => {
    slideNumber =  slideNumber > 0? slideNumber - 1 : 2
    main.style.transform = `translateX(-${slideNumber*100}%)`
}

const slideRight = () : void => {
    slideNumber =  slideNumber < 2? slideNumber + 1 : 0
    main.style.transform = `translateX(-${slideNumber*100}%)`
}

menuButton.addEventListener('click', toggleNav)
closeButton.addEventListener('click', toggleNav)

leftSlide.forEach(button => {
    button.addEventListener('click', slideLeft)
})

rightSlide.forEach(button => {
    button.addEventListener('click', slideRight)
})