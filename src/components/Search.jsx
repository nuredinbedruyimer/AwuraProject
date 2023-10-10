import React, { useState } from "react";
import { UilSearch, UilMapMarker } from "@iconscout/react-unicons";
import Converter from "./Converter";
import { style } from "./style/style";

const Search = ({ setQuery, units, setUnit }) => {
  const [cityName, setCityName] = useState("");
  // handle Our Current  Location
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

  // Search By Using City Name
  const handleCitySearch = () => {
    if (cityName !== "") {
      setQuery({ q: cityName });
    }
  };

  return (
    <div className="md:w-full flex gap-4 md:flex-row flex-col justify-center items-center md:my-6 my-2">
      <div className="flex md:flex-row   justify-center items-center space-x-4 ">
        <input
          type="text"
          placeholder="Search Here..."
          className=" py-1 focus:outline-none text-orange-500 pl-2 shadow-md rounded-lg border border-sky-300"
          onChange={(e) => setCityName(e.target.value)}
        />

        <UilSearch
          size={25}
          color="black"
          className={`relative top-0 right-12 cursor-pointer ${style.animation}`}
          onClick={handleCitySearch}
        />

        <UilMapMarker
          size={25}
          color="white"
          className={`relative top-0 right-6 cursor-pointer ${style.animation}`}
          onClick={handleLocation}
        />
      </div>
      <Converter units={units} setUnit={setUnit} />
    </div>
  );
};

export default Search;
