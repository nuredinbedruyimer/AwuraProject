import React from "react";
import { iconUrl } from "../services/weatherService";
import { UilSun, UilWind, UilTear } from "@iconscout/react-unicons";

const Singleforcast = ({ data }) => {
  const {
    dt_txt,
    main: { temp, temp_max, temp_min, humidity },
    weather,
    wind: { speed },
  } = data;
  const iconurl = iconUrl(weather[0].icon);

  return (
    <div className="flex justify-between w-full items-center flex-row  gap-4  border border-sky-300 p-8 rounded-xl shadow-2xl mt-8">
      <div className="border border-orange-400 p-6 rounded-r-2xl">
        <p className=""> {dt_txt}</p>

        <img src={iconurl} alt="" className="w-16 h-16 rounded-full" />
        <p className="font-medium ">{weather[0].description}</p>
      </div>
      <div className="border border-pink-400 p-6 rounded-l-2xl">
        <div className="flex gap-2">
          <UilSun />
          <p className="text-sm font-semibold">
            Normal:
            <span className="text-sm text-slate-400 font-light"> {temp}°</span>
          </p>{" "}
        </div>
        <div className="flex gap-2">
          <UilSun />
          <p className="text-sm font-semibold">
            Low:
            <span className="text-sm text-slate-400 font-light">
              {" "}
              {temp_min}°
            </span>
          </p>{" "}
        </div>
        <div className="flex gap-2">
          <UilSun />
          <p className="text-sm font-semibold">
            High:
            <span className="text-sm text-slate-400 font-light">
              {" "}
              {temp_max}°
            </span>
          </p>{" "}
        </div>
        <div className="flex font-extralight text-sm justify-center items-center gap-2">
          <UilTear size={18} />
          <span className="ml-5">Humidity - {humidity}%</span>
        </div>
        <div className="flex font-extralight text-sm justify-center items-center  gap-2">
          <UilWind size={18} />
          <span>Wind Speed - {speed}</span>
        </div>
      </div>
    </div>
  );
};

export default Singleforcast;
