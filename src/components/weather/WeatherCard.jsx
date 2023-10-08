import React from "react";
import { UilTemperature, UilWind, UilTear } from "@iconscout/react-unicons";

const WeatherCard = ({
  weather: { humidity, temp, speed, feels_like, timezone },
}) => {
  return (
    <div className=" h-32 flex flex-col justify-center items-center  space-y-2 border border-sky-300 shadow-xl rounded-l-xl p-4">
      <div className="flex font-extralight text-sm justify-center items-center gap-2">
        <UilTemperature size={18} />
        <span>Temprature - {feels_like}°</span>
      </div>
      <div className="flex font-extralight text-sm justify-center items-center  gap-2">
        <UilWind size={18} />
        <span>Wind Speed - {speed}km/hr</span>
      </div>
      <div className="flex font-extralight text-sm justify-center items-center gap-2">
        <UilTear size={18} />
        <span>Humidity - {humidity}%</span>
      </div>
    </div>
  );
};

export default WeatherCard;
