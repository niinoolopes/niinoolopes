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
