// swiper js

var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  effect: "fade",
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

const iconham = document.querySelector('.ham')
const menuham = document.querySelector('.menu-ham')


iconham.addEventListener('click', (e) => {
  menuham.style.width='50vh'

})
document.addEventListener('click', (e) => {
  if(!iconham.contains(e.target) && !menuham.contains(e.target)){
    menuham.style.width='0vh'
  }
})