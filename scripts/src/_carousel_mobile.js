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