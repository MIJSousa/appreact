import React, {useState} from "react";
import "./TemperatureUnits.css"

export default function TemperatureUnits(props){
    const [units, setUnits]=useState("celciusTemp");

function chooseCelcius(event){
event.preventDefault();
setUnits("celciusTemp");
}

function chooseFahr(event){
event.preventDefault();
setUnits("fahrTemp")
}
if(units === "celciusTemp"){
return(
<div>
<span className="temp-principal" id="current-temp"> {Math.round(props.celcius)}</span>
<span className="units">
ºC<span>|</span>
<a href="#" onClick={chooseFahr}>ºF</a>
</span>
</div>
);
}else{
return(
<div>
<span className="temp-principal" id="current-temp"> {Math.round(props.celcius * 9/5 + 32)}</span>
<span className="units">
<a href="#" onClick={chooseCelcius}>ºC</a><span>|</span>
ºF
</span>
</div>  
    );
}
}