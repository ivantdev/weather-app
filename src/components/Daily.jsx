import React from "react";
import { useApi } from "../hooks/useApi";
import { Day } from "./Day";

import "../styles/Daily.css"

const Daily = () => {
    const data = useApi()
    if(!data) {
        return
    }
    const today = data.daily[0];
    const daily = data.daily.slice(1, data.daily.length);
    return (
        <div className="daily__list">
            <div className="daily__title">
                <h2>The next 7 days</h2>
            </div>
            <ul className="daily__list">
                <Day data={today} today={true}/>
                {daily.map((day) => (
                    <Day key={day.dt} data={day}/>
                ))}
            </ul>
        </div>
    );
};

export { Daily };