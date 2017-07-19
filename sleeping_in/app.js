let sleepIn = (day, vacation) => {
    let allDays = "monday tuesday wednesday thursday friday saturday sunday";
    if(!allDays.includes(day.toLowerCase())){
       throw "not a calendar day";
    }
    return vacation || day.toLowerCase().split("").indexOf("s") === 0 ? true : false;
}

module.exports = sleepIn;