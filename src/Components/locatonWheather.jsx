// src/Weather.js
import React, { useState, useEffect } from "react";
import axios from "axios";

const Weather = ({ onweatherupdate }) => {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState("Mohali"); // Default city
  const [error, setError] = useState(null);

  useEffect(() => {
    // locaton && setCity(locaton);
    const fetchWeatherData = async () => {
      try {
        const response = await axios.get(
          "https://api.weatherapi.com/v1/current.json",
          {
            params: {
              key: "b5fd7e9923cd48d89fa113305241509", // Replace with your WeatherAPI key
              q: city,
              aqi: "no",
            },
          }
        );
        setWeatherData(response.data);
        // console.log(response.data.current, "this is response data");
        console.log(response.data.current.temp_c);
        console.log(response.data.current.humidity);
        console.log(response.data.location.name);

        const { temp_c, humidity } = response.data.current;
        const { name } = response.data.location;
        setError(null);

        if (onweatherupdate) {
          onweatherupdate({ temprature: temp_c, humidity, location: name });
        }
      } catch (err) {
        setError("City not found or other error occurred");
        setWeatherData(null);
      }
    };

    fetchWeatherData();
  }, [city, onweatherupdate]);

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  return (
    <div className=" flex flex-col items-center h-auto bg-blue-50 mt-2 mb-11">
      <h1 className="text-3xl font-bold mb-4">Weather Information</h1>
      <div className="w-full max-w-md bg-white shadow-md rounded-lg p-6">
        <input
          type="text"
          value={city}
          onChange={handleCityChange}
          placeholder="Enter city"
          className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {error && <p className="text-red-500 mt-4">{error}</p>}
        {weatherData && (
          <div className="mt-4">
            <h2 className="text-xl font-semibold">
              {weatherData.location.name}
            </h2>
            <p className="text-lg">
              Temperature: {weatherData.current.temp_c}°C
            </p>
            <p className="text-lg">Humidity: {weatherData.current.humidity}%</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Weather;
