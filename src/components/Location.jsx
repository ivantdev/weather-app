import React, { useContext, useEffect } from "react";
import { ApiContext } from "../context/ApiContext";
import "../styles/Location.css"
import { getTodayString } from "../utilities/getDates";

const Location = () => {
    const { data, city } = useContext(ApiContext);
    if(!data) {
        return <div className="current__location"></div>
    }
    return (
    <>
        <div className="current__location">
            <span className="location__icon">
                <i className="fa-solid fa-location-dot"></i>
            </span>
            <span className="location__location">{city}</span>
        </div>
        <div className="current__date">
            <span className="date">{ getTodayString(data.current?.dt || 1633669200) }</span>
        </div>
    </>
    );
};

export { Location };