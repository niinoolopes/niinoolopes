const menuMobile = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');

menuMobile.addEventListener('click', ActionClick);

function ActionClick() {
    
    menu.classList.add('ativo')
    outClick(menu, ['click','toushstart'], () => {
        menu.classList.remove('ativo')
    })
}