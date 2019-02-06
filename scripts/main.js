// const url_skill = 'scripts/api-dados-skill.js';

// fetch('scripts/api-dados-skill.js')
//     .then(response => {
//         return response.json();
//     })
//     .then(dados => {
//         console.log(dados);
//         const root = document.querySelector('#skill-root');

//         dados.forEach((item)=>{
//             console.log(item);
//         })
//     })
//     .catch(err => { 
//         console.log(err);
//     });
 
/*
    Menu Responsivo
*/

// ----------------------------------------------

const btnMobile = document.querySelector('.topo-btn'); 
btnMobile.addEventListener('click', () => {
    document.querySelector('.topo-menu').classList.toggle('ativo');
});

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
const datas =  document.querySelectorAll('[data-anima]');

window.addEventListener('scroll',()=>{



    console.log(datas[0].offsetTop < window.pageYOffset);
    datas.forEach( (element) =>{ 
    // console.log(element.offsetTop);
            
    })

})


// console.log(datas);
/*
    lib: slider
*/

// ----------------------------------------------

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
/* 
  Scroll Suave
*/

// ----------------------------------------------

// Adiciona evento para cada item do menu
const itensMenu = document.querySelectorAll('.topo a');
itensMenu.forEach(item => {
  item.addEventListener('click', scrollToId);
})
// função callback
function scrollToId(e) {
  // anula evendo do href do click
  e.preventDefault();
  //identicica o valor do href
  var id = this.getAttribute('href'); 

  var section = document.querySelector(id).offsetTop - 48;
  // se for intro volta para o 0, que é o topo
  console.log(id);
  if (id == "#intro") {
    section = 0;
  }
  window.scroll(
    {
      top: section,
      behavior: "smooth"
    }
  ); 
  document.querySelector('.topo-menu').classList.remove('ativo');
}
/* FIM SCROLL */
let cards = document.querySelectorAll('.skill-card')

cards.forEach( item => {
    item.addEventListener('click', () => {
        item.classList.toggle('ativo')
    })
})