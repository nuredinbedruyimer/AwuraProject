import React from "react";
import { toLocalTime } from "../services/weatherService";
import { style } from "./style/style";

const Time = ({ weather: { dt, timezone } }) => {
  const localTime = toLocalTime(dt, timezone);
  console.log(timezone);

  return (
    <div className={` mt-4 ${style.mainFlex}`}>
      <p className="text-xl font-extralight  uppercase ">{localTime}</p>
    </div>
  );
};

export default Time;
