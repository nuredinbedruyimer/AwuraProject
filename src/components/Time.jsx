import React from "react";
import { toLocalTime } from "../services/weatherService";

const Time = ({ weather: { dt, timezone } }) => {
  const mainFlex = "flex flex-row justify-center items-center my-12 ";
  const localTime = toLocalTime(dt, timezone);
  console.log(timezone);

  return (
    <div className={`${mainFlex}`}>
      <p className="text-xl font-extralight  uppercase ">{localTime}</p>
    </div>
  );
};

export default Time;
