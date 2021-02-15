import React, {useState} from "react";
import "./Search.css";
import axios from "axios";


export default function Search() {
  let [city, setCity] = useState("");
  let [temperature, setTemperature] = useState("");
  let [description, setDescription] = useState("");
  let [humidity, setHumidity] = useState("");
  let [wind, setWind] = useState("");
  let [icon, setIcon] = useState("");
  let [fahrn, setFahrn]=useState(""); 
  let [celcius, setCelcius]=useState("");
  let [temp, setTemp]=useState("");

  function showWeather(response) {
    console.log(response);
    setTemperature(Math.round(response.data.main.temp));
    setDescription(response.data.weather[0].description);
    setHumidity(Math.round(response.data.main.humidity));
    setWind(Math.round(response.data.wind.speed));
    setIcon(response.data.weather[0].icon);
  }
  function chooseCity(event) {
    setCity(event.target.value);
  }

  function findWeather(event) {
    event.preventDefault();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3cd100e112e7defa0b76141c9b64f0fc&units=metric`;
    axios.get(url).then(showWeather);
  }


  function showCelcius(event) {
    event.preventDefault();
    setCelcius(Math.round(`${temperature}`));
    setTemp(celcius);
    }


   function showFahr(event) {
    event.preventDefault();
    setFahrn(Math.round((`${temperature}`)* 9 / 5 + 32)) 
    setTemp(fahrn);
  }

  return (
    <div className="search">
      <button id="current-location">📍 Current Location</button>
      <form onSubmit={findWeather}>
        <input
          type="text"
          placeholder=" 🔎 Search for a city"
          autocomplete="on"
          class="enter-city"
          id="city-selector"
          onChange={chooseCity}
        />
        <input type="submit" value="Search" class="search-city" />
      </form>
      <div class="row today">
      <div class="col center extremes align-self-center">
        <h1 class="city" id="current-city"> {city} </h1>
        <h6 id="currentDate"></h6>
      </div>
      <div class="col center principal align-self-center">
        <ul>
          <li>
            <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="icon" id="icon" />{" "}
          </li>
          <li class="temp">
            <h6 id="description"> {description}</h6>
            <span class="temp-principal" id="current-temp">
              {temperature}
            </span>{" "}
            <span class="units">
              <a href="#" id="celcius" onClick={showCelcius}>
                ºC
              </a>
              |
              <a href="#" id="fahr" onClick={showFahr}>
                 ºF
              </a>
            </span>
          </li>
        </ul>
      </div>
      <div class="col center extremes align-self-center">
        <ul>
          <li>
            <i class="fas fa-umbrella"></i>
            <span id="humidity">{humidity}</span>%
          </li>
          <li>
            <i class="fas fa-wind"></i>
            <span id="wind">{wind}</span> km/h
          </li>
        </ul>
      </div>
    </div>
    </div>
  );
}