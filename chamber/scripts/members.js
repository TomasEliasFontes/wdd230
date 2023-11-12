const url = 'https://tomaseliasfontes.github.io/wdd230/chamber/data/members.json';
const cards = document.querySelector('.grid');
const grid = document.querySelector("#grid");
const list = document.querySelector("#list");

async function getProphetData(url) {
    const response = await fetch(url);
    //check to see if the fetch was successful
    const data = await response.json();
    displayMembers(data.members); // note that we reference the prophets array of the JSON data object, not just the object
}

const displayMembers = (members) => {
    members.forEach((member) => {
        let card = document.createElement("section");
        let name = document.createElement("h2");
        let address  = document.createElement("p");
        let phone = document.createElement("a");
        let pageUrl = document.createElement("a");
        let membership = document.createElement("p");
        let logo = document.createElement("img");

        card.setAttribute('class', 'member-card');

        name.setAttribute('class', 'name');
        name.textContent = member.name;

        address.setAttribute('class', 'address');
        address.textContent = member.address;

        phone.setAttribute('class', 'phone');
        phone.setAttribute('href', `${member.phone}`);
        phone.textContent = member.phone;

        pageUrl.setAttribute('class', 'url');
        pageUrl.textContent = member.url;
        pageUrl.setAttribute('href', `${member.url}`);

        logo.setAttribute('src', member.logo);
        logo.setAttribute('alt', `${member.name}`);
        logo.setAttribute('loading', 'lazy');

        card.appendChild(name);
        card.appendChild(logo);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(pageUrl);
         
        cards.appendChild(card);
    });
}
  
getProphetData(url);

grid.addEventListener("click", () => {
    cards.classList.add("grid");
    cards.classList.remove("list");
})

list.addEventListener("click", () => {
    cards.classList.add("list");
    cards.classList.remove("grid");
})