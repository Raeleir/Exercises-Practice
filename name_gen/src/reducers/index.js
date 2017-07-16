let defaultState = {
    name1: "",
    name2: "",
    name3: ""
};

const mainReducer = (state = defaultState, action) => {
    if(action.type === "PICK_NAME"){
        console.log("Reducer State", state);
        return {
            ...state,
            name1: action.name.name1,
            name2: action.name.name2,
            name3: action.name.name3
        }
    } else {
        return {
            ...state
        }
    }
};

export default mainReducer;