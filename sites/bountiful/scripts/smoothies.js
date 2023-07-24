// #01. create a variable outside the functions to holdl fruitData.
let fruitData;

// -----------------------------------------------------------------------------
// #02. Create an async function so that the functions do not have to be 
//      executed in a specific order ot be right or even complete (race).
// -----------------------------------------------------------------------------
async function populateDropdowns() {
    try {
        const response = await fetch('data/fruit.json');
        const data = await response.json();
// -----------------------------------------------------------------------------
// #03. Populate all three drop downs from one fetch. I was doing this by three
//      calls. Sister Campbell helped me rethink this one.
// -----------------------------------------------------------------------------
        const dropdowns = document.querySelectorAll('select[id^="fruitDropdown"]');
        data.forEach(fruit => {
            dropdowns.forEach(dropdown => {
                const option = document.createElement('option');
                option.text = fruit.name;
                option.value = fruit.id;
                dropdown.add(option);
            });
        });

        fruitData = data;
        return fruitData;
    } catch (error) {
        console.error('Error fetching fruit data:', error);
    }
}

populateDropdowns().then(data => {
    console.log('Fruit data loaded:', data);
});

// -----------------------------------------------------------------------------
// #04. I thought of this one at the last minute... what happens if a user does
//      not fill in all of the three field combos and clicks the button. I don't
//      want an invalid calculation. So, I'll ensure that they have to fill out
//      all three.
// -----------------------------------------------------------------------------
function checkInputsValidity() {
    const dropdowns = document.querySelectorAll('select[id^="fruitDropdown"]');
    const quantities = document.querySelectorAll('input[id^="qty"]');
    let isValid = true;

    // ok, check both quantites and fruit values, the qty must be > 0 and the
    // value must not be empty... this is a very basic concept. I think it could
    // be much more complicated, but I don't have a lot of time left to get 
    // this assignment done.
    for (let i = 0; i < dropdowns.length; i++) {
        const quantity = parseFloat(quantities[i].value);

        // any condition: qty is not a number, qty is less than zero, or value
        // of dropdowns is empty.
        if (isNaN(quantity) || quantity <= 0 || dropdowns[i].value === "") {
            isValid = false;
            console.log('The user must input a quantity > 0 and select a fruit in each form field combo to proceed.');
            break;
        }
    }

    // The button is set to disabled unless the form is completely filled out.
    const calculateButton = document.getElementById("calculateButton");
    calculateButton.disabled = !isValid;
}

// Attach the input event listeners to validate the inputs
const dropdowns = document.querySelectorAll('select[id^="fruitDropdown"]');
const quantities = document.querySelectorAll('input[id^="qty"]');
dropdowns.forEach(dropdown => dropdown.addEventListener("input", checkInputsValidity));
quantities.forEach(quantityInput => quantityInput.addEventListener("input", checkInputsValidity));

populateDropdowns().then(data => {
    console.log('Fruit data loaded:', data);
    checkInputsValidity(); // To disable the Calculate button initially
});

// -----------------------------------------------------------------------------
// #05. Calculate nutritional values from going back to the fruit.json file after
//      the user clicks the submit button. 
// -----------------------------------------------------------------------------
function calculateNutrition() {
    const selectedItems = [];

    // fetch all of the ids and qty
    const dropdowns = document.querySelectorAll('select[id^="fruitDropdown"]');
    const quantities = document.querySelectorAll('input[id^="qty"]');

    let totalCarbohydrates = 0;
    let totalProtein = 0;
    let totalFat = 0;
    let totalCalories = 0;
    let totalSugar = 0;

    // loop through dropdowns length (in this case 3)
    for (let i = 0; i < dropdowns.length; i++) {
        const selectedOption = dropdowns[i].options[dropdowns[i].selectedIndex];
        const quantity = parseFloat(quantities[i].value, 10);

        if (selectedOption.value !== "") {
            const selectedFruit = fruitData.find(fruit => fruit.id === parseInt(selectedOption.value, 10));

            // (push): add items to the selectedFruit array
            selectedItems.push({ name: selectedFruit.name, quantity });

            totalCarbohydrates += selectedFruit.nutritions.carbohydrates * quantity;
            totalProtein += selectedFruit.nutritions.protein * quantity;
            totalFat += selectedFruit.nutritions.fat * quantity;
            totalCalories += selectedFruit.nutritions.calories * quantity;
            totalSugar += selectedFruit.nutritions.sugar * quantity;
        }
    }

    // I've used this little trick several times this semester. It also looks a
    // lot like the Python/Flask and MS/ASP pages I have made at work. I'm hoping
    // this isn't too clumsy.
    const selectedItemsList = selectedItems.map(item => `<li>${item.quantity} x ${item.name}</li>`).join("");
    const reportDiv = document.getElementById("report");
    reportDiv.innerHTML = `
        <div class="selected-items">
            <h2 class="centered-h2">Selected Items:</h2>
            <ul class="ingredient-list">
                ${selectedItemsList}
            </ul>
        </div>
        <div class="total-nutrition">
            <h2>Total Nutrition:</h2>
            <p>Total Carbohydrates: ${totalCarbohydrates.toFixed(2)}g</p>
            <p>Total Protein: ${totalProtein.toFixed(2)}g</p>
            <p>Total Fat: ${totalFat.toFixed(2)}g</p>
            <p>Total Calories: ${totalCalories}</p>
            <p>Total Sugar: ${totalSugar.toFixed(2)}g</p>
        </div>
    `;
}

// Attach the click event handler to the Calculate Nutrition button
const calculateButton = document.getElementById("calculateButton");
calculateButton.addEventListener("click", calculateNutrition);
