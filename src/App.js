import React from "react";
import "./App.css";
import Map from "./components/map";
import WeatherInfo from "./components/weatherInfo";

function App() {
  return (
    <div className="App">
      <section class="section">
        <div class="container">
          <h1 class="title">Hello World!</h1>
          <p class="subtitle">Weather Forecast by Location.</p>
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
