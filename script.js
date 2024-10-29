// Fetch data from the JSON file
fetch('data.json')
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    // Display the title and description
    document.getElementById('title').textContent = data.title;
    document.getElementById('description').textContent = data.description;

    // Populate the list with items
    const itemList = document.getElementById('item-list');
    data.items.forEach(item => {
      const listItem = document.createElement('li');
      listItem.textContent = `${item.name}: ${item.value}`;
      itemList.appendChild(listItem);
    });
  })
  .catch(error => {
    console.error('Fetch error:', error);
    document.getElementById('title').textContent = "Error loading data.";
  });
