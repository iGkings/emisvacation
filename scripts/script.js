const toggle = document.querySelector(".mobile-toggle");
const menu = document.querySelector(".nav-menu");

toggle.addEventListener("click", () => {
  menu.classList.toggle("active");
});

window.addEventListener("scroll", () => {
  const header = document.querySelector(".header");

  header.classList.toggle("scrolled", window.scrollY > 50);
});
