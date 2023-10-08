import React from "react";

const Weather = ({ weather: { details } }) => {
  const mainFlex = "flex flex-row justify-center items-center my-12 ";

  return (
    <div>
      <div className={`${mainFlex}`}>
        <p className="text-3xl text-white italic ">{details}</p>
      </div>
    </div>
  );
};

export default Weather;
