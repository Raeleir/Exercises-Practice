let defaultState = {
    color: "yellow"
};

const mainReducer = (state = defaultState, action) => {
    if(action.type === "RANDOM_COLOR"){
        console.log(action.color);
        return {
            ...state,
            color: action.color
        }
    } else {
        return state;
    }
};

export default mainReducer;