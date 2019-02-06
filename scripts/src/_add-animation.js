const datas =  document.querySelectorAll('[data-anima]');

window.addEventListener('scroll',()=>{



    console.log(datas[0].offsetTop < window.pageYOffset);
    datas.forEach( (element) =>{ 
    // console.log(element.offsetTop);
            
    })

})


// console.log(datas);