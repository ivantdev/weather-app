import React from "react";
import { useApi } from "../hooks/useApi";
import { getNumberOneDecimal } from "../utilities/getNumberOneDecimal";

import '../styles/CurrentWeather.css';
import { Hourly } from "./Hourly";
import { DayAndNight } from "./DayAndNight";
import { iconSourceByCode } from "./iconsObject";

const CurrentWeather = () => {
    const data = useApi();
    
    if(!data) {
        return
    }

    return (
        <>
            <div className="details__left">
                <div className="details__image">
                    {iconSourceByCode[data.current.weather[0].icon]}
                </div>
                <div className="details__description">
                    <span>{ `${data.current.weather[0].main}: ${data.current.weather[0].description}` }</span>
                </div>
            </div>
            <div className="details__right">
                <div className="details__temp">
                    <span className="temp__big-temp">
                        { getNumberOneDecimal(data.current.temp) }°​​
                    </span>
                    <span className="temp__feels">Feels like { getNumberOneDecimal(data.current.feels_like) } °​</span>
                </div>
                
                <div className="details__humidity">
                    <span className="humidity__icon">
                        <i className="fa-duotone fa-droplet-percent"></i>
                    </span>
                    <span className="other__text">{data.current.humidity}%</span>
                </div>
                <div className="details__wind-speed">
                    <span className="wind__icon">
                        <i className="fa-duotone fa-wind"></i>
                    </span>
                    <span className="other__text">{ getNumberOneDecimal(data.current.wind_speed * 3.6) } km/h</span>
                </div>
            </div>
            
            <DayAndNight day={data.daily[0].temp.day} night={data.daily[0].temp.night} />
        </>
    );
};

export { CurrentWeather };