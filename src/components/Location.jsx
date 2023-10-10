import React from "react";
import { style } from "./style/style";

const Location = ({ weather: { name, country } }) => {
  return (
    <div className={`${style.mainFlex}`}>
      <p className="text-xl capitalize border border-sky-300 w-auto p-4 rounded-lg">
        {name} ,<span className="text-purple-500 italic ml-2">{country} </span>
      </p>
    </div>
  );
};

export default Location;
