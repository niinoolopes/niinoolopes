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
const toggleClick = (index) => {
    skillClicks.forEach(element => element.classList.remove('ativo'));
    skillClicks[index].classList.add('ativo');
}




skillClicks.forEach((element, index) => {
    element.addEventListener('click', () => { 
        hide_skillTextos(index);
        toggleClick(index);
    })
})
hide_skillTextos(0);