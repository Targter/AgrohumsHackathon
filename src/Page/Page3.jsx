import React, { useEffect, useRef, useState } from "react";
import LocationMap from "../Components/LocationPage";
import Weather from "../Components/locatonWheather";
import { soilNutrients } from "../data"; // Make sure the path is correct
import LandingPage from "../Components/LandingPage";
import Navbar from "../Components/Navbar";
const Page3 = () => {
  const [location, setLocation] = useState(""); // For location input
  const [cropType, setCropType] = useState(""); // For crop type input
  const [weatherData, setWeatherData] = useState({
    temperature: "",
    humidity: "",
    location: "",
  }); // Placeholder for weather data
  const [buttonClick, setButtonClick] = useState(false); // To control form display
  const [selectedCheckbox, setSelectedCheckbox] = useState(null); // To track manual or auto selection
  const [nitrogen, setNitrogen] = useState(""); // Nitrogen input
  const [soilType, setSoilType] = useState(""); // Soil type input
  const [phosphorus, setPhosphorus] = useState(""); // Phosphorus input
  const [potassium, setPotassium] = useState(""); // Potassium input
  const [moisture, setMoisture] = useState(""); // Moisture input

  const handleCheckboxChange = (event) => {
    const { id } = event.target;
    setSelectedCheckbox((prev) => (prev === id ? null : id));
  };

  const selectCrop = (e) => {
    e.preventDefault();
    setButtonClick(true);
  };

  const handleWeatherUpdate = (newWeatherData) => {
    setWeatherData(newWeatherData); // Assuming Weather component provides this function to set temperature/humidity
  };

  const collectData = (e) => {
    e.preventDefault();

    const formData = {
      location: location,
      cropType: cropType,
      temperature: weatherData.temperature,
      humidity: weatherData.humidity,
      nitrogen: nitrogen,
      phosphorus: phosphorus,
      potassium: potassium,
      soilType: soilType,
      moisture: moisture,
    };

    console.log(formData); // Logs the collected data object for verification
    alert(JSON.stringify(formData, null, 2)); // Display the form data in a more user-friendly way
  };

  const generateAutoData = () => {
    // Randomly select a state and soil type
    const states = Object.keys(soilNutrients);
    const randomState = states[Math.floor(Math.random() * states.length)];
    const soilTypes = Object.keys(soilNutrients[randomState]);
    const randomSoilType =
      soilTypes[Math.floor(Math.random() * soilTypes.length)];

    // Get soil nutrients data
    const { Nitrogen, Phosphorus, Potassium } =
      soilNutrients[randomState][randomSoilType];

    // Generate random moisture
    const moisture = `${Math.floor(Math.random() * 31) + 5}%`; // Random moisture between 5% and 35%

    return {
      nitrogen: Nitrogen,
      phosphorus: Phosphorus,
      potassium: Potassium,
      moisture: moisture,
      state: randomState,
      soilType: randomSoilType,
    };
  };
  const weatherRef = useRef(null);

  useEffect(() => {
    if (weatherRef.current) {
      weatherRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  const handleAutoGenerate = (e) => {
    e.preventDefault();

    const autoData = generateAutoData();

    const formData = {
      location: location,
      cropType: cropType,
      temperature: weatherData.temperature,
      humidity: weatherData.humidity,
      nitrogen: autoData.nitrogen,
      phosphorus: autoData.phosphorus,
      potassium: autoData.potassium,
      soilType: autoData.soilType,
      moisture: autoData.moisture,
    };

    console.log(formData); // Logs the collected data object for verification
    alert(JSON.stringify(formData, null, 2)); // Display the form data in a more user-friendly way
  };

  return (
    <div>
      <Navbar />
      <div className="box w-full min-h-[600px] h-auto bg-blue-50">
        <LandingPage />
        <div className="w-full bg-blue-50 h-auto gap-11" ref={weatherRef}>
          <LocationMap setLocationn={setLocation} />
          <Weather location={location} onWeatherUpdate={handleWeatherUpdate} />
        </div>
        <div className="min-h-[600px]">
          <div className="w-full h-[30px] bg-black text-white text-center mt-2">
            Select Your Crop Type
          </div>
          <div className="w-full flex justify-center">
            <form className="w-full text-center mt-2 max-w-[550px] flex flex-col gap-2 items-center">
              <label htmlFor="cropType">Enter your crop Type: </label>
              {/* <input
              type="text"
              id="cropType"
              value={cropType}
              onChange={(e) => setCropType(e.target.value)}
            /> */}

              <input
                type="text"
                id="cropType"
                value={cropType}
                onChange={(e) => setCropType(e.target.value)}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 h-9 block w-[400px] p-3.5"
                placeholder="Wheat"
                required
              />
              <button
                type="submit"
                className="bg-green-200 w-[100px] h-[25px] ml-2"
                onClick={selectCrop}
              >
                Submit
              </button>
            </form>
          </div>

          {buttonClick && (
            <div className="w-full flex flex-col items-center mt-5 ">
              <div>Put Your Soil Testing Report :</div>

              <form className="gap-8 w-full text-center">
                <input
                  type="checkbox"
                  id="manual"
                  onChange={handleCheckboxChange}
                  checked={selectedCheckbox === "manual"}
                />

                <label htmlFor="manual">Added Manually</label>
                <input
                  type="checkbox"
                  id="autoGenerated"
                  onChange={handleCheckboxChange}
                  checked={selectedCheckbox === "autoGenerated"}
                  className="ml-6"
                />
                <label htmlFor="autoGenerated">Auto generated with AI</label>

                {selectedCheckbox && (
                  <div>
                    {selectedCheckbox === "manual" && (
                      <div className="w-full flex justify-around mt-4">
                        <div className=" w-[660px] flex flex-col items-center  gap-4">
                          <div className="flex items-center gap-3">
                            <label
                              htmlFor="nitrogen"
                              className=" text-sm font-medium text-gray-900 mr-5  h-4"
                            >
                              Nitrogen
                            </label>
                            <input
                              type="text"
                              id="nitrogen"
                              value={nitrogen}
                              onChange={(e) => setNitrogen(e.target.value)}
                              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 h-9 block w-[400px] p-3.5"
                              placeholder="Enter Nitrogen level"
                              required
                            />
                          </div>
                          <div className="flex items-center gap-3">
                            <label
                              htmlFor="soilType"
                              className=" text-sm font-medium text-gray-900 mr-5  h-4"
                            >
                              Soil Type
                            </label>
                            <input
                              type="text"
                              id="soilType"
                              value={soilType}
                              onChange={(e) => setSoilType(e.target.value)}
                              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 h-9 block w-[400px] p-3.5"
                              placeholder="Enter Soil Type"
                              required
                            />
                          </div>
                          <div className="flex items-center gap-3">
                            <label
                              htmlFor="phosphorus"
                              className=" text-sm font-medium text-gray-900 mr-5  h-4"
                            >
                              Phosphorus
                            </label>
                            <input
                              type="text"
                              id="phosphorus"
                              value={phosphorus}
                              onChange={(e) => setPhosphorus(e.target.value)}
                              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 h-9 block w-[400px] p-3.5"
                              placeholder="Enter Phosphorus level"
                              required
                            />
                          </div>
                          <div className="flex items-center gap-3">
                            <label
                              htmlFor="potassium"
                              className=" text-sm font-medium text-gray-900 mr-5  h-4"
                            >
                              Potassium
                            </label>
                            <input
                              type="text"
                              id="potassium"
                              value={potassium}
                              onChange={(e) => setPotassium(e.target.value)}
                              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 h-9 block w-[400px] p-3.5"
                              placeholder="Enter Potassium level"
                              required
                            />
                          </div>
                          <div className="flex items-center gap-3">
                            <label
                              htmlFor="moisture"
                              className=" text-sm font-medium text-gray-900 mr-5  h-4"
                            >
                              Moisture
                            </label>
                            <input
                              type="text"
                              id="moisture"
                              value={moisture}
                              onChange={(e) => setMoisture(e.target.value)}
                              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 h-9 block w-[400px] p-3.5"
                              placeholder="Enter moisture level"
                              required
                            />
                          </div>
                          <button
                            type="submit"
                            className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-[#31B099] w-full"
                            onClick={collectData}
                          >
                            Continue
                          </button>
                        </div>
                      </div>
                    )}
                    {selectedCheckbox === "autoGenerated" && (
                      <div className="w-full flex justify-center bg-green-50">
                        <div className="space-y-8 p-5 w-[660px]">
                          <button
                            type="submit"
                            className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-[#31B099] w-full"
                            onClick={handleAutoGenerate}
                          >
                            Generate Data
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page3;
