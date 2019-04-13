const header_btn = document.querySelector('.header__btn-wrapper')
const header_menu = document.querySelector('.header__menu')

header_btn.addEventListener('click', function(){
  header_menu.classList.toggle('menu--show')
})