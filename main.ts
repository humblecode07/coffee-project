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

/* Coffee Cards */

// type Coffee = {
//    readonly id: number,
//    name: string,
//    roast: string,
//    description: string,
//    image: string
// }

// let coffeeList: Coffee[] = [];

// document.addEventListener('DOMContentLoaded', () => {
//    fetch('coffee.json')
//       .then(response => {
//          if (!response.ok) {
//             throw new Error('Network response was not ok ' + response.statusText);
//          }
//          return response.json();
//       })
//       .then((data: Coffee[]) => {
//          coffeeList = data;
//          coffeeList.forEach((coffee) => {
//             createCoffeeCard(coffee);
//          });
//       })
//       .catch(error => {
//          console.error('There was a problem with the fetch operation:', error);
//       });
// });


// function createCoffeeCard(coffeeData: Coffee): null {
//    const figure = document.createElement("figure");
//    figure.className = 'coffee-card';

//    const img = document.createElement("img");
//    img.className = 'card-coffee-image';
//    img.src = coffeeData.image;

//    const article = document.createElement("article");
//    article.className = 'coffee-details';

//    const div = document.createElement("div");
//    div.className = 'coffee-name-type';

//    const h3 = document.createElement("h3");
//    h3.className = 'coffee-name';
//    h3.textContent = coffeeData.name;

//    const span = document.createElement("span");
//    span.className = 'coffee-roast';
//    span.textContent = coffeeData.roast;

//    const p = document.createElement("p");
//    p.className = 'coffee-desc';
//    p.textContent = coffeeData.description;

//    // Append elements to their respective parents
//    div.appendChild(h3);
//    div.appendChild(span);
//    article.appendChild(div);
//    article.appendChild(p);
//    figure.appendChild(img);
//    figure.appendChild(article);

//    const coffeeListContainer = document.getElementById("coffee-list");
//    if (coffeeListContainer) {
//       coffeeListContainer.appendChild(figure);
//    }

//    return null;
// }



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


