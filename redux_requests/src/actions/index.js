import axios from "axios";

export function loadColor() {
    return (dispatch) => {
        return axios.get("http://www.colr.org/json/color/random").then((response) => {
            dispatch(randomColor(response.data));
        })
    }
}

export function randomColor(data){
    let tags = data.colors[0].tags;
    let arr = [];
    console.log(tags);
    if(tags.length === 0){
        return {
            type: "RANDOM_COLOR",
            color: "green",
            names: ["green"]
        }
    } else {
        for(let i=0;i<tags.length;i++){
            arr.push(tags[i].name);
        }
        return {
            type: "RANDOM_COLOR",
            color: `#${data.new_color}`,
            names: arr
        }
    }
}