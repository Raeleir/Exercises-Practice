let repeat = (str, count) => {
    if(count === 1) return str;
    return str + (repeat(str, count - 1))
}

module.exports = repeat;