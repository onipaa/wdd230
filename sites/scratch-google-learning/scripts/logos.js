// same pattern as I did with the weather json fetch; however, I am only 
// pointing to a raw json file (EZPZ). I have two entries in that file now and
// will probably have some collision in spot1 and spot2. I'll need to put 
// several companies in the members.json file before the "random" spots will
// become truly random.

window.onload = function() {
    const apiUrl = 'data/members.json'; // Update the API URL to point to the members.json file
  
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        const randomIndex = Math.floor(Math.random() * data.length); 
        const randomMember = data[randomIndex];
  
        const logo = randomMember.logos;
        const companyName = randomMember.company_name;
        const contact = randomMember.contacts[0];
        const contactEmail = contact.email;
        const contactName = contact.name;
        const contactPhone = contact.cell_phone;
        const slogan = randomMember.slogan;
        const subscriptionIcon = randomMember.medals;
  
        const cardContainer = document.createElement('div');
        cardContainer.className = 'card-container';
  
        const companyHeading = document.createElement('h2');
        companyHeading.textContent = companyName;
  
        const sloganParagraph = document.createElement('p');
        sloganParagraph.textContent = slogan;

        const logoImage = document.createElement('img');
        logoImage.src = `images/${logo}.svg`;
        logoImage.alt = `${companyName} Logo`; 
  
        const contactList = document.createElement('ul');
        const contactNameItem = document.createElement('li');
        const contactPhoneItem = document.createElement('li');
        const contactEmailItem = document.createElement('li');
        contactNameItem.textContent = `Contact: ${contactName}`;
        contactPhoneItem.textContent = `Phone: ${contactPhone}`;
        contactEmailItem.textContent = `Email: ${contactEmail}`;
        contactList.appendChild(contactNameItem);
        contactList.appendChild(contactPhoneItem);
        contactList.appendChild(contactEmailItem);
  
        // Append the elements to the card container
        cardContainer.appendChild(logoImage);
        cardContainer.appendChild(companyHeading);
        cardContainer.appendChild(sloganParagraph);
        cardContainer.appendChild(contactList);
  
        // Get the spot1 element and append the card container to it
        const spot1Div = document.getElementById('spot1');
        spot1Div.appendChild(cardContainer);
      })
      .catch(error => {
        console.error('Error fetching member data:', error);
      });
  };
  