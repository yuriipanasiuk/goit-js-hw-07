import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryContainer = document.querySelector(".gallery");
const createGallery = createGalleryItems(galleryItems);

galleryContainer.addEventListener("click", onClick);
galleryContainer.insertAdjacentHTML("beforeend", createGallery);

function createGalleryItems(galleryItems) {
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

function onClick(evt) {
  evt.preventDefault();

  const currentGalleryCard = document.querySelector(".gallery__image");
  if (!currentGalleryCard) {
    return;
  }

  const galleryCard = evt.target;

  createImageModal(galleryCard.dataset.source);
}

function createImageModal(card) {
  openModal(card);

  document.addEventListener("keydown", closeCard);

  function closeCard(evt) {
    if (evt.code === "Escape") {
      const activeModal = document.querySelector(".basicLightbox");
      activeModal?.remove("basicLightbox--visible");
      document.removeEventListener("keydown", closeCard);
    }
  }
}

function openModal(card) {
  const imageModal = basicLightbox.create(`
    <div class="modal">
      <img
        class="gallery__image"
        src="${card}"
        data-source="${card}"
      />
    </div>
      `);
  imageModal.show();
}
