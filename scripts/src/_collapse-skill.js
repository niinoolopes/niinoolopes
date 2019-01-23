/*
    Navgação Vertical
*/

// ----------------------------------------------

const skillClicks = document.querySelectorAll('[data-skill="item"]');
const skillTextos = document.querySelectorAll('[data-skill="texto"]');
const hide_skillTextos = (index) => {
    skillTextos.forEach(element => element.classList.remove('ativo'));
    skillTextos[index].classList.add('ativo');
}
skillClicks.forEach((element, index) => {
    element.addEventListener('click', () => {
        hide_skillTextos(index);
    })
})
hide_skillTextos(0);