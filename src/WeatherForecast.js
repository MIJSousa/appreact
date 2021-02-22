import React from "react";
import "./WeatherForecast.css"

export default function WeatherForecast(props){
    return(
    <div className="col">
      <div>
        {new Date(props.data.dt *1000).getHours()}:00
      </div>
      <div className="icon">
      <img src={`http://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`} />
      </div>
      <div>{Math.round(props.data.main.temp)}ºC</div>
    </div> 
    );
}