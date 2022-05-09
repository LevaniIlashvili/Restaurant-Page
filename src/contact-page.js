"use strict";

function contactPage() {
    const main = document.querySelector('main');
    const background = document.createElement('div');
    background.classList.add('contact-background');
    main.appendChild(background);
    // location
    const location = document.createElement('h3');
    location.textContent = 'Location';
    background.appendChild(location);
    const locationDetails = document.createElement('p');
    locationDetails.textContent = 'Fake street N23';
    background.appendChild(locationDetails);
    // hours
    const hours = document.createElement('h3');
    hours.textContent = 'Hours';
    background.appendChild(hours);
    const hoursDetails = document.createElement('p');
    hoursDetails.textContent = `Mon-Sun:  8am-12pm`;
    background.appendChild(hoursDetails);
    // contact 
    const contact = document.createElement('h3');
    contact.textContent = 'Contact Us';
    background.appendChild(contact);
    const contactNumber = document.createElement('p');
    contactNumber.textContent = 'p: (111) 222-3333';
    background.appendChild(contactNumber);
    const contactEmail = document.createElement('p');
    contactEmail.textContent = 'e: shawarmahub@gmail.com';
    background.appendChild(contactEmail);
}

export{ contactPage }