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