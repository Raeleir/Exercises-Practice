let exists = (word) => {
    for(key in dictionary){
            if(word.includes(key)){
                return true;
            } else {
                return false;
            }
        }
}

let addContent = (word, definition) => {
    if(exists(word)){
        return null;
    } else {
        dictionary[word] = definition;
    }
}

let lookUp = (word) => {
    return dictionary[word];
}

let dictionary = {};



module.exports = {
    addContent,
    lookUp
}