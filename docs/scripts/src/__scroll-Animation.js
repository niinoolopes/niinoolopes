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
