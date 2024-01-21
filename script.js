const navBarButton = document.querySelector(".header-buttons__navbar");
const headerMenu = document.querySelector(".header-menu");
const navBarButtonCloser = document.querySelector(
  ".header-button__navbar-closer"
);

navBarButton.addEventListener("click", (e) => {
  headerMenu.classList.add("header-menu--active");
  document.body.classList.add("lock");
});

navBarButtonCloser.addEventListener("click", (e) => {
  headerMenu.classList.remove("header-menu--active");
  document.body.classList.remove("lock");
});
