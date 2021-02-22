import React, {useState} from "react";
import axios from "axios";
import "./Forecast.css";
import WeatherForecast from "./WeatherForecast";

export default function Forecast(props) {
const [loaded, setLoaded]=useState( false );
const[forecast, setForecast]=useState("");

function showForecast(response){
  setForecast(response.data);
  setLoaded(true);

  }
if( loaded ){
  console.log(forecast);
  return(
    <div className="forecast row">
      <WeatherForecast data={forecast.list[0]}/>
      <WeatherForecast data={forecast.list[1]}/>
      <WeatherForecast data={forecast.list[2]}/>
      <WeatherForecast data={forecast.list[3]}/>
      <WeatherForecast data={forecast.list[4]}/>

    </div>
  ) ;
}else{
  let url= `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=3cd100e112e7defa0b76141c9b64f0fc&units=metric`;
  axios.get(url).then(showForecast)
  return( 
  <div>"Loading..."</div>
  );
}
  
}
