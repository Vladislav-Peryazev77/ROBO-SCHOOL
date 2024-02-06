const openButtons = document.querySelectorAll(".coaches-item__info-button");
const closeButton = document.querySelector(".modal-closebutton");
const closeButtonIcon = document.querySelector(".modal-closebutton-icon");
const modal = document.querySelector(".modal");

const tabs = document.querySelectorAll(".modal-tab");
const tabContents = document.querySelectorAll(".modal-content");

const dialogElement = document.querySelector(".modal");

openButtons.forEach((openButton) => {
  openButton.addEventListener("click", (event) => {
    modal.showModal();
    document.body.classList.add("lock");
  });
});

closeButton.addEventListener("click", (event) => {
  modal.close();
  document.body.classList.remove("lock");
});

closeButtonIcon.addEventListener("click", (event) => {
  modal.close();
  document.body.classList.remove("lock");
});

tabs.forEach((tab) => {
  tab.addEventListener("click", (event) => {
    let tabId = tab.getAttribute("data-tab");
    let currentTabContent = document.querySelector(tabId);

    if (!tab.classList.contains("active")) {
      tabs.forEach((tab) => {
        tab.classList.remove("active");
      });
      tab.classList.add("active");

      tabContents.forEach((content) => {
        content.classList.remove("active");
      });
      currentTabContent.classList.add("active");
    }
  });
});

dialogElement.addEventListener("click", closeOnBackDropClick);

function closeOnBackDropClick({ currentTarget, target }) {
  const dialogElement = currentTarget;
  const isClickedOnBackDrop = target === dialogElement;
  if (isClickedOnBackDrop) {
    dialogElement.close();
    document.body.classList.remove("lock");
  }
}
