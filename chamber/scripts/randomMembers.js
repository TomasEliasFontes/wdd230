const Url = 'https://tomaseliasfontes.github.io/wdd230/chamber/data/members.json';
const spotlights = document.querySelector('#spotlights')

async function getMembersData(url) {
    const response = await fetch(url);
    if (response.ok) {
        const data = await response.json();
        // Filter to have just the gold and silver members
        const memberFilter = data.members.filter(member => member.membership == "Gold" || member.membership == "Silver")
        const randomsMembers = getRandomMembers(memberFilter, 4);

        displayMembers(randomsMembers);
    }

    function getRandomMembers(members, count) {
      const randomMember = members.sort(() => 0.5 - Math.random());
      return randomMember.slice(0, count);
    }
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
        let button = document.createElement("div")
         
        card.setAttribute('class', 'spotlights-card');

        button.setAttribute('class', 'button-box')
        button.textContent = member.button;

        membership.setAttribute('class', 'membership');
        membership.textContent = member.membership;

        name.setAttribute('class', 'name');
        name.textContent = member.name;

        address.setAttribute('class', 'address');
        address.textContent = member.address;

        phone.setAttribute('class', 'phone');
        phone.setAttribute('href', `${member.phone}`);
        phone.textContent = member.phone;

        pageUrl.setAttribute('class', 'contact');
        pageUrl.setAttribute('href', `${member.website}`);
        pageUrl.textContent = member.website;

        logo.setAttribute('src', member.logo);
        logo.setAttribute('alt', `logo of ${member.name}`);
        logo.setAttribute('loading', 'lazy');

        card.appendChild(name);
        card.appendChild(logo);
        card.appendChild(address);
        card.appendChild(phone);
        button.appendChild(pageUrl);
        card.appendChild(button);
        
        spotlights.appendChild(card);
    });
}
  
getMembersData(Url);

