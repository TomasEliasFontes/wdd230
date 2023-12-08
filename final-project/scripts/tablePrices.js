const baseURL = "https://tomaseliasfontes.github.io/wdd230/final-project";
const dataURL = "https://tomaseliasfontes.github.io/wdd230/final-project/data/listProducts.json";

async function getPrices() {
  try {
    const response = await fetch(dataURL);
    if (!response.ok) {
      throw new Error(`Error fetching data: ${response.statusText}`);
    }
    const data = await response.json();

    if (data.rentals && Array.isArray(data.rentals)) {
      displayPrices(data.rentals);
    } else {
      throw new Error("Invalid data format: 'rentals' array not found.");
    }
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

function displayPrices(rentals) {
  // Display the rental prices in a table in the 'pricing-table-container' div
  let table = document.createElement('table');
  table.classList.add('pricing-table');

  let thead = document.createElement('thead');
  let tbody = document.createElement('tbody');

  // Create table header
  let headerRow = document.createElement('tr');
  headerRow.innerHTML = `
    <th colspan="2"></th>
    <th colspan="2">Resevartion</th>
    <th colspan="2">Walk-in</th>
  `;

  let subRow = document.createElement('tr');
  subRow.innerHTML = `
    <th>Rental Type</th>
    <th>Max. Persons</th>
    <th>Half Day (3 hrs)</th>
    <th>Full Day</th>
    <th>Half Day (3 hrs)</th>
    <th>Full Day</th>
  `;
  thead.appendChild(headerRow);
  thead.appendChild(subRow);
  table.appendChild(thead);

  // Create table body
  rentals.forEach((rental) => {
    let row = document.createElement('tr');
    row.innerHTML = `
      <td>${rental.type}</td>
      <td>${rental.maxPersons}</td>
      <td>$${rental.reservation.halfDay}</td>
      <td>$${rental.reservation.fullDay}</td>
      <td>$${rental.walkIn.halfDay}</td>
      <td>$${rental.walkIn.fullDay}</td>
    `;
    tbody.appendChild(row);
  });
  table.appendChild(tbody);

  // Append the table to the 'pricing-table-container' div
  document.getElementById('pricing-table-container').appendChild(table);
}

getPrices(dataURL);