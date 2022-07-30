import React from "react";
import { useApi } from "../hooks/useApi";
import { Hour } from "./Hour";
import "../styles/Hourly.css";

const Hourly = () => {
    const data = useApi();

    if (!data) {
        return
    }
    const { hourly } = data;
    hourly.length = 12;
    return (
        <div className="current__hourly">
            <div className="hourly__gradient"></div>
            <ul className="hourly__list">
                {hourly.map((hour) => (
                    <Hour key={hour.dt} data={hour} />
                ))}
            </ul>
        </div>
    )
};

export { Hourly };