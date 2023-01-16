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
};


// add onClick function

divRef.addEventListener('click', onClickImg);

function onClickImg(evant) {
    evant.preventDefault();
    if (evant.target.nodeName !== 'IMG') {
        return;
    };    

    const instance = basicLightbox.create(`
    <img src="${evant.target.dataset.source}">
`);
    instance.show();

    // close Item

    if (instance.visible()) {
        divRef.addEventListener("keydown", closeImage);        
    };
  
    function closeImage(evant) {        
        if (evant.code === 'Escape') {
            instance.close();
            divRef.removeEventListener("keydown", closeImage);
        }
    };
};  

// MarkupVersion 2


// const galleryContainer = document.querySelector('.gallery');

// // create item
// const makeGalleryItem = ({ preview, original, description }) => {
//     const galleryItem = document.createElement('div');
//     galleryItem.classList.add('gallery__item');
    
//     const galleryLink = document.createElement('a');
//     galleryLink.classList.add('gallery__link');
//     galleryLink.href = `${original}`;

//     const galleryImage = document.createElement('img');
//     galleryImage.classList.add('gallery__image');
//     galleryImage.src = `${preview}`;
//     galleryImage.dataset.source = `${original}`;
//     galleryImage.alt = `${description}`;

//     galleryItem.append(galleryLink);
//     galleryLink.append(galleryImage);

//     return galleryItem;
    
// };

// // create markup
// const elements = galleryItems.map(makeGalleryItem)
// console.log(elements);

// galleryContainer.append(...elements);








