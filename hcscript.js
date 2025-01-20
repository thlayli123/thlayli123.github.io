fetch('your_api_endpoint')
  .then(response => response.json())
  .then(data => {
    const table = document.getElementById('myTable'); // Replace 'myTable' with your table's ID

    // Create table header if needed
    if (table.rows.length === 0) {
      const headerRow = table.insertRow();
      Object.keys(data[0]).forEach(key => {
        const headerCell = headerRow.insertCell();
        headerCell.textContent = key;
      });
    }

    // Populate table rows
    data.forEach(item => {
      const row = table.insertRow();
      Object.values(item).forEach(value => {
        const cell = row.insertCell();
        cell.textContent = value;
      });
    });
  })
  .catch(error => console.error('Error:', error));
