import React, { useState } from "react";
import { UilSearch, UilMapMarker } from "@iconscout/react-unicons";
import Converter from "./Converter";

const Search = ({ setQuery, units, setUnit }) => {
  const handleLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;
        setQuery({
          lat,
          lon,
        });
      });
    }
  };
  const handleCitySearch = () => {
    if (cityName !== "") {
      setQuery({ q: cityName });
    }
  };
  const [cityName, setCityName] = useState("");
  console.log("City Name :", cityName);
  console.log(units);

  const animation = "transition ease-out hover:scale-110";
  return (
    <div className="flex flex-row justify-center items-center my-6">
      <div className="flex flex-row w-3/4 justify-center items-center space-x-4 absolute ">
        <input
          type="text"
          placeholder="Search Here..."
          className="w-1/3 py-1 focus:outline-none text-orange-500 pl-2 shadow-md rounded-lg border border-sky-300"
          onChange={(e) => setCityName(e.target.value)}
        />

        <UilSearch
          size={25}
          color="black"
          className={`relative top-0 right-12 cursor-pointer ${animation}`}
          onClick={handleCitySearch}
        />

        <UilMapMarker
          size={25}
          color="white"
          className={`relative top-0 right-6 cursor-pointer ${animation}`}
          onClick={handleLocation}
        />
        <Converter units={units} setUnit={setUnit} />
      </div>
    </div>
  );
};

export default Search;