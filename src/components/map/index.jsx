import React from "react";
import { useCoordinates } from "../../state/hooks/useCoordinates";
import { GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps";
import styles from "./map.module.css";

const Map = () => {
  const google = window.google;

  const [latitude, longitude] = useCoordinates({});

  function TestMap() {
    return (
      <GoogleMap
        defaultZoom={10}
        defaultCenter={{ lat: -19.592079, lng: -46.940552 }}
      />
    );
  }

  const WrappedMap = withScriptjs(withGoogleMap(TestMap));

  const key = "AIzaSyBX1DZz2mY9XjFTFfPwhdZArN-AqQlt52E";

  return (
    <div>
      <div>google maps here</div>
      <div>{latitude}</div>
      <div>{longitude}</div>
      <WrappedMap
        googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${key}&v=3.exp&libraries=geometry,drawing,places`}
        loadingElement={<div className={styles.map} />}
        containerElement={<div className={styles.map} />}
        mapElement={<div className={styles.map} />}
      />
    </div>
  );
};

export default Map;
