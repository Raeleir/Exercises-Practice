import axios from "axios";

export function setData(data) {
    return {
        type: "SET_DATA",
        data
    }
}

export function loadData() {
    return (dispatch) => {
        return axios.get("http://localhost:8080/bounty/").then((response) => {
            dispatch(setData(response.data.data));
        }).catch((error) => {
            throw error;
        })
    }
}

export function addData(data) {
    return (dispatch) => {
        return axios.post("http://localhost:8080/bounty/", data).then((response) => {
            dispatch(loadData());
        }).catch((error) => {
            throw error;
        });
    }
}

export function deleteData(id) {
    return (dispatch) => {
        return axios.delete(`http://localhost:8080/bounty/${_id}`).then((response) => {
            dispatch(loadData());
        }).catch((error) => {
            throw error;
        })
    }
}

export function updateData(id, data) {
    return (dispatch) => {
        return axios.put(`http://localhost:8080/bounty/${_id}`, data).then((response) => {
            dispatch(loadData());
        }).catch((error) => {
            throw error;
        })
    }
}