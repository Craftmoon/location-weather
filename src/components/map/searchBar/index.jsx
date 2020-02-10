import React from "react";
import PlacesAutocompĺete, {
  geocodeByAddress,
  getLatLng
} from "react-places-autocomplete";
import { useSelector, useDispatch } from "react-redux";

import styles from "./searchbar.module.css";

const SearchBar = () => {
  const coordinates = useSelector(state => state.coordinates);
  const address = useSelector(state => state.address);

  const dispatch = useDispatch();
  const updateCoords = latLng => {
    dispatch({ type: "coordinates/UPDATE", payload: latLng });
  };
  const updateAddress = address => {
    dispatch({ type: "address/UPDATE", payload: { address: address } });
  };

  const handleSelect = async value => {
    const results = await geocodeByAddress(value);
    const latLng = await getLatLng(results[0]);
    updateAddress(value);
    updateCoords(latLng);
  };

  return (
    <div>
      <PlacesAutocompĺete
        value={address}
        onChange={updateAddress}
        onSelect={handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <input
              className={styles.searchBar}
              {...getInputProps({ placeholder: "Type address" })}
            />

            <div>
              {loading ? "loading..." : null}

              {suggestions.map(suggestion => {
                const style = {
                  backgroundColor: suggestion.active ? "#ddd" : "white"
                };

                return (
                  <div {...getSuggestionItemProps(suggestion, { style })}>
                    {suggestion.description}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocompĺete>
    </div>
  );
};

export default SearchBar;
