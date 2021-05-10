import React, { useEffect, useState } from "react";

import WeatherItem from "../../components/weatherItem";
import useWeather from "../../hooks/useWeather";
import { IWeather } from "../../app/types";

import "./styles.css";

const ExtendedWeather = () => {
  const { getExtendedWeather } = useWeather();

  const [londonWeather, setLondonWeather] = useState<Array<IWeather>>([]);
  const [newYorkWeather, setNewYorkWeather] = useState<Array<IWeather>>([]);
  const [mumbaiWeather, setMumbaiWeather] = useState<Array<IWeather>>([]);
  const [sydneyWeather, setSydneyWeather] = useState<Array<IWeather>>([]);
  const [tokyoWeather, setTokyoWeather] = useState<Array<IWeather>>([]);

  const [weatherToDisplay, setWeatherToDisplay] = useState<Array<IWeather>>([]);
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [minTemp, setMinTemp] = useState<string>("");
  const [maxTemp, setMaxTemp] = useState<string>("");

  useEffect(() => {
    const initPage = async () => {
      try {
        const londonWeather = await getExtendedWeather("-0.11", "51.50");
        setLondonWeather(londonWeather);

        const newYorkWeather = await getExtendedWeather("74.0060", "40.7128");
        setNewYorkWeather(newYorkWeather);

        const mumbaiWeather = await getExtendedWeather("72.8777", "19.0760");
        setMumbaiWeather(mumbaiWeather);

        const sydneyWeather = await getExtendedWeather("151.2093", " 33.8688");
        setSydneyWeather(sydneyWeather);

        const tokyoWeather = await getExtendedWeather("139.6503", "35.676");
        setTokyoWeather(tokyoWeather);
      } catch (err) {
        setError(err.message);
      }
      setLoading(false);
    };
    initPage();
  }, []);

  useEffect(() => {
    const weather = londonWeather.concat(
      newYorkWeather,
      mumbaiWeather,
      sydneyWeather,
      tokyoWeather
    );

    const filteredWeather = weather.filter((item) => {
      const min = parseInt(minTemp);
      const max = parseInt(maxTemp);

      if (!isNaN(min)) {
        return item.temp >= min;
      }
      if (!isNaN(max)) {
        return item.temp <= max;
      }
      return null;
    });

    setWeatherToDisplay(filteredWeather);
  }, [minTemp, maxTemp]);

  if (error) return <div className={"error"}>{error}</div>;
  if (loading) return <div className={"loading"}>loading...</div>;

  return (
    <div>
      <div className={"input-container"}>
        <input
          className={"input-container__min"}
          type="number"
          placeholder="min temp"
          value={minTemp}
          onChange={(event) => {
            setMinTemp(event.target.value);
            setMaxTemp("");
          }}
        />
        <input
          type="number"
          placeholder="max temp"
          value={maxTemp}
          onChange={(event) => {
            setMaxTemp(event.target.value);
            setMinTemp("");
          }}
        />
      </div>
      <div className={"weather-container"}>
        {weatherToDisplay.map((item, index) => (
          <WeatherItem data={item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default ExtendedWeather;
