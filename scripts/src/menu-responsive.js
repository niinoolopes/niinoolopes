/*
    Menu Responsivo
*/

// ----------------------------------------------

const btnMobile = document.querySelector('.topo-btn'); 
btnMobile.addEventListener('click', () => {
    document.querySelector('.topo-menu').classList.toggle('ativo');
});