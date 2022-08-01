import React, { createContext, useState, useEffect } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

const ENDPOINT = process.env.REACT_APP_API;
const API_KEY = process.env.REACT_APP_API_KEY;


const ApiContext = createContext({});

const getGeoLocation = async () => {
    const location = window.navigator && window.navigator.geolocation;
    const [response, data] = await new Promise((resolve, reject) => {
        const success = (pos) => {
            const lat = pos.coords.latitude;
            const lon = pos.coords.longitude;
            const coords = {
                lat,
                lon
            };
            resolve([true, coords]);
        };
        const error = () => {
            const coords = {};
            resolve([false, coords]);
        };
        location.getCurrentPosition(success, error);
    });
    return {
        response ,data
    };
};


const ApiContextProvider = ( {children} ) => {
    const [ data, setData ] = useState(null);
    const [ loading, setLoading ] = useState(true);
    const [ coords, setCoords] = useState(null);
    const [ city, setCity ] = useState(null);
    
    const { item, saveItem: saveData, themeDark, setThemeDark } = useLocalStorage( "WEATHER_V1", {
        themeDark: false,
    });

    useEffect(() => {
        const fetchWeather = async ({lat, lon}, city=false) => {
            fetch(`${ENDPOINT}/onecall?lat=${lat}&lon=${lon}&lang=en&units=metric&appid=${API_KEY}`)
                .then((response) => response.json())
                .then((weather) => {
                    setData(weather);
                    setLoading(false);
                    if(!city) {
                        setCity(weather.timezone.split('/')[1]);
                    }
                });
        }

        const fetchLocationByIp = () => {
            const response = fetch("https://ipapi.co//json")
                .then(response => response.json())
                .then(response => {
                    setCity(response.city);
                    setCoords({
                        lat: response.latitude,
                        lon: response.longitude
                    });
                    return ({response: true,
                        localCoords: {
                            lat: response.latitude,
                            lon: response.longitude
                        }
                    });
                });
            return response;
        };

        const getGeoByIp = async () => {
            const { response, localCoords } = await fetchLocationByIp();
            if(response){
                fetchWeather(localCoords, true);
            }
        };

        const getGeoByUser = async () => {
            const { response, data: localCoords } = await getGeoLocation();
            if(response) {
                setCoords(localCoords);
                fetchWeather(localCoords);
            } else {
                getGeoByIp()
            }
        }
        getGeoByUser();
    }, []);
    return (
        <ApiContext.Provider value={{
            data,
            saveData,
            loading,
            setLoading,
            coords,
            city,
            themeDark,
            setThemeDark,
        }}>
            {children}
        </ApiContext.Provider>
    )
}


export {ApiContext, ApiContextProvider};