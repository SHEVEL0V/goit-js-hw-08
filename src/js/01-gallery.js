import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryEl = document.querySelector('.gallery');

function addItemGallery() {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<a class="gallery__item" href=${original}>
                <img class="gallery__image"     
                src=${preview} 
                alt=${description} />
                </a>`;
    })
    .join('');
}

galleryEl.insertAdjacentHTML('beforeend', addItemGallery(galleryItems));

new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});
