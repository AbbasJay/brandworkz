import React, { useEffect, useState } from "react";

import WeatherItem from "../../components/weatherItem";
import useWeather from "../../hooks/useWeather";
import { IWeather } from "../../app/types";

import "./styles.css";

const LocalWeather = () => {
  const { getWeather } = useWeather();

  const [weather, setWeather] = useState<Array<IWeather>>([]);
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [londonLonLat] = useState<Array<string>>(["-0.118092", "51.5074"]);

  useEffect(() => {
    const initPage = async () => {
      try {
        const weather = await getWeather(londonLonLat[0], londonLonLat[1]);
        setWeather(weather);
      } catch (err) {
        setError(err.message);
      }
      setLoading(false);
    };
    initPage();
  }, []);

  if (error) return <div className={"error"}>{error}</div>;
  if (loading) return <div className={"loading"}>loading...</div>;

  return (
    <div className={"weather-container"}>
      {`Local Weather in ${weather[0].city_name} is:`}{" "}
      <WeatherItem data={weather[0]} />
    </div>
  );
};

export default LocalWeather;
