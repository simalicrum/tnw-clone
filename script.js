document.onscroll = fixNavbar;

navbar = document.querySelector("nav");
logo = document.querySelector("#logo");

function fixNavbar(e) {
  if (window.scrollY > 32) {
    navbar.classList.add("fixed-nav");
    logo.classList.add("fixed-logo");
  } else {
    navbar.classList.remove("fixed-nav");
    logo.classList.remove("fixed-logo");
  }
}
