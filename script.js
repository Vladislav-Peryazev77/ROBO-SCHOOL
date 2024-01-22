const menuOpenBtn = document.querySelector(".header-buttons__navbar");
const headerMenu = document.querySelector(".header-menu");
const menuCloseBtn = document.querySelector(".header-button__navbar-closer");

menuOpenBtn.addEventListener("click", (event) => {
  headerMenu.classList.remove("hidden");
  document.body.classList.add("lock");
});

menuCloseBtn.addEventListener("click", (event) => {
  headerMenu.classList.add("hidden");
  document.body.classList.remove("lock");
});
