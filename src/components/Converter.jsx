import React from "react";

const Converter = ({ units, setUnit }) => {
  // converting from Celecius to Fah
  const handleUnitConversion = (e) => {
    let newUnit = e.target.name;
    if (units !== newUnit) {
      setUnit(newUnit);
    }
  };
  return (
    <div className="flex justify-center items-center py-1 md:w-auto w-3/4    text-white gap-2 border border-sky-300 rounded-lg ">
      <button
        name="metric"
        className="cursor-pointer uppercase hover:text-slate-300 transition ease-out hover:scale-110"
        onClick={handleUnitConversion}
      >
        Celsius
      </button>
      <p className="font-bold text-purple-700">|</p>
      <button
        name="imperial"
        className="cursor-pointer uppercase hover:text-slate-300 transition ease-out hover:scale-110"
        onClick={handleUnitConversion}
      >
        Fahrenheit
      </button>
    </div>
  );
};

export default Converter;
