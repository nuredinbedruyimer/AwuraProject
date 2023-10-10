import React from "react";
import WeatherCard from "./WeatherCard";
import { UilSun, UilSunset } from "@iconscout/react-unicons";
import { iconUrl, toLocalTime } from "../../services/weatherService";

const WeatherInfo = ({
  weather: {
    details,
    icon,
    temp,
    temp_min,
    temp_max,
    humidity,
    speed,
    sunrise,
    sunset,
    feels_like,
    timezone,
  },
}) => {
  //  To pass for weather card
  const someDetails = {
    humidity: humidity,
    speed: speed,
    feels_like: feels_like,
    timezone: timezone,
  };
  return (
    <div>
      <div className="md:flex md:flex-row justify-between mx-16 gap-4 items-center my-12 grid grid-cols-1 ">
        <div className="border border-orange-400 h-32 items-center flex px-16 rounded-r-xl">
          <img src={iconUrl(icon)} alt="" className="w-16 h-16 rounded-full" />
        </div>
        <div className="border border-green-600  h-32 flex items-center px-6 rounded-xl">
          <p className="text-5xl italic"> {temp}°</p>
        </div>
        <WeatherCard weather={someDetails} />
      </div>
      <div className="mx-16 md:divide-y-0 md:divide-x-2 divide-y-2  md:flex justify-center gap-6 items-center flex-col md:flex-row space-x-2 py-3  ">
        <div className="flex flex-row gap-3 py-4">
          <UilSun />
          <p className="text-xl font-semibold  ">
            Rise :
            <span className="text-xl text-slate-400 font-light">
              {" "}
              {toLocalTime(sunrise, timezone, "hh:mm a")}
            </span>
          </p>
        </div>

        <div className="flex flex-row gap-4  py-4">
          <UilSunset />
          <p className="text-xl font-semibold">
            Set :
            <span className="text-xl text-slate-400 font-light">
              {" "}
              {toLocalTime(sunset, timezone, "hh:mm a")}
            </span>
          </p>
        </div>
        <div className="flex flex-row gap-4  py-4">
          <UilSun />
          <p className="text-xl font-semibold">
            High:
            <span className="text-xl text-slate-400 font-light">
              {" "}
              {temp_max}°
            </span>
          </p>{" "}
        </div>
        <div className="flex flex-row gap-4">
          <UilSun />
          <p className="text-xl font-semibold">
            Low :
            <span className="text-xl text-slate-400 font-light">
              {" "}
              {temp_min}°
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default WeatherInfo;
