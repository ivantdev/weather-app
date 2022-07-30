const getTodayString = (date) => {
    const time = new Date(date * 1000);
    const todayString = time.toLocaleDateString("en-us" ,{ weekday: 'long', month: 'long', day: 'numeric' });
    return todayString;
};

const getMinDayString = (date) => {
    const time = new Date(date * 1000);
    const todayString = time.toLocaleDateString("en-us" ,{ weekday: 'long' });
    return todayString.slice(0,3);
};

const getDayMonth = (date) => {
    const time = new Date(date * 1000);
    const day = time.toLocaleDateString("en-us" ,{ day: 'numeric' });
    const month = time.toLocaleDateString("en-us" ,{ month: 'long' });
    return `${day} ${month.slice(0,3)}`
    
};

const getHour = (date) => {
    let midday;
    const time = new Date(date * 1000);
    let hour = time.getHours();
    if(hour > 11) {
        hour = hour === 12 ? hour : hour%12;
        midday = "PM";
    } else {
        midday = "AM";
    }
    hour = hour === 0 ? 12 : hour;
    return `${hour} ${midday}`;
};



export { getHour, getTodayString, getMinDayString, getDayMonth};