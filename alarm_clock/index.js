module.exports = (str) => {
    if(typeof str !== "string" || str.length !== 5){
      throw "Invalid Input";
    }

    let meridiem = "PM";
    let arr1 = ["twelve", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve"];
    let arr2 = ["poop", "poop", "twenty", "thirty", "fourty", "fifty"];
    let teens = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
    let hours = Number(str.substring(0, 2));
    let min = Number(str.substring(3, 5));

    if (hours < 12 || hours === 24) {
        meridiem = "AM";
    }
    hours = arr1[hours % 12];

    if(min > 19) {
        min = min % (Math.floor(min / 10) * 10) === 0 ? `${arr2[Math.floor(min / 10)]}` : `${arr2[Math.floor(min / 10)]}-${arr1[min % (Math.floor(min / 10) * 10)]}`;
    } else if(min > 0) {
      min = `o ${arr1[min]}`;
    } else min = min === 0 ? "" : teens[min % 10];

    return min !== "" ? `It's ${hours} ${min} ${meridiem}` : `It's ${hours} ${meridiem}`;
};