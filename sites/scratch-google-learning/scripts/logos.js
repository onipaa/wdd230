// same pattern as I did with the weather json fetch; however, I am only 
// pointing to a raw json file (EZPZ). I have two entries in that file now and
// will probably have some collision in spot1 and spot2. I'll need to put 
// several companies in the members.json file before the "random" spots will
// become truly random.
document.addEventListener('DOMContentLoaded', function() {
    const apiUrl = 'data/members.json';
  
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        const randomIndex = Math.floor(Math.random() * data.length);
        const randomMember = data[randomIndex];
        const logo = randomMember.logos;
        const companyName = randomMember.company_name;
        const contactEmail = randomMember.contact_email;
        const contactName = randomMember.contact_name;
        const slogan = randomMember.slogan;
        const companyWeb = randomMember.web_address;
  
        const logoImage = document.createElement('img');
        logoImage.src = `images/${logo}`;
        logoImage.alt = `${companyName} Logo`;
  
        const cardContainer = document.createElement('div');
        cardContainer.className = 'card-container';
  
        const companyHeading = document.createElement('h2');
        companyHeading.textContent = companyName;

        const companyLine = document.createElement('hr');

        const companySlogan = document.createElement('p');
        companySlogan.textContent = slogan;

        const companyContact = document.createElement('p');
        companyContact.textContent = contactName;

        const companyEmail = document.createElement('p');
        companyEmail.textContent = contactEmail;

        const companyLink = document.createElement('a');
        companyLink.href = companyWeb;
        companyLink.textContent = companyWeb;        
             
        const spot1Div = document.getElementById('spot1');
        if (spot1Div) {
            spot1Div.appendChild(cardContainer);
            cardContainer.appendChild(logoImage);
            cardContainer.appendChild(companyHeading);
            cardContainer.appendChild(companyLine);
            cardContainer.appendChild(companySlogan);
            cardContainer.appendChild(companyContact);
            cardContainer.appendChild(companyEmail);
            cardContainer.appendChild(companyLink);
            
          } else {
            console.error('Element with ID "spot1" not found in the document.');
        }

        const spot2Div = document.getElementById('spot2');
        if (spot1Div) {
            spot1Div.appendChild(cardContainer);
            cardContainer.appendChild(logoImage);
            cardContainer.appendChild(companyHeading);
            cardContainer.appendChild(companyLine);
            cardContainer.appendChild(companySlogan);
            cardContainer.appendChild(companyContact);
            cardContainer.appendChild(companyEmail);
            cardContainer.appendChild(companyLink);
            
          } else {
            console.error('Element with ID "spot1" not found in the document.');
        }
        
        
        console.log(cardContainer)
        console.log(logoImage)
        console.log(companyHeading)
        console.log(companyEmail)
      })
      .catch(error => {
        console.error('Error fetching member data:', error);
      });

      fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        const randomIndex = Math.floor(Math.random() * data.length);
        const randomMember = data[randomIndex];
        const logo = randomMember.logos;
        const companyName = randomMember.company_name;
        const contactEmail = randomMember.contact_email;
        const contactName = randomMember.contact_name;
        const slogan = randomMember.slogan;
        const companyWeb = randomMember.web_address;
  
        const logoImage = document.createElement('img');
        logoImage.src = `images/${logo}`;
        logoImage.alt = `${companyName} Logo`;
  
        const cardContainer = document.createElement('div');
        cardContainer.className = 'card-container';
  
        const companyHeading = document.createElement('h2');
        companyHeading.textContent = companyName;

        const companyLine = document.createElement('hr');

        const companySlogan = document.createElement('p');
        companySlogan.textContent = slogan;

        const companyContact = document.createElement('p');
        companyContact.textContent = contactName;

        const companyEmail = document.createElement('p');
        companyEmail.textContent = contactEmail;

        const companyLink = document.createElement('a');
        companyLink.href = companyWeb;
        companyLink.textContent = companyWeb;        

        const spot2Div = document.getElementById('spot2');
        if (spot2Div) {
            spot2Div.appendChild(cardContainer);
            cardContainer.appendChild(logoImage);
            cardContainer.appendChild(companyHeading);
            cardContainer.appendChild(companyLine);
            cardContainer.appendChild(companySlogan);
            cardContainer.appendChild(companyContact);
            cardContainer.appendChild(companyEmail);
            cardContainer.appendChild(companyLink);
            
          } else {
            console.error('Element with ID "spot1" not found in the document.');
        }
                
        //console.log(cardContainer)
        //console.log(logoImage)
        //console.log(companyHeading)
        //console.log(companyEmail)
      })
      .catch(error => {
        console.error('Error fetching member data:', error);
      });

  });
  