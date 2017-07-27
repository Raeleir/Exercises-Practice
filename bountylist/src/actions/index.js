import axios from "axios";

export function setData(data) {
    return {
        type: "SET_DATA",
        data
    }
}

export function loadData(data) {
    return (dispatch) => {
        return axios.get("localhost:8080/").then((response) => {
            dispatch(setData(response.data.data));
        }).catch((error) => {
            throw error;
        })
    }
}