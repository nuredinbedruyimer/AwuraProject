import React from "react";

const Location = ({ weather: { name, country } }) => {
  console.log("Country: ", country);
  const mainFlex = "flex flex-row justify-center items-center my-6";
  return (
    <div className={`${mainFlex}`}>
      <p className="text-xl capitalize border border-sky-300 w-auto p-4 rounded-lg">
        {name} ,<span className="text-purple-500 italic ml-2">{country} </span>
      </p>
    </div>
  );
};

export default Location;
