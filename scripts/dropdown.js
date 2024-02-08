const select = document.querySelector(".select");
const arrow = document.querySelector(".arrow");
const menu = document.querySelector(".menu");
const options = document.querySelectorAll(".menu li");
const selected = document.querySelector(".selected");

// const optionContents = document.querySelectorAll(".modal-content");

select.addEventListener("click", () => {
  arrow.classList.toggle("arrow-rotate");
  menu.classList.toggle("menu-open");
});

options.forEach((option) => {
  option.addEventListener("click", () => {
    selected.innerText = option.innerText;

    arrow.classList.remove("arrow-rotate");

    menu.classList.remove("menu-open");

    options.forEach((option) => {
      option.classList.remove("active-dropdown");
    });

    option.classList.add("active-dropdown");

    let optionId = option.getAttribute("data-tab");
    let currentOptionContent = document.querySelector(optionId);

    if (!option.classList.contains("active")) {
      options.forEach((option) => {
        option.classList.remove("active");
      });
      option.classList.add("active");

      tabContents.forEach((content) => {
        content.classList.remove("active");
      });
      currentOptionContent.classList.add("active");

      tabs.forEach((tab) => {
        let tabId = tab.getAttribute("data-tab");
        tab.classList.remove("active");
        if (tabId === optionId) {
          tab.classList.add("active");
        }
      });
    }
  });
});
