import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);

// const galleryContainer = document.querySelector('.gallery');

// const makeGalleryItem = ({ preview, original, description }) => {
//     const galleryItem = document.createElement('div');
//     galleryItem.classList.add('gallery__item');
    
//     const galleryLink = document.createElement('a');
//     galleryLink.classList.add('gallery__link');
//     galleryLink.href.add(`${original}`);

//     const galleryImage = document.createElement('img');
//     galleryImage.classList.add('gallery__image');
//     galleryImage.src.add(`${preview}`);
//     galleryImage.dataset.


//     console.log(makeGalleryItem);
// }


const divRef = document.querySelector('.gallery');

//  create gallery markup

function createGalleryMarkup(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `
        <div class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img class="gallery__image"
                    src="${preview}" 
                    data-source="${original}" 
                    alt="${description}"></img>
    </a>
</div>`
    }).join('');
}

const addGallaryMarkup = createGalleryMarkup(galleryItems);

divRef.innerHTML = addGallaryMarkup;

// add onClick function

divRef.addEventListener('click', onClickImg);

function onClickImg(evt) {
    evt.preventDefault();
    if (evt.target.nodeName !== 'IMG') {
        return;
    } else {
        instance.show();
    }
    console.log(evt.target.nodeName);    
}

const instance = basicLightbox.create(`
    <img src="${evt.target.dataset.source}" width="800" height="600">
`)

divRef.addEventListener("keydown", (event) => {
    if (event.code === 'Escape') {
        instance.close()
    }    
});



// item.addEventListener('click', (event) => {
//     instance.show(); // this shows the lightbox
//   });

// instance.show()

// https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg

// ${evt.target.dataset.source}


