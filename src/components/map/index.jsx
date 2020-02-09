import React, { useState } from "react";
import { useGetUserCoordinates } from "../../state/hooks/useGetUserCoordinates";
import { GoogleMap, withGoogleMap, Marker } from "react-google-maps";
import SearchBar from "./searchBar/index";

import styles from "./map.module.css";

const Map = () => {
  // const google = window.google;
  const [coordinates, setCoordinates] = useState({
    lat: -27.59691,
    lng: -48.54958
  });
  const [address, setAddress] = useState("");

  useGetUserCoordinates({ setCoordinates, setAddress });

  const MapWithAMarker = withGoogleMap(() => (
    <GoogleMap
      defaultZoom={10}
      defaultCenter={{ lat: -27.59691, lng: -48.54958 }}
      center={{
        lat: coordinates.lat || -27.59691,
        lng: coordinates.lng || -48.54958
      }}
      defaultOptions={{
        mapTypeControl: false
      }}
    >
      <Marker
        position={{ lat: coordinates.lat, lng: coordinates.lng }}
        icon={{
          url: "/pin.svg",
          scaledSize: new window.google.maps.Size(30, 30)
        }}
      />
    </GoogleMap>
  ));

  return (
    <div>
      <div>google maps here</div>
      <div>{coordinates.lat}</div>
      <div>{coordinates.lng}</div>
      <div>{address}</div>
      <SearchBar
        setCoordinates={setCoordinates}
        setAddress={setAddress}
        address={address}
      />
      <MapWithAMarker
        loadingElement={<div className={styles.map} />}
        containerElement={<div className={styles.map} />}
        mapElement={<div className={styles.map} />}
      />
    </div>
  );
};

export default Map;
