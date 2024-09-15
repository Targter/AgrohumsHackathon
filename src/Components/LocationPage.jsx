import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import axios from "axios";
import "leaflet/dist/leaflet.css";

function LocationMap({ setLocationn }) {
  const [location, setLocation] = useState({
    latitude: null,
    longitude: null,
    address: null,
    error: null,
  });

  const apiKey = "c5f18747e81e4e88ae9a9067892c9270"; // Replace with your OpenCage API key

  useEffect(() => {
    // Check if Geolocation is available
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;

          // Set the latitude and longitude in the state
          setLocation((prevState) => ({
            ...prevState,
            latitude,
            longitude,
          }));

          // Call OpenCage API to get the location address
          axios
            .get(
              `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${apiKey}`
            )
            .then((response) => {
              const { city, state, country } =
                response.data.results[0].components;

              const address = `${city ? city + ", " : ""}${state}, ${country}`;

              // Update the address in the state
              setLocation((prevState) => ({
                ...prevState,
                address,
              }));
            })
            .catch((error) => {
              setLocation((prevState) => ({
                ...prevState,
                error: "Error fetching location name",
              }));
            });
        },
        (error) => {
          setLocation((prevState) => ({
            ...prevState,
            error: error.message,
          }));
        }
      );
    } else {
      setLocation((prevState) => ({
        ...prevState,
        error: "Geolocation not supported",
      }));
    }
  }, [apiKey]);

  return (
    <div>
      {location.error ? (
        <p>Error: {location.error}</p>
      ) : (
        <div>
          {location.latitude && location.longitude && (
            <MapContainer
              center={[location.latitude, location.longitude]}
              zoom={12}
              //   style={{ height: "200px", width: "1380px" }}
              className="w-full h-[100px] mt-11"
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              <Marker position={[location.latitude, location.longitude]}>
                <Popup>
                  {location.address ? location.address : "You are here"}
                </Popup>
              </Marker>
            </MapContainer>
          )}
          {location.latitude && location.longitude && (
            <div style={{ marginTop: "10px" }} className="w-full text-center ">
              <p>
                <strong>Address:</strong>{" "}
                {location.address || "Address not available"}
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default LocationMap;
