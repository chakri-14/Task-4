import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchWeather } from "../store/weatherSlice";

const WeatherComponent = () => {
  const [city, setCity] = useState("");
  const dispatch = useDispatch();
  const { data, status, error } = useSelector((state) => state.weather);

  const handleSearch = () => {
    if (city.trim()) {
      dispatch(fetchWeather(city));
      setCity("");
    }
  };

  return (
    <div>
      <h2>Weather App</h2>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city"
      />
      <button onClick={handleSearch}>Search</button>

      {status === "loading" && <p>Loading...</p>}
      {status === "failed" && <p>Error: {error}</p>}
      {data && (
        <div>
          <h3>{data.name}</h3>
          <p>Temperature: {data.main.temp}°C</p>
          <p>Condition: {data.weather[0].description}</p>
        </div>
      )}
    </div>
  );
};

export default WeatherComponent;
