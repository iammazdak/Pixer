// let document = $

let preloader = document.getElementById('preloader')

window.addEventListener('load', function () {
    preloader.classList.add('hidden')
})

let topbar = document.getElementById('topbar');
let closeBtn = document.getElementById('topbar-close-btn');
let header = document.getElementById('header')

closeBtn.addEventListener('click', function() {
    topbar.style.display = "none"
    header.classList.add('top-0')
    header.classList.remove('top-[55px]')
})

let hamburgerMenubtn = document.getElementById('hamburger-menu-btn');
let hamburgerMenu = document.getElementById('hamburger-menu');

let openIcon = document.getElementById('open-btn');
let closeIcon = document.getElementById('close-btn');

hamburgerMenubtn.addEventListener('click', function() {
    if (hamburgerMenu.style.display === 'none') {
        openIcon.style.display = 'none'
        closeIcon.style.display = 'block'
        hamburgerMenu.style.display = 'block'
        document.querySelector('body').style.overflow = 'hidden'
    } else {
        openIcon.style.display = 'block'
        closeIcon.style.display = 'none'
        hamburgerMenu.style.display = 'none'
        document.querySelector('body').style.overflow = 'auto'
    }
})

// console.log(hamburgerMenubtn)