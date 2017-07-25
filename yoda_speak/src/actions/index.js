import axios from "axios";

let config = {
    header: {
        "X-Mashape-Key": "ydoXoQrHFfmsh6N8IE3C6r1Osz8ep1MAkh2jsnZZX99BCTLHAm"
    }
};

export function convertText(text) {
    return(dispatch) => {
        return axios.get(`https://yoda.p.mashape.com/yoda?sentence=${text}`, config).then((response) => {
            dispatch(setText(response.date));
        }).catch((err) => {
           throw err;
        })
    }
}

export function setText(text) {
    return {
        type: "SET_TEXT",
        text
    }
}