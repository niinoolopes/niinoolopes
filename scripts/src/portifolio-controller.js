
const controllers = document.querySelectorAll('[data-controller]');
const itens = document.querySelectorAll('[data-item]');

controllers.forEach(item => {
    item.addEventListener('click', () => {
        optionAddClass(item);
    })
}) 

const optionAddClass = function(item) { 
    // retrai todos
    controllers.forEach(items => {
        items.style.width = '40px';
        items.classList.remove('ativo')
    })
    // expande o clicado
    item.style.width = '100%';
    item.classList.add('ativo')
    // avalia qual sera exibido
    var condition = (item.dataset.controller === controllers[0].dataset.controller);
    (condition) ? showAllItems() : showItem(item.dataset.controller);
}

const showAllItems = () => {
    itens.forEach(item => item.style.display = 'block')
}

const showItem = (txt) => {
    // aplica none em todos que não contém
    itens.forEach(item => item.style.display = 'none')
    // aplica block em tudos que contém
    var tabsDisplaying = document.querySelectorAll(`[data-item="${txt}"]`);
    tabsDisplaying.forEach(item => item.style.display = 'block')
}