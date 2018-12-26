/*
function initItemMenu() {
    const itemMenu = document.querySelectorAll('.menu a')
    const sectionBody = document.querySelectorAll('body > section');

    
    sectionBody.forEach((item)=>{ 
        if(!!item.getAttribute('id')){
            var id_item = item.getAttribute('id');
            var offsettop_item = item.offsetTop;

            console.log(window.pageYOffset , item.offsetTop)

        }
    })
 
 
}
initItemMenu();

window.addEventListener('scroll',initItemMenu)
*/
const menuMobile = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');

menuMobile.addEventListener('click', ActionClick);

function ActionClick() {
    
    menu.classList.add('ativo')
    outClick(menu, ['click','toushstart'], () => {
        menu.classList.remove('ativo')
    })
}
const btnFechar = document.querySelectorAll('.categoria-verMais');

btnFechar.forEach( (item,index)=> {
    item.addEventListener('click', ()=> {
        document.querySelectorAll('.categoria-card')[index].classList.toggle('ativo');
        
        if( item.innerText == "Saber mais"){
            var textoNovo = "Fechar";
        }else{
            var textoNovo = "Saber mais";
        }
        item.innerText = textoNovo;
        item.classList.toggle('ativo')
    })
})

function outClick(element, events, callback) {
    const html = document.documentElement;
    const data_outClick = 'data-outClick';
  
    if (!element.hasAttribute(data_outClick)) {
        events.forEach(item => {
            /*
                o esquera de usar setTimeout é para
                adicionar o evento html.addEventListener(item, htmlClick); 
                 não executar a função callback(); junto.
            */
            setTimeout(() => {
                html.addEventListener(item, htmlClick);
            })
        });
        element.setAttribute(data_outClick, '')
    }
    function htmlClick(event) { 
        var select = `header.topo ${event.target.tagName}`;
        var t = document.querySelector(select).hash ==  document.querySelector(select).hash;
        if (!element.contains(event.target) ||  t) {
            element.removeAttribute(data_outClick)
            html.removeEventListener('click', htmlClick);
            callback();
        }
    }
}
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
// apenas vai funcionar para telas maiores que celular
if (window.innerWidth > 576) {
    function initFixedHeader() {
        // pega altura da intro
        // const sectionIntro = document.querySelector(".intro").offsetHeight - 77;
        const windowHeight = window.innerHeight * 0.4
        // quando o topo passar da intro
        if (window.pageYOffset >= (windowHeight)) {
            //ativa header fixo
            document.querySelector('header.topo').classList.add('header_fixed');
        } else {
            //desativa header fixo
            document.querySelector('header.topo').classList.remove('header_fixed');
        }
    }
    window.addEventListener('scroll', initFixedHeader)
}

 
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

const listaAncora = document.querySelectorAll('.js-ancora');
if (listaAncora) {
    // const windowHeight = window.innerHeight * 0.6;
    const initFlagAncora = () => {
        listaAncora.forEach((element, index) => {
            var alturaMenuFixo;
            var arrayAncora = [];
            // var tela = window.innerWidth;
            var windowTop = window.pageYOffset;
            // if(tela > 768){
            //   alturaMenuFixo = 54;
            // }else if(tela <= 768){
            //   alturaMenuFixo = 46;
            // }else if(tela < 560){
            //   alturaMenuFixo = 46;
            // } 
            var itemTop = element.offsetTop;
            // flagAncora(element,itemTop)
            // flagAncora(element) 
            if (windowTop > itemTop) {
            }
        })
        function flagAncora(element, itemTop) {
            var itemTop = itemTop.offsetTop;
            if (itemTop < windowTop) {
                console.log(element, index)
            }
            // var topDoItem = listaDeItens[0].getBoundingClientRect().top;
        }
        // if(topdoDoItem < (window.innerHeight * 0.8) ){ 
        //     listaDeItens[0].classList.add('ativo');
        // }else{
        //     listaDeItens[0].classList.remove('ativo');
        // }
    };
    window.addEventListener('scroll', initFlagAncora);
    initFlagAncora()
}

/* SCROLL */
// Adiciona evento para cada item do menu
var itensMenu = document.querySelectorAll('.menu a');
itensMenu.forEach(item => {
  item.addEventListener('click', scrollToId);
})
// função callback
function scrollToId(e) {
  // anula evendo do href do click
  e.preventDefault();
  //identicica o valor do href
  var id = this.getAttribute('href'); 

  // brack point
  var alturaMenuFixo;
  // var tela = window.innerWidth;
  // (tela >= 766) ?  alturaMenuFixo = 42 : alturaMenuFixo = 38;

  var section = document.querySelector(id).offsetTop - 38;
  // se for intro volta para o 0, que é o topo
  if (id == "#intro") {
    section = 0;
  }
  window.scroll(
    {
      top: section,
      behavior: "smooth"
    }
  );
  document.querySelector('.menu').classList.remove('ativo')
}
/* FIM SCROLL */
/*
    lib: slider
*/
// seleciona item para ativar caso seleção exista
const carroselItems = document.querySelectorAll('.js-carrosselItem');
if (carroselItems.length) {
    function startingCarrosel() {
        var position = 0;
        const carroselContentWidth = document.querySelector('.js-carrosselContainer').offsetWidth;
        const carroselRail = document.querySelector('.js-carrosselRail');
        const btnPrev = document.querySelector('.js-carrosselControl.left');
        const btnNext = document.querySelector('.js-carrosselControl.right');

        if (window.innerWidth < 576) {
            carroselItems.forEach(item => {
                item.style.width = carroselContentWidth + 'px';
                item.style.padding = '0 ' + (btnNext.offsetWidth / 1) + 'px';
            })

            btnPrev.addEventListener('click', () => movingList(--position));
            btnNext.addEventListener('click', () => movingList(++position));

            const movingList = (number) => {
                var itemWidh = carroselContentWidth;
                const lenghtItems = carroselItems.length - 1;
                if (number > lenghtItems) {
                    number = 0;
                    position = 0;
                } else if (number < 0) {
                    number = (lenghtItems);
                    position = (lenghtItems);
                }
                carroselRail.style.marginLeft = '-' + number * itemWidh + 'px';
            }
        } else {
            document.querySelector('.js-carrosselContainer').style.width = 'auto';
            carroselRail.style.marginLeft = '0';
            carroselItems.forEach(item => {
                item.style.width = 'auto';
                item.style.padding = '0';
            })
        }
    }

    window.addEventListener('resize', startingCarrosel)
    window.addEventListener('load', startingCarrosel)
}
