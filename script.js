const menuToggle = document.querySelector(".menu");
const nav = document.querySelector(".nav");
const overlay = document.querySelector(".overlay");


window.addEventListener('resize', () => {
  const width = this.innerWidth;
  if(width > 720) {
    overlay.style.display = "none"
  }
})
window.addEventListener('scroll', () => {
  const winHeight = window.pageYOffset;
  const header = document.querySelector('.header')
  winHeight > 10 ? header.classList.add('active') : header.classList.remove('active')
})
menuToggle.addEventListener("click", () => {
  if (nav.classList.contains("active")) {
    nav.classList.remove("active");
    overlay.style.display = "none";
  } else {
    nav.classList.add("active");
    overlay.style.display = "block";
  }
});


const first = document.querySelector('.first');
const second = document.querySelector('.second');


window.addEventListener('scroll', () => {
  // const winHeight = window.innerHeight;
  // const firstAnim = first.getBoundingClientRect().top
  // const secondAnim = first.getBoundingClientRect().top
  // console.log(winHeight - firstAnim)

  // firstAnim < winHeight ? first.classList.add('animate1') : first.classList.remove('animate1');
  // secondAnim < winHeight ? second.classList.add('animate1') : second.classList.remove('animate1');
  const winHeight = window.pageYOffset;
  console.log(winHeight)
  winHeight >= 200 ? first.classList.add('animate1') : first.classList.remove('animate1')
  winHeight >= 400 ? second.classList.add('animate1') : second.classList.remove('animate1')
})

