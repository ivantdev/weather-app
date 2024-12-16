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
                    {iconSourceByCode[data?.weather[0].icon]}
                </div>
                <div className="details__description">
                    <span>{ `${data?.weather[0].main}: ${data?.weather[0].description}` }</span>
                </div>
            </div>
            <div className="details__right">
                <div className="details__temp">
                    <span className="temp__big-temp">
                        { getNumberOneDecimal(data.main?.temp) }°​​
                    </span>
                    <span className="temp__feels">Feels like { getNumberOneDecimal(data.main?.feels_like) } °​</span>
                </div>
                
                <div className="details__humidity">
                    <span className="humidity__icon">
                        <i className="fa-duotone fa-droplet-percent"></i>
                    </span>
                    <span className="other__text">{data.main?.humidity}%</span>
                </div>
                <div className="details__wind-speed">
                    <span className="wind__icon">
                        <i className="fa-duotone fa-wind"></i>
                    </span>
                    <span className="other__text">{ getNumberOneDecimal(data?.wind?.speed * 3.6) } km/h</span>
                </div>
            </div>
            
            <DayAndNight day={data.daily?.length > 0 ? data.daily[0]?.temp.day : 0} night={data.daily?.length > 0 ? data.daily[0]?.temp.night : 0} />
        </>
    );
};

export { CurrentWeather };