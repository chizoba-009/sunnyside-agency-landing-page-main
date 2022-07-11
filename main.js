const hamburger = document
  .querySelector('.hamburger')
  .addEventListener('click', run)
const mobileMenu = document.querySelector('.mobile-menu')
function run() {
  mobileMenu.classList.toggle('hidden')
}
