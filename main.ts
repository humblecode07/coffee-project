"use strict"

const searchCoffee = document.getElementById('search-coffee') as HTMLInputElement;
const addCoffee = document.getElementById('add-coffee') as HTMLInputElement;
// const coffeeType = document.getElementById('coffee-type') as HTMLInputElement;

searchCoffee.addEventListener('click', (e) => {
    searchCoffee.classList.add('selected');
    addCoffee.classList.remove('selected');
})

addCoffee.addEventListener('click', (e) => {
    searchCoffee.classList.remove('selected');
    addCoffee.classList.add('selected');
})

/* Doesn't work as I intended */
// coffeeType.addEventListener('mousedown' , () => {
//     coffeeType.style.backgroundImage = "url('../images/icons8-down-arrow-50.png')";
// })

// coffeeType.addEventListener('click' , () => {
//     coffeeType.style.backgroundImage = "url('../images/icons8-left-arrow-50.png')";
// })

// const coffeePic = document.getElementById('coffee-input') as  HTMLInputElement;

// coffeePic?.addEventListener('change', (e) => {
//     const input = e.target as HTMLInputElement;
//     const file = input.files ? input.files[0] : null;
//     const reader = new FileReader();

//     if (file) {
//         reader.addEventListener('load', () => {
//             const base64 = reader.result as string;

//             let image = new Image();
//             image.src = base64;
//             document.body.appendChild(image)
//         });

//         reader.readAsDataURL(file);
//     }
// });


