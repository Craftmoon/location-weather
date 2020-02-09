import React from "react";
import PlacesAutocompĺete, {
  geocodeByAddress,
  getLatLng
} from "react-places-autocomplete";

import styles from "./searchbar.module.css";

const SearchBar = ({ setCoordinates, setAddress, address }) => {
  const handleSelect = async value => {
    const results = await geocodeByAddress(value);
    const latLng = await getLatLng(results[0]);
    setAddress(value);
    setCoordinates(latLng);
  };

  return (
    <div>
      <PlacesAutocompĺete
        value={address}
        onChange={setAddress}
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
