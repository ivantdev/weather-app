import React, { useEffect, useState } from "react";

function useLocalStorage(itemName, initialValue) {
    const [ item, setItem] = useState(initialValue);
    const [ themeDark, setThemeDark ] = useState('light');

    useEffect(() => {
        try {
            let parsedItem;
            const localStorageItem = localStorage.getItem(itemName);
            if(!localStorageItem) {
                localStorageItem.setItem(itemName, JSON.stringify(initialValue));
                parsedItem = [];
            } else {
                parsedItem = JSON.parse(localStorageItem);
            }
            setItem(parsedItem);
            setThemeDark(parsedItem[0].themeDark);
        } catch {}
    }, []);
    const saveItem = (newItem) => {
        console.log(newItem);
        try {
            const strigifiedItem = JSON.stringify([newItem]);
            localStorage.setItem(itemName, strigifiedItem);
            setItem(newItem);
            
            console.log("lo guardado", localStorage.getItem(itemName));
        } catch(error) {
            console.log(error);
        }
    };

    return ({
        item,
        saveItem,
        themeDark,
        setThemeDark,
    })
}

export { useLocalStorage };