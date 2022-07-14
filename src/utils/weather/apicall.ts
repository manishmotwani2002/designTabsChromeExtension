const weatherDetails = (city) => {
  return fetch(`http://api.weatherapi.com/v1/current.json?key=7ea0669b6ec2439fa18165543221307&q=${city}&aqi=no
      `);
};
