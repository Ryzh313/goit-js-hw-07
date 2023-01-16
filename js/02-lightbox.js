import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const divRef = document.querySelector('.gallery');

const addGallaryMarkup = createGalleryMarkup(galleryItems);

divRef.insertAdjacentHTML('beforeend', addGallaryMarkup);

function createGalleryMarkup(items) {
    return items.map(
        (item) => {
        return `
        <a class="gallery__item" href="${item.original}">
  <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
</a>`
    }).join('');
};

function onClickImg(evant) {
    evant.preventDefault();
    if (evant.target.nodeName !== 'IMG') {
        return;
    } 
    console.log(evant.target.nodeName);    
};

const lightbox = new SimpleLightbox('.gallery a', {
    captions: true,
    captionsData: 'alt',
    captionDelay: 250,
    captionPosition: 'bottom',
    captionType: 'text',
});

