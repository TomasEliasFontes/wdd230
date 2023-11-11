const baseURL = "https://tomaseliasfontes.github.io/wdd230/";
const linksURL = "https://tomaseliasfontes.github.io/wdd230/data/links.json";
const linkList = document.querySelector("#linkList");

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    // console.log(data.lessons);
    displayLinks(data.lessons);    
  }

const displayLinks = (weeks) => {
    weeks.forEach( (week) => {
        let listItem = document.createElement("li");
        let innerLinks = week.links;

        listItem.textContent = `Lesson ${week.lesson}: `;

        innerLinks.forEach((link) => {
            let links = document.createElement("a");

            links.setAttribute("href", link.url);
            links.textContent = `${link.title}`;
            listItem.appendChild(links);

            if (link != innerLinks.at(-1)) {
                listItem.append(" | ");
            }
        })
        linkList.appendChild(listItem);
        
    });
}

getLinks();