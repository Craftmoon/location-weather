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
  const {
    SearchBox
  } = require("react-google-maps/lib/components/places/SearchBox");
  const google = window.google;
  const [latitude, longitude, userAddress] = useCoordinates({});
  const googleMapAPIKey = "AIzaSyBX1DZz2mY9XjFTFfPwhdZArN-AqQlt52E";
  const refs = {};

  const onPlacesChanged = () => {
    console.log("places changed");
  };

  function TestMap() {
    return (
      <GoogleMap
        defaultZoom={10}
        defaultCenter={{ lat: -27.59691, lng: -48.54958 }}
        center={{ lat: latitude || -27.59691, lng: longitude || -48.54958 }}
        defaultOptions={{
          mapTypeControl: false
        }}
      >
        <SearchBox
          defaultBounds={null}
          bounds={null}
          controlPosition={1}
          onPlacesChanged={onPlacesChanged}
        >
          <input
            type="text"
            placeholder="Search on Google Maps"
            style={{
              boxSizing: `border-box`,
              border: `1px solid transparent`,
              width: `300px`,
              height: `32px`,
              marginTop: `15px`,
              marginLeft: `15px`,
              padding: `0 12px`,
              borderRadius: `3px`,
              boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
              fontSize: `14px`,
              outline: `none`,
              textOverflow: `ellipses`
            }}
          />
        </SearchBox>
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
