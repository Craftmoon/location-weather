import React, { useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";

const WeatherInfo = () => {
  const dispatch = useDispatch();
  const API_KEY = "b71f8aaa6ab8240589e73749628594f2";

  const coordinates = useSelector(state => state.coordinates);
  const weather = useSelector(state => state.weather);

  const APICall = `http://api.openweathermap.org/data/2.5/weather?lat=${coordinates.lat}&lon=${coordinates.lng}&appid=${API_KEY}`;

  const setWeatherInfo = weatherInfo => {
    dispatch({ type: "weather/SET", payload: { weatherInfo } });
  };

  const weatherRequest = () => {
    fetch(APICall, { method: "GET" })
      .then(res => res.json())
      .then(data => {
        setWeatherInfo(data);
      })
      .catch(error => {
        console.error(error);
      });
  };

  useMemo(() => {
    weatherRequest();
  }, [coordinates]);

  return (
    <div>
      {weather.weatherInfo !== undefined ? (
        <pre>{JSON.stringify(weather.weatherInfo, null, 2)}</pre>
      ) : (
        ""
      )}
    </div>
  );
};

export default WeatherInfo;
