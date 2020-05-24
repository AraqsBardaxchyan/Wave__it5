$("ul#maintabs li").hover(function () {
    $('ul:eq(0)', this).stop(true, true).animate({
        height: 'show',
        opacity: 'show'
    }, 150);
}, function () {
    $('ul:eq(0)', this).animate({
        height: 'hide',
        opacity: 'hide'
    }, 150);
})

 const openModalButton = document.querySelector('#open'),
        modal = document.querySelector('#modal'),
        modalContainer = document.querySelector('#modalContainer');
    let toogle = false;
    document.addEventListener('click', function (event) {
        if (event.target === openModalButton) {
            modal.classList.add('d-flex');
            modal.classList.remove('d-none');
            toogle = true;
        } else if (toogle && event.target !== modalContainer && event.target.parentNode !== modalContainer) {
            modal.classList.add('d-none');
            modal.classList.remove('d-flex');
            toogle = false;
        }

    })

    