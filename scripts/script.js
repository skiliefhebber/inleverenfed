// JavaScript Document
console.log("hi");

const buttonOpen = document.querySelector("nav button");
const buttonDicht = document.querySelector(".navigatie2 button");
const nav1 = document.querySelector(".navigatie1");
const nav2 = document.querySelector(".navigatie2");

buttonOpen.addEventListener('click', ( ) => {
    nav1.classList.add('menudicht');
    nav2.classList.add('menuopen');
})

console.log('Hoi');

buttonDicht.addEventListener('click', ( ) => {
    nav2.classList.remove('menuopen');
    nav1.classList.remove('menudicht');
    
})

console.log('test');

