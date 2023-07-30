const $ = (selector)=> document.querySelector(selector);
const $all = (selector)=> document.querySelectorAll(selector)


const menuEmail =$('.navbar-email');
const desktopMenu = $('.desktop-menu');


menuEmail.addEventListener('click', toggleDesktopMenu);



function toggleDesktopMenu(){
    desktopMenu.classList.toggle('inactive');
}


