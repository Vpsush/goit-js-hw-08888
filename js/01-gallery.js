// Add imports above this line
import { galleryItems } from "./gallery-items";
// Change code below this line
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";
console.log(galleryItems);
// Change code below this line

const galleryContainer = document.querySelector(".gallery");
const galleryMarkUp = createGalleryItemsLibrary(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend", galleryMarkUp);

function createGalleryItemsLibrary(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </li>`;
    })
    .join("");
}

galleryContainer.addEventListener("click", handleImageClick);

function handleImageClick(event) {
  event.preventDefault();
  if (event.target.classList.contains("gallery__image")) {
    const originalImageSrc = event.target.dataset.source;
    const instance = basicLightbox.create(`
      <img width="1280" height="auto" src="${originalImageSrc}">
    `);
    instance.show();
  }
}
