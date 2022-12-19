const desktopMenu = document.querySelector('.desktop-menu')
const navbarEmail = document.querySelector('.navbar-email')

navbarEmail.addEventListener('click', () => {
  desktopMenu.classList.toggle('inactive')
})