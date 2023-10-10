const allGalleryItems = Array.from(document.querySelectorAll(".gallery-item"));
const gallery = document.querySelector(".gallery");

allGalleryItems[0].classList.add("active");

allGalleryItems.forEach((item) => {
  item.addEventListener("click", () => {
    allGalleryItems.forEach((otherItem) => {
      otherItem.classList.remove("active");
    });
    item.classList.add("active");
  });
});
