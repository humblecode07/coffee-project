"use strict";
const searchCoffee = document.getElementById('search-coffee');
const addCoffee = document.getElementById('add-coffee');
// const coffeeType = document.getElementById('coffee-type') as HTMLInputElement;
searchCoffee.addEventListener('click', (e) => {
    searchCoffee.classList.add('selected');
    addCoffee.classList.remove('selected');
});
addCoffee.addEventListener('click', (e) => {
    searchCoffee.classList.remove('selected');
    addCoffee.classList.add('selected');
});
