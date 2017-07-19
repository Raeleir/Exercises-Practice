//let facts = (num) => {
//    let factors = 1;
//    for(i=0;i<=num/2;i++){
//        if(num % i === 0) factors++;
//    }
//    if(factors === 2) return 'Prime';
//    return factors;
//}

let facts = (num) => {
    let factors = 1;
    for(i=0;i<=num/2;i++){
        if(num % i === 0) factors++;
    }
    return factors === 2 ? "Prime" : factors;
}

module.exports = facts;