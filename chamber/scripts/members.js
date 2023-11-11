const url = 'https://tomaseliasfontes.github.io/chamber/data/members.json';
const cards = document.querySelector('#cards');

async function getProphetData(url) {
    const response = await fetch(url);
    //check to see if the fetch was successful
    const data = await response.json();
    displayProphets(data.prophets); // note that we reference the prophets array of the JSON data object, not just the object
}

const displayProphets = (prophets) => {
    prophets.forEach((prophet) => {
        let card = document.createElement("section");
        let fullName = document.createElement("h2");
        let portrait  = document.createElement("img");
        let dateOfBirth = document.createElement("p");
        let placeOfBirth = document.createElement("p");

        fullName.textContent = `${prophet.name} ${prophet.lastname}`;

        portrait.setAttribute("src", prophet.imageurl);
        portrait.setAttribute("alt", `Picture of ${prophet.name} ${prophet.lastName}`);
        portrait.setAttribute("loading", "lazy");
        portrait.setAttribute("width", "340");
        portrait.setAttribute("height", "440");

        dateOfBirth.textContent = `Date of Birth: ${prophet.birthdate}`;
        placeOfBirth.textContent = `Plave of Birth: ${prophet.birthplace}`;

        card.appendChild(fullName);
        card.appendChild(portrait);

        card.appendChild(dateOfBirth);
        card.appendChild(placeOfBirth);
         
        cards.appendChild(card);
    });
}
  
getProphetData(url);
