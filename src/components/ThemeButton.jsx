import React, { useContext } from "react";
import { ApiContext } from "../context/ApiContext";

import "../styles/ThemeButton.css";

const ThemeButton = () => {
    const { themeDark, saveData, setThemeDark } = useContext(ApiContext);

    const onClick = () => {
        setThemeDark(!themeDark);
        saveData({ themeDark: !themeDark });
    };

    return (
        <div className="theme-button__container">
            <button onClick={onClick}>
            <i className="fa-solid fa-circle-half-stroke"></i>
            </button>
        
        </div>
    )
};

export { ThemeButton };