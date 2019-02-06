let cards = document.querySelectorAll('.skill-card')

cards.forEach( item => {
    item.addEventListener('click', () => {
        item.classList.toggle('ativo')
    })
})