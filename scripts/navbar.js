const menuOpenBtn = document.querySelector(".header-buttons__navbar");
const headerMenu = document.querySelector(".header-menu");
const menuCloseBtn = document.querySelector(".header-button__navbar-close");
const menuLinks = document.querySelectorAll(".header-menu__item");

menuOpenBtn.addEventListener("click", () => {
  headerMenu.classList.remove("hidden");
  document.body.classList.add("lock");
});

menuCloseBtn.addEventListener("click", () => {
  headerMenu.classList.add("hidden");
  document.body.classList.remove("lock");
});

menuLinks.forEach((item) => {
  item.addEventListener("click", () => {
    headerMenu.classList.add("hidden");
    document.body.classList.remove("lock");
  });
});
