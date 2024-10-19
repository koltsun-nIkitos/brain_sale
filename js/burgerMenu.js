export const burgerMenu = () =>{
    const burgerMenuButton = document.querySelector('.header__burger-button');
    const burgerMenu = document.querySelector('.header__nav-bottom');

    burgerMenuButton.addEventListener('click', (evt)=>{
        evt.preventDefault();
        burgerMenu.classList.toggle('header__nav-bottom--active');
        document.body.classList.toggle('body--fixed');
    });

    const burgerLinks = document.querySelectorAll('.header__nav-bottom .header__nav-link');
    burgerLinks.forEach((link) =>{
        link.addEventListener('click', (evt)=>{
            document.body.classList.remove('body--fixed');
            burgerMenu.classList.remove('header__nav-bottom--active');
        })
    })
}