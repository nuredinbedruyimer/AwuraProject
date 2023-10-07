import React, { useEffect, useState } from "react";
import axios from "axios";
import Singleforcast from "./Singleforcast";
import { VITE_API_KEY, VITE_BASE_URL } from "../services/weatherService";

const Forcast = ({ sample, weather: { lat, lon } }) => {
  const [forcastData, setForcastData] = useState(null);

  const getForcastWetherData = async () => {
    const response = await axios.get(
      `${VITE_BASE_URL}/forecast?lat=${lat}&lon=${lon}&appid=${VITE_API_KEY}`
    );
    const data = response.data;
    setForcastData(data.list);
  };
  console.log(forcastData);

  useEffect(() => {
    getForcastWetherData();
  }, []);

  return (
    <div className="">
      <div className="flex justify-start items-center mt-12 mb-6 mx-16">
        <p className="text-white font-medium uppercase">{sample}</p>
      </div>
      <hr className=" mx-16" />
      <div className="flex justify-between  gap-4 py-16   mx-16 mt-2">
        {forcastData &&
          forcastData.slice(0, 2).map((data, index) => {
            return <Singleforcast data={data} key={index} />;
          })}
      </div>
    </div>
  );
};

export default Forcast;
