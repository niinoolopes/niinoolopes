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