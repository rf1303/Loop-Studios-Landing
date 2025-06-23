document.addEventListener('DOMContentLoaded', function () {
    console.log('Inicio');

    const navDesktop = window.matchMedia('(min-width: 74.938em)');
    const loopNavs = document.querySelector('.loop__navs');
    const buttonOpen = document.querySelector('.loop__button--open');
    const buttonClose = document.querySelector('.loop__button--close');
    const navBg = document.querySelector('.loop__navs--bg'); 

    menuDesk(navDesktop) ;

    navDesktop.addEventListener('change', () => {
        menuDesk(navDesktop);
    });

    buttonOpen.addEventListener('click', () => {
        loopNavs.classList.remove('display__none'); 
        navBg.classList.remove('display__none'); 
    });

    buttonClose.addEventListener('click', () => {
        loopNavs.classList.add('display__none'); 
        navBg.classList.add('display__none'); 
    });


    function menuDesk(e) {
        console.log(e.matches);
        if (e.matches) {
            loopNavs.classList.remove('display__none'); 
        } else {
            loopNavs.classList.add('display__none'); 
        }
    }
})
