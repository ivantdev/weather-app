import React from "react";
import "../styles/Hour.css";
import { iconSourceByCode } from "./iconsObject";
import { getHour } from "../utilities/getDates";
import { getNumberOneDecimal } from "../utilities/getNumberOneDecimal";

const Hour = ( { data }) => {
    return (
        <li className="hourly__item">
            <span className="hourly__hour">
                {getHour(data.dt)}
            </span>
            <span className="hourly__icon next__icon">
                { iconSourceByCode[data.weather[0].icon] }
            </span>
            <span className="hourly__temp">
                { getNumberOneDecimal(data.temp) }°​​
            </span>
        </li>
    );
};

export { Hour };