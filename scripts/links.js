const baseURL = "https://tomaseliasfontes.github.io/wdd230/";
const linksURL = "https://tomaseliasfontes.github.io/wdd230/data/links.json";
const linkList = document.querySelector("#linkList");

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data.lessons);

  }

const displayLinks = (weeks) => {
    weeks.forEach( (week) => {
        let listItem = document.createElement("li");
        listItem.innerText = `${week.lesson}: `;
        listItem.setAttribute("class", "items");
        let innerLinks = week.links;
        innerLinks.forEach((link) => {
            console.log(link);
            const listTag = document.createElement("a");
            listTag.setAttribute("href", link.url);
            listTag.setAttribute("target", "_blank");
            listTag.innerText = `${link.title}`;
            listItem.appendChild(listTag);

            // index != innerLinks.length - 1
            if (link != innerLinks.at(-1)) {
                // Check if it's not the last link
                listItem.appendChild(document.createTextNode(" | ")); // Append the pipe separator
            }
        })
        linkList.appendChild(listItem);
        
    });
}

getLinks();