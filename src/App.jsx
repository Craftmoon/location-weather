import React from "react";
import "./App.css";
import Map from "./components/map";
import WeatherInfo from "./components/weatherInfo";

function App() {
  return (
    <div className="App">
      <section className="section">
        <div className="container">
          <h1 className="title">Hello World!</h1>
          <p className="subtitle">Weather Forecast by Location.</p>
        </div>
      </section>
      <section className="section">
        <Map />
        <WeatherInfo />
      </section>
    </div>
  );
}

export default App;
