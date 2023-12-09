const url = "https://tomaseliasfontes.github.io/wdd230/final-project/data/listProducts.json";
const cards = document.querySelector('#models-rental');

async function getModelData() {
    const response = await fetch(url);
    
    //check to see if the fetch was successful
    const data = await response.json();
    displayCard(data.rentals);
    console.log(data);

}

const displayCard = (rentals) => {
    rentals.forEach((model) => {
        // Create elements to add to the div.cards element
        let card = document.createElement('section');
        let type = document.createElement('h3');
        let modelImage = document.createElement('img');

        // Build the h2 content out to show the model type
        type.setAttribute('class', 'model-product')
        type.innerHTML = model.type;

        // Build the image portrait by setting all the relevant attributes
        modelImage.setAttribute('src', model.imageUrl);
        modelImage.setAttribute('alt', `image of ${model.type}`);
        modelImage.setAttribute('loading', 'lazy');
        modelImage.setAttribute('width', '100%');
        modelImage.setAttribute('height', '100%');

        // Append the section(card) with the created elements
        card.appendChild(type);
        card.appendChild(modelImage);
        console.log(cards); // Agrega esta línea
        
        cards.appendChild(card);
    });
}

getModelData();