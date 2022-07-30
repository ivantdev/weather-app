import React from "react";
import { getDayMonth, getMinDayString } from "../utilities/getDates";
import { iconSourceByCode } from "./iconsObject";
import { getNumberOneDecimal } from "../utilities/getNumberOneDecimal";

import '../styles/Day.css';

const Day = ({ data, today }) => {
    return (
        <li className="daily__item">
            <div className="daily__date" title="Date of Prognostic">
                <span className="date-day">
                    {getMinDayString(data.dt)}
                </span>
                <span className="date-date">{ getDayMonth(data.dt) }</span>
            </div>
            <div className="daily__icon">
                <div className="next__icon">
                    { iconSourceByCode[data.weather[0].icon] }
                </div>
            </div>
            <div className="daily__day-temp daily-subgrid-temp"  title="Temperature on day">
                <span className="sun__icon">
                    <i className="fa-solid fa-sun"></i>
                </span>
                <span>{getNumberOneDecimal(data.temp.day)}°</span>
            </div>
            <div className="daily__night-temp daily-subgrid-temp"  title="Temperature on night">
                <span className="moon__icon">
                    <i className="fa-solid fa-moon"></i>
                </span>
                <span>{getNumberOneDecimal(data.temp.night)}°</span>
            </div>
            <div className="daily__min-temp daily-subgrid-temp" title="Minimum Temperature">
                <span className="min__icon">
                    <i className="fa-duotone fa-temperature-empty"></i>
                </span>
                <span>{getNumberOneDecimal(data.temp.min)}°</span>
            </div>
            <div className="daily__max-temp daily-subgrid-temp" title="Maximum Temperature">
                <span className="max__icon">
                    <i className="fa-duotone fa-temperature-full"></i>
                </span>
                <span>{getNumberOneDecimal(data.temp.max)}°</span>
            </div>
        </li>
    )
};

export { Day };