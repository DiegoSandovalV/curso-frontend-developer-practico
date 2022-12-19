
//Desktop Menu
const desktopMenu = document.querySelector('.desktop-menu')
const navbarEmail = document.querySelector('.navbar-email')

navbarEmail.addEventListener('click', () => {
  desktopMenu.classList.toggle('inactive')
})

//Mobile Menu
const mobileMenu = document.querySelector('.mobile-menu')
const imgMenu = document.querySelector('.menu')

imgMenu.addEventListener('click', () => {
  mobileMenu.classList.toggle('inactive');
  console.log('click')
})

