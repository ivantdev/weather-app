import React from "react";
import { useApi } from "../hooks/useApi";
import { Hour } from "./Hour";
import "../styles/Hourly.css";

const Hourly = () => {
    // const data = useApi();

    let data = {};
    data.hourly = [
        {
            dt: 1633669100,
            temp: 23.4,
            weather: [
                {
                    icon: "01d"
                }
            ]
        },
        {
            dt: 1633669101,
            temp: 23.4,
            weather: [
                {
                    icon: "01d"
                }
            ]
        },
        {
            dt: 1633669102,
            temp: 23.4,
            weather: [
                {
                    icon: "01d"
                }
            ]
        },
        {
            dt: 1633669103,
            temp: 23.4,
            weather: [
                {
                    icon: "01d"
                }
            ]
        },
        {
            dt: 1633669204,
            temp: 23.4,
            weather: [
                {
                    icon: "01d"
                }
            ]
        },
        {
            dt: 1633669205,
            temp: 23.4,
            weather: [
                {
                    icon: "01d"
                }
            ]
        },
        {
            dt: 1633669206,
            temp: 23.4,
            weather: [
                {
                    icon: "01d"
                }
            ]
        },
        {
            dt: 1633669207,
            temp: 23.4,
            weather: [
                {
                    icon: "01d"
                }
            ]
        },
    ];
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