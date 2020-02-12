export const Types = {
  SET: "weather/SET"
};

// --- reducers

const INITIAL_STATE = {};

export default function weather(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.SET:
      return { weatherInfo: action.payload.weatherInfo };
    default:
      return state;
  }
}

// --- actions

export const Creators = {
  setWeather: weatherInfo => ({
    type: Types.SET,
    payload: {
      weatherInfo: weatherInfo
    }
  })
};
