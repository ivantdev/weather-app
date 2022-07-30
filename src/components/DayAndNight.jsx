import React from "react";
import '../styles/DayAndNight.css';
import { getNumberOneDecimal } from "../utilities/getNumberOneDecimal";

const DayAndNight = ({ day, night }) => {
    return (
        <div className="details__wave-today">
            <div className="wave-container"></div>
            <div className="wave__day">
                <span className="sun__icon">
                    <i className="fa-solid fa-sun"></i>
                </span>
                <span className="other_text">{ getNumberOneDecimal(day) }° at day</span>
            </div>
            <div className="wave__night">
                <span className="moon__icon">
                    <i className="fa-solid fa-moon"></i>
                </span>
                <span className="other_text">{ getNumberOneDecimal(night) }° at night</span>
            </div>
        </div>
    );
};

export { DayAndNight };