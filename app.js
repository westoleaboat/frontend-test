// slider function

// Select all slides
const slides = document.querySelectorAll(".slide")

// Set cards next to each other, translateX by 100 times its index number.
slides.forEach((slide, indx) => {
  slide.style.transform = `translateX(${indx * 100}%)`
})

// Select next slide button
const nextSlide = document.querySelector(".btn-next")

// Slider navlinks breadcrum
let navbarActive = document.getElementsByClassName("navbar__list__item")

// Current slide counter
let curSlide = 0
// Find maximum number of slides
let maxSlide = slides.length - 1
// console.log(curSlide)

nextSlide.addEventListener("click", function () {
  // check if current slide is the last and reset current slide
  if (curSlide === maxSlide) {
    // remove active from last navlink
    navbarActive[maxSlide].classList.toggle("active")
    curSlide = 0
  } else {
    // toggle navlink active of first
    navbarActive[curSlide].classList.toggle("active")
    curSlide++
  }

  navbarActive[curSlide].classList.toggle("active")

  //   drag slide by -100% (to left)
  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`
  })
})
