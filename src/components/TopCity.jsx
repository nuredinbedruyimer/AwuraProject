import React from "react";

const TopCity = ({ setQuery }) => {
  const cities = [
    {
      id: 1,
      name: "Dessie",
    },
    {
      id: 2,
      name: "Jimma",
    },
    {
      id: 3,
      name: "Adama",
    },
    {
      id: 4,
      name: "Awasa",
    },
    {
      id: 5,
      name: "Gonder",
    },
  ];

  return (
    <div className=" flex justify-center items-center gap-8 mb-12">
      {cities.map((city) => {
        return (
          <div className="text-white" key={city.id}>
            <button
              onClick={() => setQuery({ q: city.name })}
              className="text-xl font-medium italic hover:text-sky-500 capitalize"
            >
              {city.name}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default TopCity;
