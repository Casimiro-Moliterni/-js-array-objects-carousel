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

let activeItem = 0 ;

const imagesContainer = document.querySelector('.img-container');
const imgRightContainer = document.querySelector('.img-right-container');


images.forEach((card) => {

    const newCardimg = `
    <div class="image active">
                <img src="img/${card.image}" alt="">
                <div class="text-img">
                   <h1 >${card.title}</h1>
                   <p >${card.text}</p>
    `;
    
    const newCardRightimg = `
    <div class="card ">
    <img src="img/${card.image}" alt="">
    </div>
    `;

    imagesContainer.innerHTML += newCardimg;
    imgRightContainer.innerHTML += newCardRightimg;
});