function initMap() {
    const latitude = 45.58694;
    const longitude = -62.64835;

    const mapOptions = {
        center: { lat: latitude, lng: longitude },
        zoom: 15
    };

    const map = new google.maps.Map(document.getElementById('map'), mapOptions);

    const marker = new google.maps.Marker({
        position: { lat: latitude, lng: longitude },
        map: map,
        title: 'Location'
    });
}

initMap();