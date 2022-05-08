"use strict";
import Shawarma from './shawarma.jpeg';

function mainPage() {
    const content = document.querySelector('#content');
    // header
    const header = document.createElement('header');
    content.appendChild(header);
    const home = document.createElement('button');
    home.classList.add('home');
    home.textContent = 'Home';
    header.appendChild(home);
    const menu = document.createElement('button');
    menu.classList.add('menu');
    menu.textContent = 'Menu';
    header.appendChild(menu);
    const contact = document.createElement('button');
    contact.classList.add('contact');
    contact.textContent = 'Contact';
    header.appendChild(contact);
    // main
    const main = document.createElement('main');
    content.appendChild(main);
    const welcome = document.createElement('h1');
    welcome.textContent = 'Welcome to';
    welcome.classList.add('welcome')
    main.appendChild(welcome);
    const shawarmaHub = document.createElement('h1');
    shawarmaHub.textContent = 'shawarma hub';
    shawarmaHub.classList.add('shawarma-hub');
    main.appendChild(shawarmaHub);
    const mainText = document.createElement('p');
    mainText.classList.add('main-text');
    mainText.textContent = 'This Shawarma is going to knock your socks off!';
    main.appendChild(mainText);
    // footer
    const footer = document.createElement('footer');
    footer.textContent = 'Copyright © 2022 Levan Ilashvili';
    content.appendChild(footer);
};

function homePage() {
    const main = document.querySelector('main');
    const welcome = document.createElement('h1');
    welcome.textContent = 'Welcome to';
    welcome.classList.add('welcome')
    main.appendChild(welcome);
    const shawarmaHub = document.createElement('h1');
    shawarmaHub.textContent = 'shawarma hub';
    shawarmaHub.classList.add('shawarma-hub');
    main.appendChild(shawarmaHub);
    const mainText = document.createElement('p');
    mainText.classList.add('main-text');
    mainText.textContent = 'This Shawarma is going to knock your socks off!';
    main.appendChild(mainText);    
}

export { mainPage, homePage };