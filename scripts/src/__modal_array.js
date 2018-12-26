 
const portifolioList = [
    {
        'src': 'assets/images/thumb-site.png',
        'titulo': "OnePage",
        'atributos': ['html', 'css']
    },
    {
        'src': 'assets/images/thumb-site.png',
        'titulo': "blog",
        'atributos': ['html', 'css', 'php']
    }
]



const modalClick = document.querySelectorAll('.portifolio-item')

modalClick.forEach((item, index) => {
    item.addEventListener('click', () => {
        openModal(index)
    })
})

const openModal = (index) => {
    var src, titulo, atributos, ul, li;

    src = portifolioList[index].src;
    titulo = portifolioList[index].titulo;
    atributos = portifolioList[index].atributos;
    ul = document.querySelector('.modal-content ul');

    document.querySelector('.modal-content img').setAttribute('src', src);
    document.querySelector('.modal-content h2').innerText = titulo;

    atributos.forEach((item) => {
        li = document.createElement('li');
        li.innerText = item;
        ul.appendChild(li)
    }) 
    document.querySelector('.modal-container').style.display = 'flex' 
}

var containerFechaModal = document.querySelectorAll('.modal-container');

containerFechaModal.forEach((item) => {
    item.addEventListener('click', (e) => {
        if (e.target.className == 'modal-btnClose' || e.target.className == 'modal-container') {
            document.querySelector('.modal-container').style.display = 'none'

            //limpando elementos do modal
            var ul = document.querySelector('.modal-container ul');
            var li = document.querySelectorAll('.modal-container ul li');
            li.forEach((item) => {
                item.parentNode.removeChild(ul.firstChild) 
            })
        }
    })
});
