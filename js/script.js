// Milestone 0:
// Come nel primo carosello realizzato, focalizziamoci prima sulla creazione del markup statico:
//  costruiamo il container e inseriamo l'immagine grande in modo da poter stilare lo slider.

// Milestone 1:
// Ora rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali per popolare dinamicamente il carosello.
// Al click dell'utente sulle frecce verso alto o basso, 
// l'immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo.

// Milestone 2:
// Aggiungere il **ciclo infinito** del carosello.
//  Ovvero se la miniatura attiva è la prima e l'utente clicca la freccia verso l'alto,
//   la miniatura che deve attivarsi sarà l'ultima e viceversa per l'ultima miniatura
//    se l'utente clicca la freccia verso il basso.

const images = [
    {
        image: '01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: '02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: '03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: '04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: '05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

function selectImg(indexSelected){
    let result;
    images.forEach((card,index)=>{
     if(index === indexSelected){
        result = index;
     }
    });
    return result;
};

 let activeItem = selectImg(0) ;
 console.log(activeItem)
const imagesContainer = document.querySelector('.img-container');
const imgRightContainer = document.querySelector('.img-right-container');


images.forEach((card) => {

    const newCardimg = `
    <div class="image">
                <img src="img/${card.image}" alt="">
                <div class="text-img">
                   <h1 >${card.title}</h1>
                   <p >${card.text}</p>
    `;
    imagesContainer.innerHTML += newCardimg;
    const newCardRightimg = `
    <div class="card ">
    <img src="img/${card.image}" alt="">
    </div>
    `;

    imgRightContainer.innerHTML += newCardRightimg;
});

const allImg = document.querySelectorAll('.image');
allImg[activeItem].classList.add('active');

const allCard = document.querySelectorAll('.card');
allCard[activeItem].classList.add('active');


const bottomArrow = document.querySelector('.arrow.bottom');
bottomArrow.addEventListener('click', function() {
    // Rimouviamo active dall'elemento corrente
    // incrementiamo activeItem di 1
    // Aggiungiamo active al nuovo activeItem
    document.querySelector('.image.active').classList.remove('active');
    document.querySelector('.card.active').classList.remove('active');

    if(activeItem < allImg.length - 1) {
        activeItem++;
    } else {
        activeItem = 0;
    }

    allImg[activeItem].classList.add('active');
    allCard[activeItem].classList.add('active');
});

const topArrow = document.querySelector('.arrow.top');
topArrow.addEventListener('click', function() {
    // Rimouviamo active dall'elemento corrente
    // decrementiamo activeItem di 1
    // Aggiungiamo active al nuovo activeItem
    document.querySelector('.image.active').classList.remove('active');
    document.querySelector('.card.active').classList.remove('active');

    if(activeItem > 0) {
        activeItem--;
    } else {
        activeItem = allImg.length - 1;
    }

    allImg[activeItem].classList.add('active');
    allCard[activeItem].classList.add('active');
});