import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');

// create item
const makeGalleryItem = ({ preview, original, description }) => {
    const galleryItem = document.createElement('div');
    galleryItem.classList.add('gallery__item');
    
    const galleryLink = document.createElement('a');
    galleryLink.classList.add('gallery__link');
    galleryLink.href = `${original}`;

    const galleryImage = document.createElement('img');
    galleryImage.classList.add('gallery__image');
    galleryImage.src = `${preview}`;
    galleryImage.dataset.source = `${original}`;
    galleryImage.alt = `${description}`;

    galleryItem.append(galleryLink);
    galleryLink.append(galleryImage);

    return galleryItem;
    
};

// create markup
const elements = galleryItems.map(makeGalleryItem)
console.log(elements);

galleryContainer.append(...elements);

// add onClick function

galleryContainer.addEventListener('click', onClickImg);

function onClickImg(evant) {
    evant.preventDefault();
    if (evant.target.nodeName !== 'IMG') {
        return;
    }
    console.log(evant.target.nodeName);    
};

const instance = basicLightbox.create(`
    <img src="${evant.target.dataset.source}">
`);

// ${evant.target.dataset.source.value} problem

galleryContainer.addEventListener("click", (evant) => {
    if (evant.target.nodeName === 'IMG') {
       instance.show();
    }    
});

galleryContainer.addEventListener("keydown", (evant) => {
    if (evant.code === 'Escape') {
        instance.close();
    }    
});






