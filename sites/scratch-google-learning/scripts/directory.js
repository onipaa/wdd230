const toggleButton = document.getElementById('toggleButton');
const toggleCardsCheckbox = document.getElementById('toggleCards');

console.log(toggleCardsCheckbox.value);

toggleButton.addEventListener('click', function() {
    toggleCardsCheckbox.checked = !toggleCardsCheckbox.checked;
    console.log(toggleCardsCheckbox.checked);

    if (toggleCardsCheckbox.checked) {
        displayCards();
        removeTable();
        cardContainer.style.display = 'block';
    } else {
        displayTable();
        removeCards();
        cardContainer.style.display = 'none';
    }
});

function displayCards() {    
    fetch('./data/members.json')
    .then(response => response.json())
    .then(data => {
        const cardsDiv = document.getElementById('cards');

        // Process the data and generate divs for each member
        data.forEach((member, index) => {
            const memberDiv = document.createElement('div');
            memberDiv.classList.add('member');

            memberDiv.innerHTML = `
                <img src="./images/${member.logos}" alt="${member.company_name} Logo">
                <h3>${member.company_name}</h3>
                <hr>
                <p>${member.slogan}</p>
                <p>${member.contact_name}</p>
                <p>${member.contact_phone}</p>
                <p>${member.contact_email}</p>
                <p>Website: <a href="${member.web_address}">${member.web_address}</a></p>
                <hr>
                <p>Membership Level: ${member.membership_level}</p>
                <img src="./images/${member.medals}.svg" alt="${member.membership_level} Medal">
            `;
            cardsDiv.appendChild(memberDiv);
        });

        const footer = document.createElement('footer');
        footer.classList.add('foot');
        footer.id = 'foot';
        footer.innerHTML = `
            <h1 style="text-align: center;">&copy; <span id="copyrightYear"></span> .:|:. John M Harper .:|:. Utah</h1>
            <p>Last Updated&nbsp;<span id="lastUpdatedDate"></span></p>
        `;

        // Append the footer after the last member card
        const lastMemberCard = document.querySelector('.member:last-child');
        if (lastMemberCard) {
            lastMemberCard.insertAdjacentElement('afterend', footer);
        } else {
            cardsDiv.appendChild(footer);
        }
    })
    .catch(error => {
        console.error('Error fetching members data:', error);
    });
}

function displayTable() {
    // Fetch and display members in an HTML table
    fetch('./data/members.json')
        .then(response => response.json())
        .then(data => {
            const tableDiv = document.getElementById('table');
            const table = document.createElement('table');
            table.classList.add('member-table');

            // Create table header
            const tableHeader = document.createElement('thead');
            const headerRow = document.createElement('tr');
            headerRow.innerHTML = `
                <th>Company Name</th>
                <th>Contact Name</th>
                <th>Contact Phone</th>
                <th>Contact Email</th>
                <th>Website</th>
                <th>Membership Level</th>
            `;
            tableHeader.appendChild(headerRow);
            table.appendChild(tableHeader);

            // Create table body
            const tableBody = document.createElement('tbody');
            data.forEach((member) => {
                const memberRow = document.createElement('tr');
                memberRow.innerHTML = `
                    <td align="left">${member.company_name}</td>
                    <td align="left">${member.contact_name}</td>
                    <td align="left">${member.contact_phone}</td>
                    <td align="left">${member.contact_email}</td>
                    <td align="center"><a href="${member.web_address}">${member.web_address}</a></td>
                    <td align="center">${member.membership_level}</td>
                `;
                tableBody.appendChild(memberRow);
            });
            table.appendChild(tableBody);

            // Append the table to the tableDiv
            tableDiv.innerHTML = '';
            tableDiv.appendChild(table);

            // Create the footer element
            const footer = document.createElement('footer');
            footer.classList.add('foot');
            footer.id = 'foot';
            footer.innerHTML = `
                <h1 style="text-align: center;">&copy; <span id="copyrightYear"></span> .:|:. John M Harper .:|:. Utah</h1>
                <p>Last Updated&nbsp;<span id="lastUpdatedDate"></span></p>
            `;

            // Append the footer after the table
            tableDiv.appendChild(footer);
        })
        .catch(error => {
            console.error('Error fetching members data:', error);
        });
}

function removeTable() {
    const tableDiv = document.getElementById('table');
    tableDiv.innerHTML = '';
}

function removeCards() {
    const cardsDiv = document.getElementById('cards');
    cardsDiv.innerHTML = '';
}

// Check the initial state of toggleCardsCheckbox and display cards if checked
if (toggleCardsCheckbox.checked) {
    displayCards();
    removteTable();
} else {
    displayTable();
    removeCards();
}
