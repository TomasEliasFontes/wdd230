const baseURL = "https://tomaseliasfontes.github.io/wdd230/final-project";
const dataURL = "https://tomaseliasfontes.github.io/wdd230/final-project/data/listProducts.json";

async function getPrices() {
    const response = await fetch(dataURL);
    if (!response.ok) {
      throw new Error(`Error fetching data: ${response.statusText}`);
    }

    const data = await response.json();
    if (data.rentals && Array.isArray(data.rentals)) {
      displayPrices(data.rentals);
    } 
    else {
      throw new Error("Invalid data format: 'rentals' array not found.");
    }
}

function displayPrices(rentals) {
  // Display the rental prices in a table
  let table = document.createElement('table');
  table.classList.add('pricing-table');

  let thead = document.createElement('thead');
  let tbody = document.createElement('tbody');

  // Create header
  let headerRow = document.createElement('tr');
  headerRow.innerHTML = `
    <td colspan="2"></td>
    <th colspan="2">Resevartion</th>
    <th colspan="2">Walk-in</th>
  `;

  let subRow = document.createElement('tr');
  subRow.innerHTML = `
    <th>Rental Type</th>
    <th>Max. Persons</th>
    <th>Half Day <br>(3 hrs)</th>
    <th>Full Day</th>
    <th>Half Day <br>(3 hrs)</th>
    <th>Full Day</th>
  `;
  thead.appendChild(headerRow);
  thead.appendChild(subRow);
  table.appendChild(thead);

  // Create body
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

  // Append the table
  document.querySelector('#rental-table').appendChild(table);
}

getPrices();