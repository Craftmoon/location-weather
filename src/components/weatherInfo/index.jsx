import React, { useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";

const WeatherInfo = () => {
  const dispatch = useDispatch();
  const API_KEY = "b71f8aaa6ab8240589e73749628594f2";

  const coordinates = useSelector(state => state.coordinates);
  const weather = useSelector(state => state.weather);

  const setWeatherInfo = (weatherInfo, type) => {
    dispatch({
      type: `weather/${
        type === "weather" ? "SET_CURRENT_WEATHER" : "SET_WEATHER_FORECAST"
      }`,
      payload: { weatherInfo }
    });
  };

  const weatherInfoRequest = type => {
    fetch(
      `http://api.openweathermap.org/data/2.5/${type}?lat=${coordinates.lat}&lon=${coordinates.lng}&appid=${API_KEY}`,
      { method: "GET" }
    )
      .then(res => res.json())
      .then(data => {
        setWeatherInfo(data, type);
      })
      .catch(error => {
        console.error(error);
      });
  };

  useMemo(() => {
    weatherInfoRequest("weather");
    weatherInfoRequest("forecast");
  }, [coordinates]);

  return (
    <div>
      {console.log(weather)}
      <div>
        Current Weather Info
        {weather.currentWeather !== undefined ? (
          <pre>{JSON.stringify(weather.currentWeather, null, 2)}</pre>
        ) : (
          "undefined"
        )}
      </div>
      <div>
        Weather Forecast Info
        {weather.weatherForecast !== undefined ? (
          <pre>{JSON.stringify(weather.weatherForecast, null, 2)}</pre>
        ) : (
          "undefined"
        )}
      </div>
    </div>
  );
};

export default WeatherInfo;
