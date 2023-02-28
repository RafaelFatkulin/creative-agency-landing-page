const burger = document.querySelector('.header__burger');
const menu = document.querySelector('.header__menu');
const body = document.body;

let isDisabled = false;

const disableScroll = () => {
    let scrollPosition = window.scrollY;
    body.classList.add('disable-scroll');
    body.dataset.position = `${scrollPosition}`;
    body.style.top = -scrollPosition + 'px';
};
const enableScroll = () => {
    let scrollPosition = parseInt(body.dataset.position, 10);
    body.style.removeProperty('top')
    body.classList.remove('disable-scroll');
    window.scroll({top: scrollPosition, left: 0});
    body.removeAttribute('data-position');
};

burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    menu.classList.toggle('active');

    if (isDisabled) {
        console.log('enabled')
        enableScroll()

    } else {
        console.log('disabled')
        disableScroll()
    }

    isDisabled = !isDisabled
});
