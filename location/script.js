const display = document.getElementById("display");

function getLocation() {
    if (navigator.geolocation) {
        //navigator.geolocation.getCurrentPosition(showPosition, showError);
        navigator.geolocation.watchPosition(showPosition, showError);
    } else {
        display.innerHTML("Geolocation is not available in your browser!")
    }
}

function showPosition(position) {
    display.innerHTML =
        "Latitude: " +
        position.coords.latitude +
        "<br/>Longitude: " +
        position.coords.longitude;

}

function showError(error) {
    switch (error.code) {
        case error.PERMISSION_DENIED:
            display.innerHTML = "User denied the request for Geolocation.";
            break;
        case error.POSITION_UNAVAILABLE:
            display.innerHTML = "Location information is unavailable.";
            break;
        case error.TIMEOUT:
            display.innerHTML = "The request to get user location timed out.";
            break;
        case error.UNKNOWN_ERROR:
            display.innerHTML = "An unknown error occurred.";
            break;
    }
}

/*
//w3 scholl
The getCurrentPosition() Method - Return Data
The getCurrentPosition() method returns an object on success. The latitude, longitude and accuracy properties are always returned. The other properties are returned if available:

Property	Returns
coords.latitude	The latitude as a decimal number (always returned)
coords.longitude	The longitude as a decimal number (always returned)
coords.accuracy	The accuracy of position (always returned)
coords.altitude	The altitude in meters above the mean sea level (returned if available)
coords.altitudeAccuracy	The altitude accuracy of position (returned if available)
coords.heading	The heading as degrees clockwise from North (returned if available)
coords.speed	The speed in meters per second (returned if available)
timestamp	The date/time of the response (returned if available)



*/