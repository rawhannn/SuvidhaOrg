

AOS.init();

let whyCode = document.getElementsByClassName("whycode");
let navbar = document.getElementById("nav");
let header = document.getElementById("head");

let navPos = navbar.getBoundingClientRect().top;
let footpos = footer.getBoundingClientRect().top;

window.addEventListener("scroll", e => {
  let scrollPos = window.scrollY;
  if (scrollPos > navPos) {
    navbar.classList.add('sticky-top');
    header.classList.add('navbarOffsetMargin');
  }else {
    navbar.classList.remove('sticky-top');
    header.classList.remove('navbarOffsetMargin');
  }
});

