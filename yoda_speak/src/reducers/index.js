let defaultState = {
    text: "test text"
};

let mainReducer = (state = defaultState, action) => {
    if(action.type === "SET_TEXT") {
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