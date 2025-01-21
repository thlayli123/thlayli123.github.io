fetch('https://thlayli123.github.io/1%29%20Jan%202024%20Tourney.html')
  .then(response => response.text())
  .then(data => {
    const table = document.getElementById('prizesTable'); // Replace 'myTable' with your table's ID

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
