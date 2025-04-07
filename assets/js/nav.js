const navcenter = document.getElementById("nav-center")
const navcentermobile = document.getElementById("nav-center-mobile")
const burger = document.getElementById('burger');
const mobileMenu = document.getElementById('mobilenav');
const closeButton = document.getElementById('close-menu')
const options = document.querySelectorAll('#menu-option-mobile')

console.log(options)
burger.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    closeButton.classList.toggle('active');
});

closeButton.addEventListener('click', ()=> {
    mobileMenu.classList.remove('active');
    closeButton.classList.remove('active')
})

options.forEach((option)=> {
    option.addEventListener('click', ()=>{
        mobileMenu.classList.remove('active');
        closeButton.classList.remove('active')
    })
})

