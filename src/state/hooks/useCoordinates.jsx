import { useState, useEffect } from "react";

export const useCoordinates = () => {
  const [position, setPosition] = useState({});

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    }
  };

  const showPosition = ({ coords }) => {
    setPosition({
      latitude: coords.latitude,
      longitude: coords.longitude
    });
  };

  useEffect(() => {
    getLocation();
  }, []);

  return [position.latitude, position.longitude];
};
