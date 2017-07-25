let defaultState = {
    text: ""
};

let mainReducer = (state = defaultState, action) => {
    if(action.type === "SET_TEXT") {
    console.log("mainReducer Log: " + action.text);
        return {
            ...state,
            text: action.text
        }
    } else {
        return {
            ...state
        }
    }
};

export default mainReducer;