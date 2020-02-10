import React from "react";
import "./App.css";
import Map from "./components/map";
import WeatherInfo from "./components/weatherInfo";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as CoordActions } from "./store/ducks/coordinates";

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

const mapStateToProps = state => ({
  coordinates: state.coordinates
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CoordActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
