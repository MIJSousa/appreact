import React, {useState} from "react";
import axios from "axios";
import "./Forecast.css";

export default function Forecast(props) {
const [loaded, setLoaded]=useState( false );

function showForecast(response){
setLoaded(true);
  }
if( loaded ){
  return(
    "Loaded"
  ) ;
}else{
  let url= `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=3cd100e112e7defa0b76141c9b64f0fc&units=metric`;
  axios.get(url).then(showForecast)
  return( 
  <div className="row forecast" id="fiveDays">{props.city}</div>
  );
}
  
}
