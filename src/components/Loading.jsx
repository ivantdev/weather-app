import React from "react";
import '../styles/Loading.css'

const Loading = () => {
    return (
        <div className="app__loading">
            <i className="fa-duotone fa-spinner-third fa-spin"></i>
        </div>
    )
};

export { Loading }