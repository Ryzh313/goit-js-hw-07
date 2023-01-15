import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const divRef = document.querySelector('.gallery');

const addGallaryMarkup = createGalleryMarkup(galleryItems);

divRef.insertAdjacentHTML('beforeend', addGallaryMarkup);


// markup function
function createGalleryMarkup(items) {
    return items.map(
        (item) => {
        return `
        <div class="gallery__item">
            <a class="gallery__link" href="${item.original}">
                <img class="gallery__image"
                    src="${item.preview}" 
                    data-source="${item.original}" 
                    alt="${item.description}">
                </img>
            </a>
        </div>`
    }).join('');
}