import axios from "axios";

export function convertText(text) {
    let splitText = text.split(" ");
    return(dispatch) => {
        if(text !== ""){
            return axios.get(`https://api.icndb.com/jokes/random?escape=javascript&ampfirstName=${splitText[0]}`).then((response) => {
                console.log("convertText Log: " + response.data.value.joke);
                let joke = response.data.value.joke;
                dispatch(setText(joke));
            }).catch((err) => {
                throw err;
            })
        } else {
            return axios.get(`https://api.icndb.com/jokes/random?escape=javascript`).then((response) => {
                console.log("convertText Log: " + response.data.value.joke);
                let joke = response.data.value.joke;
                dispatch(setText(joke));
            }).catch((err) => {
                throw err;
            })
        }
    }
}

export function setText(text) {
    console.log("setText Log: " + text);
    return {
        type: "SET_TEXT",
        text
    }
}