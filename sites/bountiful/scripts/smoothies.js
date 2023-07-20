// DOMContentLoaded:
// executes after DOM content is loaded
// does not wait for all of the images and stylesheets

document.addEventListener("DOMContentLoaded", function () {
    /* ********************************************************************** */
    // populate dropdowns
    /* ********************************************************************** */
    function populateDropdown(dropdownId, jsonData) {
        const dropdown = document.getElementById(dropdownId);
  
        // Loop through the fruits and create options for each fruit
        jsonData.forEach(fruit => {
            const option = document.createElement('option');
            option.text = fruit.name;
            option.value = fruit.id; // Assuming you want to use the "id" as the value
            dropdown.appendChild(option);
        });
    }

    const filePath = 'data/fruit.json';
    
    // open data/fruit.json
    // populate fruitDropdown[1-3] with data from the fruit.json file
    fetch(filePath)
        .then(response => response.json())
        .then(data => {
            populateDropdown('fruitDropdown1', data);
            populateDropdown('fruitDropdown2', data);
            populateDropdown('fruitDropdown3', data);
        })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
    /* ********************************************************************** */
    // instead of looping through the entire json file over and over, can't I do
    // something simple like a xpath query? That would save a gob of time.
    /* ********************************************************************** */
});



  