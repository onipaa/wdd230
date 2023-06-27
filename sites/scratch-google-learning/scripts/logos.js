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

        const logoImage = document.createElement('img');
        logoImage.src = `images/${logo}.svg`;
        logoImage.alt = `${companyName} Logo`; 
  
        const spot1Div = document.getElementById('spot1');
        spot1Div.appendChild(cardContainer);
      })
      .catch(error => {
        console.error('Error fetching member data:', error);
      });
  };
  