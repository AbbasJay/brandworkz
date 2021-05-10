import axios from "axios";

const BASE_URL = "https://weatherbit-v1-mashape.p.rapidapi.com/";
const headers = {
  "x-rapidapi-key": "c895488edamsh72c0b6a364594c4p181be0jsnb8e5ba5c24e0",
  "x-rapidapi-host": "weatherbit-v1-mashape.p.rapidapi.com",
};

const useWeather = () => {
  const getWeather = async (lon: string, lat: string) => {
    const res = await axios.get(`${BASE_URL}/current?lon=${lon}&lat=${lat}`, {
      headers,
    });
    return res.data.data;
  };

  const getExtendedWeather = async (lon: string, lat: string) => {
    const res = await axios.get(
      `${BASE_URL}/forecast/daily?lon=${lon}&lat=${lat}`,
      {
        headers,
      }
    );
    return res.data.data;
  };

  return {
    getWeather,
    getExtendedWeather,
  };
};

export default useWeather;
