import React from "react";

const WeatherContext = React.createContext({
  Location: "",
  CurrentTemperature: "",
  HiToday: "",
  LoToday: "",
  Humidity: "",
  Conditions: "",
  Wind: "",
  lat: "",
  lon: "",
  uv: "",
  IconCode: "",
});

export default WeatherContext;
