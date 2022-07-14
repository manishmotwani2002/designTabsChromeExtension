import React from "react";
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

    console.log("weather response", response);

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
    <div>
      <div>{weather.temperature}</div>
      <div>{weather.condition}</div>
      <div>
        <img src={`https:` + weather.conditionIcon} alt="Weather Icon" />
      </div>
      <div>{weather.city}</div>
      <div>{weather.country}</div>
    </div>
  );
}

export default Weather;
