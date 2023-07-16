document.addEventListener('DOMContentLoaded', function() {
    function getRandomMembers() {
        fetch('./data/members.json')
            .then(response => response.json())
            .then(data => {
                var selectedMembers = [];
                while (selectedMembers.length < 3) {
                    var randomIndex = Math.floor(Math.random() * data.length);
                    if (!selectedMembers.includes(data[randomIndex])) {
                        selectedMembers.push(data[randomIndex]);
                    }
                }

            document.getElementById('spot1').innerHTML = `
            <img src=\"./images/${selectedMembers[0].logos}\">
            <h3>${selectedMembers[0].company_name}</h3>
            <hr>
            <p>${selectedMembers[0].slogan}</p>
            <p>${selectedMembers[0].contact_name}</p>
            <p>${selectedMembers[0].contact_email}</p>
            <p>${selectedMembers[0].contact_phone}</p>
            <p><a href=\"${selectedMembers[0].web_address}\">${selectedMembers[0].web_address}</a></p>
            <hr>
            <img src=\"./images/${selectedMembers[0].medals}.svg\">
            <figcaption>${selectedMembers[0].medals} member</figcaption>
            `;

                console.log('loaded spot1');

            document.getElementById('spot2').innerHTML = `
            <img src=\"./images/${selectedMembers[1].logos}\">
            <h3>${selectedMembers[1].company_name}</h3>
            <hr>
            <p>${selectedMembers[1].slogan}</p>
            <p>${selectedMembers[1].contact_name}</p>
            <p>${selectedMembers[1].contact_email}</p>
            <p>${selectedMembers[1].contact_phone}</p>
            <p><a href=\"${selectedMembers[1].web_address}\">${selectedMembers[1].web_address}</a></p>
            <hr>
            <img src=\"./images/${selectedMembers[1].medals}.svg\">
            <figcaption>${selectedMembers[1].medals} member</figcaption>
            `;

                console.log('loaded spot2');

            document.getElementById('spot3').innerHTML = `
            <img src=\"./images/${selectedMembers[2].logos}\">
            <h3>${selectedMembers[2].company_name}</h3>
            <hr>
            <p>${selectedMembers[2].slogan}</p>
            <p>${selectedMembers[2].contact_name}</p>
            <p>${selectedMembers[2].contact_email}</p>
            <p>${selectedMembers[2].contact_phone}</p>
            <a href=\"${selectedMembers[2].web_address}\">${selectedMembers[2].web_address}</a>
            <hr>
            <img src=\"./images/${selectedMembers[2].medals}.svg\">
            <figcaption>${selectedMembers[2].medals} member</figcaption>
            `;

                console.log('loaded spot3');
            })

            .catch(error => console.log(error));
    }

    getRandomMembers();
})