const openButtons = document.querySelectorAll(".coaches-item__info-button");
const closeButtons = document.querySelectorAll(".modal-closebutton");
const modal = document.querySelector(".modal");

const tabs = document.querySelectorAll(".modal-tab");
const tabContents = document.querySelectorAll(".modal-content");

openButtons.forEach((openButton) => {
  openButton.addEventListener("click", (event) => {
    modal.showModal();
    document.body.classList.add("lock");
  });
});

closeButtons.forEach((closeButton) => {
  closeButton.addEventListener("click", (event) => {
    modal.close();
    document.body.classList.remove("lock");
  });
});

tabs.forEach((tab, index) => {
  tab.addEventListener("click", (event) => {
    if (!tab.classList.contains("active")) {
      tabContents.forEach((content) => {
        content.classList.remove("active");
      });
      tabs.forEach((tab) => {
        tab.classList.remove("active");
      });
      tabContents[index].classList.add("active");
      tabs[index].classList.add("active");
    }
  });
});
