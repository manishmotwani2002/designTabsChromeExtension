import React from "react";
import "./index.css";
import { getWeather } from "../../utils/weather/apicall";
function Weather() {
  const [weather, setWeather] = React.useState({
    temperature: "temp_c",
    condition: "current.condition.text",
    conditionIcon: "current.condition.icon",
    city: "location.name",
    country: "location.country",
  });

  React.useEffect(async () => {
    const response = await getWeather();

    setWeather({
      ...weather,
      temperature: response.current.temp_c,
      condition: response.current.condition.text,
      conditionIcon: response.current.condition.icon,
      city: response.location.name,
      country: response.location.country,
    });
  }, []);

  getWeather;
  return (
    <div className="weather-root">
      <div className="weather-sub-container">
        <div>{weather.condition}</div>
        <div>
          <img src={`https:` + weather.conditionIcon} alt="Weather Icon" />
        </div>
      </div>

      <div className="">
        <div className=" temperature">{weather.temperature}&deg;C</div>
        <div>
          {weather.city}, {weather.country}
        </div>
      </div>
    </div>
  );
}

export default Weather;
