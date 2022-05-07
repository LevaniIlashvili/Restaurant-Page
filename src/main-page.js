"use strict";
import Shawarma from './shawarma.jpeg';

function mainPage() {
    const content = document.querySelector('body');
    const header = document.createElement('h1');
    header.classList.add('header');
    header.textContent = 'Shawarma Hub';
    content.appendChild(header);
    const shawarma = new Image();
    shawarma.src = Shawarma;
    shawarma.setAttribute('src', './shawarma.jpeg');
    content.appendChild(shawarma);
};

export { mainPage };