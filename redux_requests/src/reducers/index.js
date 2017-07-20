let defaultState = {
    color: "green",
    names: ["green"]
};

const mainReducer = (state = defaultState, action) => {
    if(action.type === "RANDOM_COLOR"){
        return {
            ...state,
            color: action.color,
            names: action.names
        }
    } else {
        return state;
    }
};

export default mainReducer;