import axios from "axios";

export function setData(data) {
    return {
        type: "SET_DATA",
        data
    }
}

export function addData(data) {
    return (dispatch) => {
        return axios.post("http://localhost:8080/", data).then((response) => {
            dispatch(loadData());
        }).catch((error) => {
            throw error;
        });
    }
}

export function loadData() {
    return (dispatch) => {
        return axios.get("http://localhost:8080/").then((response) => {
            dispatch(setData(response.data.data));
        }).catch((error) => {
            throw error;
        })
    }
}