import React, { Component, useEffect, useState } from "react";
import "../WeatherInfo/Weather.css";
import { BsClouds, BsSunrise } from "react-icons/bs";
import { WiHumidity } from "react-icons/wi";
import { FiCloudRain, FiWind } from "react-icons/fi";
import axios from "axios";

function Weather() {
  const [search, setSearch] = useState("Jaipur");
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    findData();
  }, []);
  const findData = async () => {
    try {
      await axios
        .get(
          `http://api.weatherapi.com/v1/current.json?key=3ae7af38673f4bed987171735232202&q=${search}`
        )
        .then((res) => {
          console.log(res.data);
          setWeatherData(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <div className="search">
        <input
          placeholder="search City"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="btn" onClick={findData}>
          Search
        </button>
      </div>
      {!weatherData ? (
        <p>No data found</p>
      ) : (
        <div className="card-weather">
          <div className="weather-icon">
            <BsClouds style={{ fontSize: "5.7rem" }} />
          </div>
          <div className="Weather-report">
            <div className="temperature">
              <span> {weatherData.current.temp_c}&deg;</span>
            </div>

            <div className="description">
              <div className="">{weatherData.current.condition.text}</div>
              <div className="location">
                {weatherData.location.name}, {weatherData.location.country}
              </div>
            </div>
            <div className="date">{weatherData.location.localtime}</div>
          </div>
          <div className="extra-descr">
            <div className="grid">
              <div className="grid-1">
                <p>{weatherData.current.humidity}</p>
                <p>
                  <WiHumidity style={{ fontSize: "30px" }} />
                </p>
              </div>

              <div className="grid-1">
                <p>{weatherData.current.pressure_in}</p>
                <p>
                  <FiCloudRain style={{ fontSize: "22px" }} />
                </p>
              </div>

              <div className="grid-1">
                <p>{weatherData.current.wind_kph} kph</p>
                <p>
                  <FiWind style={{ fontSize: "22px" }} />
                </p>
              </div>
              <div>
                <img src={weatherData.current.condition.icon} height="90px" />{" "}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export default Weather;
