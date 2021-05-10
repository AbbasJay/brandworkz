import cloudy from "../icons/weather-cloudy.png";
import hail from "../icons/weather-hail.png";
import lightning from "../icons/weather-lightning.png";
import rainy from "../icons/weather-rainy.png";
import snowy from "../icons/weather-snowy.png";
import sunny from "../icons/weather-sunny.png";
import unknown from "../icons/weather-unknown.png";

export const getWeatherIcon = (weatherDescription: string) => {
  const weather = weatherDescription.toLocaleLowerCase();

  if (weather.includes("cloud")) {
    return cloudy;
  }
  if (weather.includes("hail")) {
    return hail;
  }
  if (weather.includes("lightning")) {
    return lightning;
  }
  if (weather.includes("rain")) {
    return rainy;
  }
  if (weather.includes("snow")) {
    return snowy;
  }
  if (weather.includes("sun") || weather.includes("clear")) {
    return sunny;
  }
  return unknown;
};
