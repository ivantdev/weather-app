import React, { useContext } from "react";
import { MapContainer, Marker, useMap, TileLayer } from "react-leaflet";
import { ApiContext } from "../context/ApiContext";

import "leaflet/dist/leaflet.css";
import "../styles/Map.css";

const Map = () => {
    const { coords, setLoading } = useContext(ApiContext);
    
    if (!coords) {
        return
    }
    return (
    <>
        <div className="map__title">
            <h2>Your current location</h2>
        </div>
        <MapContainer
            center={[coords.lat, coords.lon]}
            zoom={20}
            className="map__container"
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            >
                <Marker position={[coords.lat, coords.lon]}></Marker>
            </TileLayer>
        </MapContainer>
    </>
    );
};

export { Map };