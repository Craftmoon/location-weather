import { useEffect } from "react";

export const useGetUserCoordinates = ({ setCoordinates, setAddress }) => {
  const googleMapAPIKey = "AIzaSyBX1DZz2mY9XjFTFfPwhdZArN-AqQlt52E";

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
      alert("Geolocation is not supported by this browser.");
      console.log("Geolocation is not supported by this browser");
    }
  };

  const showPosition = ({ coords }) => {
    setCoordinates({
      lat: coords.latitude,
      lng: coords.longitude
    });

    reverseGeocodeCoordinates(coords.latitude, coords.longitude);
  };

  const reverseGeocodeCoordinates = (lat, lng) => {
    fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&sensor=false&key=${googleMapAPIKey}`
    )
      .then(response => response.json())
      .then(data => setAddress(data.results[0].formatted_address))
      .catch(error => alert(error));
  };

  const showError = error => {
    switch (error.code) {
      case error.PERMISSION_DENIED:
        alert("User denied the request for Geolocation.");
        break;
      case error.POSITION_UNAVAILABLE:
        alert("Location information is unavailable.");
        break;
      case error.TIMEOUT:
        alert("The request to get user location timed out.");
        break;
      case error.UNKNOWN_ERROR:
        alert("An unknown error occurred.");
        break;
    }
  };

  useEffect(() => {
    getLocation();
  }, []);
};
