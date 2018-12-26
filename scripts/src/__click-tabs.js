const tabItens = document.querySelectorAll('[data-tab]');
const tabBtn = document.querySelectorAll('.tab-item');

tabBtn.forEach(item => {
    item.addEventListener('click', item => cliqueTab(item))
})

const cliqueTab = (event) => {
    tabBtn.forEach( e => e.classList.remove('ativo')) 
    event.target.classList.add('ativo')

    var txt = event.target.innerText.toLowerCase()
    var condition = (txt === tabBtn[0].innerText.toLowerCase());
    (condition) ? showAllItems() : showItem(txt);
}

const showAllItems = () => {
    tabItens.forEach(item => item.style.display = 'block')
}

const showItem = (txt) => {
    var tabsDisplaying = document.querySelectorAll(`[data-tab="${txt}"]`);
    tabItens.forEach(item => item.style.display = 'none')
    tabsDisplaying.forEach(item => item.style.display = 'block')
}