export const Types = {
  UPDATE: "coordinates/UPDATE"
};

// --- reducers

const INITIAL_STATE = {
  lat: -27.59691,
  lng: -48.54958
};

export default function coordinates(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.UPDATE:
      return { lat: action.payload.lat, lng: action.payload.lng };
    default:
      return state;
  }
}

// --- actions

export const Creators = {
  updateCoordinates: (lat, lng) => ({
    type: Types.UPDATE,
    payload: {
      lat: lat,
      lng: lng
    }
  })
};
