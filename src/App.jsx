import TopCity from "./components/TopCity";
import Search from "./components/Search";
import Time from "./components/Time";
import Location from "./components/Location";
import Weather from "./components/weather/Weather";
import WeatherInfo from "./components/weather/WeatherInfo";
import Forcast from "./components/forcast/Forcast";

import getFormatedWeatherData from "./services/weatherService.js";
import { useState, useEffect } from "react";
import Pagenotfound from "./components/Pagenotfound";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const [query, setQuery] = useState({ q: "Jimma" });
  const [units, setUnit] = useState("metric");
  const [weather, setWeather] = useState(null);
  // Handle Backgrond Depend on Temp
  const handleBackgroundBasedOnTemprature = () => {
    if (!weather) {
      return "bg-slate-950";
    }
    const hotPoint = units === "metric" ? 25 : 78;
    if (weather.temp > hotPoint) {
      return "bg-orange-700";
    }
    return "bg-slate-950";
  };

  // fetch Formatted Data

  const fetchWeatherData = async () => {
    try {
      const data = await getFormatedWeatherData({ ...query, units });
      const message = query.q ? query.q : "Current Location";
      toast.success(`Fetching Weather Of : ${message}`);

      setWeather(data);
    } catch (error) {
      toast.error("Error Over here");
    }
  };
  useEffect(() => {
    fetchWeatherData();
  }, [query, units]);
  return (
    <div
      className={`${handleBackgroundBasedOnTemprature()} mx-auto max-w-screen-full  py-5 px-3   shadpw-2xl`}
    >
      <TopCity setQuery={setQuery} />
      <Search setQuery={setQuery} setUnit={setUnit} units={units} />
      {weather ? (
        <>
          <Time weather={weather} />
          <Location weather={weather} />
          <Weather weather={weather} />
          <WeatherInfo weather={weather} />
          <Forcast sample="Sample Forcast" weather={weather} />
          {/* <Forcast weather={weather} /> */}
        </>
      ) : (
        <>
          <Pagenotfound />
        </>
      )}
      <ToastContainer theme="colored" autoClose={5000} newestOnTop={true} />
    </div>
  );
};

export default App;
