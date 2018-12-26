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
