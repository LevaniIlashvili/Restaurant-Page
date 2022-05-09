"use strict";
import Shawarma from './shawarmamenu.jpg';
import Hotdog from './hotdog.jpeg';
import Fries from './fries.jpg';
import Burger from './burger.jpeg';

function menuPage() {
    const main = document.querySelector('main');
    const menuBackground = document.createElement('div');
    menuBackground.classList.add('menu-background');
    main.appendChild(menuBackground);
    const menuCardFirst = document.createElement('div');
    menuCardFirst.classList.add('menu-card');
    menuBackground.appendChild(menuCardFirst);
    const shawarma = new Image();
    shawarma.src = Shawarma;
    shawarma.classList.add('shawarma');
    menuCardFirst.appendChild(shawarma);
    const shawarmaPrice = document.createElement('h5');
    shawarmaPrice.textContent = 'Shawarma $5';
    menuCardFirst.appendChild(shawarmaPrice);
    // second
    const menuCardSecond = document.createElement('div');
    menuCardSecond.classList.add('menu-card');
    menuBackground.appendChild(menuCardSecond);
    const hotdog = new Image();
    hotdog.src = Hotdog;
    hotdog.classList.add('hotdog');
    menuCardSecond.appendChild(hotdog);
    const hotdogPrice = document.createElement('h5');
    hotdogPrice.textContent = 'Hotdog $3';
    menuCardSecond.appendChild(hotdogPrice);
    // third
    const menuCardThird = document.createElement('div');
    menuCardThird.classList.add('menu-card');
    menuBackground.appendChild(menuCardThird);
    const fries = new Image();
    fries.src = Fries;
    fries.classList.add('fries');
    menuCardThird.appendChild(fries);
    const friesPrice = document.createElement('h5');
    friesPrice.textContent = 'Fries 3$';
    menuCardThird.appendChild(friesPrice);
    // fourth
    const menuCardFourth = document.createElement('div');
    menuCardFourth.classList.add('menu-card');
    menuBackground.appendChild(menuCardFourth);
    const burger = new Image();
    burger.src = Burger;
    burger.classList.add('burger');
    menuCardFourth.appendChild(burger);
    const burgerPrice = document.createElement('h5');
    burgerPrice.textContent = 'Burger $5';
    menuCardFourth.appendChild(burgerPrice);
}

export { menuPage } 