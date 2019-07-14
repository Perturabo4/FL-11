const formatTime = (num = 0) => {
    num = parseInt(num) || 0;
    let days,
        hours,
        minutes,
        result = num < 0 ? 0 : num,
        minutesInDay = 1440,
        minutesInHour = 60; 

    days = Math.floor(result/minutesInDay);

    result -= Math.floor(result/minutesInDay) * minutesInDay;

    hours = Math.floor(result/minutesInHour);

    result -= Math.floor(result/minutesInHour) * minutesInHour;
    
    minutes = result;

    return `${days} day(s) ${hours} hour(s) ${minutes} minute(s)`;
}
formatTime(1330); 