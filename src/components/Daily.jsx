import React from "react";
import { useApi } from "../hooks/useApi";
import { Day } from "./Day";

import "../styles/Daily.css"

const Daily = () => {
    // let data = useApi()
    let data = {};
    data.daily = [
            {
                dt: 1633669200,
                temp: {
                    day: 23.4,
                    night: 15.2,
                    min: 14.1,
                    max: 23.4
                },
                weather: [
                    {
                        icon: "01d"
                    }
                ]
            },
            {
                dt: 1633669201,
                temp: {
                    day: 23.4,
                    night: 15.2,
                    min: 14.1,
                    max: 23.4
                },
                weather: [
                    {
                        icon: "01d"
                    }
                ]
            },
            {
                dt: 1633669202,
                temp: {
                    day: 23.4,
                    night: 15.2,
                    min: 14.1,
                    max: 23.4
                },
                weather: [
                    {
                        icon: "01d"
                    }
                ]
            },
            {
                dt: 1633669203,
                temp: {
                    day: 23.4,
                    night: 15.2,
                    min: 14.1,
                    max: 23.4
                },
                weather: [
                    {
                        icon: "01d"
                    }
                ]
            },
            {
                dt: 1633669204,
                temp: {
                    day: 23.4,
                    night: 15.2,
                    min: 14.1,
                    max: 23.4
                },
                weather: [
                    {
                        icon: "01d"
                    }
                ]
            },
            {
                dt: 1633669205,
                temp: {
                    day: 23.4,
                    night: 15.2,
                    min: 14.1,
                    max: 23.4
                },
                weather: [
                    {
                        icon: "01d"
                    }
                ]
            },
            {
                dt: 1633669206,
                temp: {
                    day: 23.4,
                    night: 15.2,
                    min: 14.1,
                    max: 23.4
                },
                weather: [
                    {
                        icon: "01d"
                    }
                ]
            },
            
        ]
    const today = data?.daily[0];
    const daily = data?.daily.slice(1, data.daily.length);
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