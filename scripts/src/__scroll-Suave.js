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