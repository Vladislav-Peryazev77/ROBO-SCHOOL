const imageList = document.querySelector(".coaches-wrapper");
const sliderButtons = document.querySelectorAll(".slider-button");
const sliderScrollbar = document.querySelector(".slider-scrollbar");
const scrollbarThumb = document.querySelector(".scrollbar-thumb");
let maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;

// скрол по кнопкам
sliderButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const direction = button.id === "prev-slide" ? -1 : 1;
    const scrollAmount = imageList.clientWidth * direction;
    imageList.scrollBy({ left: scrollAmount, behavior: "smooth" });
  });
});

// апдейт индикатора скрола
imageList.addEventListener("scroll", () => {
  const scrollPosition = imageList.scrollLeft;
  const thumbPosition =
    (scrollPosition / maxScrollLeft) *
    (sliderScrollbar.clientWidth - scrollbarThumb.offsetWidth);
  scrollbarThumb.style.left = `${thumbPosition}px`;
});

// хендл на индикатор
scrollbarThumb.addEventListener("mousedown", (e) => {
  const startX = e.clientX; //clientX returns the horizontal mouse pointer coordinate
  const thumbPosition = scrollbarThumb.offsetLeft;
  const maxThumbPosition =
    sliderScrollbar.getBoundingClientRect().width - scrollbarThumb.offsetWidth;

  // обновление позиции индикатора при скроле, ограничение возможности выйти из доступной ширины,
  // скрол картинок при скроле индикатора
  const handleMouseMove = (e) => {
    const deltaX = e.clientX - startX;
    const newThumbPosition = thumbPosition + deltaX;

    const maxThumbPosition =
      sliderScrollbar.getBoundingClientRect().width -
      scrollbarThumb.offsetWidth;

    const boundedPosition = Math.max(
      0,
      Math.min(maxThumbPosition, newThumbPosition)
    );
    const scrollPosition = (boundedPosition / maxThumbPosition) * maxScrollLeft;

    scrollbarThumb.style.left = `${boundedPosition}px`;
    imageList.scrollLeft = scrollPosition;
  };
  // удаление прослушивателя при !hover
  const handleMouseUp = () => {
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
  };

  document.addEventListener("mousemove", handleMouseMove);
  document.addEventListener("mouseup", handleMouseUp);
});

// пересчитывание position при ресайзе
window.addEventListener("resize", () => {
  maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;
});
