const menuMobile = document.querySelector('#menu-mobile');
const popup = document.querySelector('#popup');
const closeButton = document.querySelector('#close-button');

menuMobile.addEventListener('click', ()=>{
    popup.style.display = 'block'
})

closeButton.addEventListener('click', ()=>{
    popup.style.display = 'none';
})

window.addEventListener('resize', ()=>{
    if (window.innerWidth > 900) {
        popup.style.display = 'none';
    }
});