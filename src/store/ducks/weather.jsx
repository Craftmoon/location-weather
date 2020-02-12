export const Types = {
  SET_CURRENT_WEATHER: "weather/SET_CURRENT_WEATHER",
  SET_WEATHER_FORECAST: "weather/SET_WEATHER_FORECAST"
};

// --- reducers

const INITIAL_STATE = {};

export default function weather(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.SET_CURRENT_WEATHER:
      console.log("SET_CURRENT_WEATHER");
      return { ...state, currentWeather: action.payload.weatherInfo };
    case Types.SET_WEATHER_FORECAST:
      console.log("SET_WEATHER_FORECAST");

      return { ...state, weatherForecast: action.payload.weatherInfo };
    default:
      return state;
  }
}

// --- actions

export const Creators = {
  setCurrentWeather: currentWeather => ({
    type: Types.SET_CURRENT_WEATHER,
    payload: {
      currentWeather: currentWeather
    }
  }),
  setWeatherForecast: weatherForecast => ({
    type: Types.SET_WEATHER_FORECAST,
    payload: {
      weatherForecast: weatherForecast
    }
  })
};
