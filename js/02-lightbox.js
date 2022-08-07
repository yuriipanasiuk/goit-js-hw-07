import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryListRef = document.querySelector(".gallery");
const createGallery = createGalleryList(galleryItems);

galleryListRef.addEventListener("click", onClick);
galleryListRef.insertAdjacentHTML("beforeend", createGallery);

function createGalleryList(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
  <a class="gallery__item" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}"/>
  </a>
    </li>`;
    })
    .join("");
}

function onClick(evt) {
  evt.preventDefault();
}

function createLiteBox() {
  let lightbox = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionPosition: "bottom",
    captionDelay: 250,
  });
  return lightbox;
}
createLiteBox();
