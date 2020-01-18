import React, { useState } from "react";
import { useCoordinates } from "../../state/hooks/useCoordinates";
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker
} from "react-google-maps";
import styles from "./map.module.css";

const Map = () => {
  const [latitude, longitude, userAddress] = useCoordinates({});
  const googleMapAPIKey = "AIzaSyBX1DZz2mY9XjFTFfPwhdZArN-AqQlt52E";

  function TestMap() {
    return (
      <GoogleMap
        defaultZoom={10}
        defaultCenter={{ lat: -27.59691, lng: -48.54958 }}
        center={{ lat: latitude, lng: longitude }}
      >
        {
          <Marker
            position={{ lat: latitude, lng: longitude }}
            icon={{
              url: "/pin.svg",
              scaledSize: new window.google.maps.Size(30, 30)
            }}
          />
        }
      </GoogleMap>
    );
  }

  const WrappedMap = withScriptjs(withGoogleMap(TestMap));

  return (
    <div>
      <div>google maps here</div>
      <div>{latitude}</div>
      <div>{longitude}</div>
      <div>{userAddress}</div>
      <WrappedMap
        googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${googleMapAPIKey}&v=3.exp&libraries=geometry,drawing,places`}
        loadingElement={<div className={styles.map} />}
        containerElement={<div className={styles.map} />}
        mapElement={<div className={styles.map} />}
      />
    </div>
  );
};

export default Map;
