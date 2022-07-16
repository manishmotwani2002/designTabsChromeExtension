export const getWeather = async () => {
  var ipAddress = "12.23.43";

  var cityName = "jaipur";

  await fetch("https://api.ipify.org/?format=json")
    .then((response) => response.json())
    .then((jsonResponse) => (ipAddress = jsonResponse.ip));

  await fetch(`https://ipinfo.io/${ipAddress}?token=143430dd9e24a2`)
    .then((response) => response.json())
    .then((data) => (cityName = data.city));

  return await fetch(
    `http://api.weatherapi.com/v1/current.json?key=7ea0669b6ec2439fa18165543221307&q=${cityName}&aqi=no`
  )
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      return err;
    });
};
