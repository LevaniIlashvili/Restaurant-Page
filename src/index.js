import { mainPage, homePage } from "./main-page";
import './style.css';
import { menuPage } from "./menu-page";

mainPage();

const menu = document.querySelector('.menu');
const home = document.querySelector('.home');
const main = document.querySelector('main');
const contact = document.querySelector('.contact');

function removeAllChildNodes(parent) {
    while(parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

home.addEventListener('click', () => {
    removeAllChildNodes(main);
    homePage();
});

menu.addEventListener('click', () => {
    removeAllChildNodes(main);
    menuPage();
});

contact.addEventListener('click', () => {
    removeAllChildNodes(main);
});


