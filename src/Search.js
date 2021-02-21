import React, {useState} from "react";
import "./Search.css";
import axios from "axios";



export default function Search() {
  const [ready, setReady]=useState( false );
  const [weather, setWeather]=useState({});

    function showWeather(response) {
    console.log(response);
    setWeather({
    temperature: response.data.main.temp,
    description: response.data.weather[0].description,
    humidity: response.data.main.humidity,
    wind: response.data.wind.speed,
    icon: response.data.weather[0].icon,
    date: new Date(response.data.dt * 1000),
    city: response.data.name,
    });
    setReady( true );
  }


if(ready){
return (
    <div className="search">
      <button id="current-location">📍 Current Location</button>
      <form>
        <input
          type="text"
          placeholder=" 🔎 Search for a city"
          autocomplete="on"
          class="enter-city"
          id="city-selector"
        />
        <input type="submit" value="Search" class="search-city" />
      </form>
      <div class="row today">
      <div class="col center extremes align-self-center">
        <h1 class="city" id="current-city"> {weather.city} </h1>
        <h6 id="currentDate"></h6>
      </div>
      <div class="col center principal align-self-center">
        <ul>
          <li>
            <img src={`http://openweathermap.org/img/wn/${weather.icon}@2x.png`} alt="icon" id="icon" />{" "}
          </li>
          <li class="temp">
            <h6 className="text-capitalize" id="description"> {weather.description}</h6>
            <span class="temp-principal" id="current-temp">
              {Math.round(weather.temperature)}
            </span>{" "}
            <span class="units">
              <a href="#" id="celcius">
                ºC
              </a>
              |
              <a href="#" id="fahr">
                 ºF
              </a>
            </span>
          </li>
        </ul>
      </div>
      <div class="col center extremes align-self-center">
        <ul>
          <li>
            
            <span id="humidity">Humidity:{Math.round(weather.humidity)}</span>%
          </li>
          <li>
          
            <span id="wind">Wind:{Math.round(weather.wind)}</span> km/h
          </li>
        </ul>
      </div>
    </div>
    </div>
  );
  }else{
  let city="London";
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3cd100e112e7defa0b76141c9b64f0fc&units=metric`;
  
  axios.get(url).then(showWeather);

  return(
  "Loading..."
  );
  }
  
}