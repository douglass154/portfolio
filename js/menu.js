
const openMenu = document.querySelector('.open-menu');
const nav = document.querySelector('.nav');
const links = document.querySelectorAll('.nav-list a')

openMenu.addEventListener('click', () => {
   nav.classList.toggle('active');
})

links.forEach(link => {
   link.addEventListener('click', () => {
      nav.classList.remove('active')
   })
})