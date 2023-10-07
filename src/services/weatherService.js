import { DateTime } from "luxon";

export const VITE_API_KEY = "f9917a772d5c5ed8de6c24f7e403b0b7";
export const VITE_BASE_URL = "https://api.openweathermap.org/data/2.5";
const ICON_URL = "http://openweathermap.org/img/wn/";

const getWeatherData = async (info, serchParams) => {
  const url = new URL(VITE_BASE_URL + "/" + info);
  url.search = new URLSearchParams({ ...serchParams, appid: VITE_API_KEY });
  console.log(url);
  const response = await fetch(url);
  const weatherData = await response.json();
  console.log(weatherData);
  return weatherData;
};

const formatCurrentWeather = (data) => {
  const {
    coord: { lat, lon },
    main: { temp, feels_like, temp_min, temp_max, humidity },
    name,
    timezone,
    dt,
    sys: { country, sunrise, sunset },
    weather,
    wind: { speed },
  } = data;
  const { main: details, icon } = weather[0];
  return {
    lat,
    lon,
    temp,
    feels_like,
    temp_min,
    temp_max,
    humidity,
    name,
    dt,
    weather,
    timezone,

    speed,
    country,
    sunrise,
    sunset,
    details,
    icon,
  };
};

//   console.log("Data :", data);
//   let { timezone, daily, hourly } = data;
//   try {
//     console.log("Time Zone :", timezone);
//     daily = daily.slice(1, 6).map((d) => {
//       return {
//         title: toLocalTime(d.dt, timezone, "ccc"),
//         temp: d.temp.day,
//         icon: d.weather[0].icon,
//       };
//     });
//     hourly = hourly.slice(1, 6).map((hour) => {
//       return {
//         title: toLocalTime(hour.dt, timezone, "hh:mm a"),
//         temp: hour.temp.day,
//         icon: hour.weather[0].icon,
//       };
//     });
//     return { timezone, daily, hourly };
//   } catch (error) {
//     console.log("Error :".error);
//   }
// };
const getFormatedWeatherData = async (serchParams) => {
  const formattedCurrentWeather = await getWeatherData(
    "weather",
    serchParams
  ).then(formatCurrentWeather);

  return formattedCurrentWeather;
};
const getForcastWeatherData = async (searchParams) => {
  const formattedForcastWeather = await getWeatherData("forcast", lat, lon);
};
export const toLocalTime = (
  secs,
  zone,
  format = "cccc,dd LLL yyyy ' | Local time: 'hh:mm a"
) => DateTime.fromSeconds(secs).setZone(zone).toFormat(format);

export const iconUrl = (icon) => {
  return `${ICON_URL}${icon}@2x.png`;
};

export default getFormatedWeatherData;
