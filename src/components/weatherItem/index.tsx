import { IWeather } from "../../app/types";

import { getWeatherIcon } from "../../helpers";

import "./styles.css";

interface IProps {
  data: IWeather;
}

const weatherItem = ({ data }: IProps) => {
  return (
    <div className="weather-item">
      <p className="weather-item__temp">{`${data.temp} degrees with`}</p>
      <p className="weather-item__desc">
        {data.weather.description.toLocaleLowerCase()}
      </p>
      <div className={"icon-container"}>
        <img src={getWeatherIcon(data.weather.description)} alt="logo"></img>
      </div>
    </div>
  );
};

export default weatherItem;
